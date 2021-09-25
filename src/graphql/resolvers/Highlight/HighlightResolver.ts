import { builder } from '@graphql/builder'
import { db } from '@utils/prisma'
import urlRegexSafe from 'url-regex-safe'

import { hasLiked } from '../Like/queries/hasLiked'
import { Result } from '../ResultResolver'
import { createHighlight } from './mutations/createHighlight'
import { deleteHighlight } from './mutations/deleteHighlight'
import { editHighlight } from './mutations/editHighlight'
import { exploreFeed } from './queries/exploreFeed'
import { getMoreHighlightByUser } from './queries/getMoreHighlightByUser'
import { homeFeed } from './queries/homeFeed'

builder.prismaObject('Highlight', {
  findUnique: (highlight) => ({ id: highlight.id }),
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title', { nullable: true }),
    body: t.exposeString('body'),
    type: t.exposeString('type'),
    done: t.exposeBoolean('done'),
    attachments: t.expose('attachments', {
      type: 'Attachments',
      nullable: true
    }),
    hasLiked: t.field({
      type: 'Boolean',
      resolve: async (parent, args, { session }) => {
        if (!session) return false
        return await hasLiked(session?.userId as string, parent.id)
      }
    }),
    oembedUrl: t.field({
      type: 'String',
      nullable: true,
      resolve: async (parent) => {
        try {
          // @ts-ignore
          return parent.body.match(urlRegexSafe())[0]
        } catch {
          return null
        }
      }
    }),

    // Timestamps
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),

    // Relations
    user: t.relation('user'),
    product: t.relation('product', { nullable: true }),
    parent: t.relation('parent', { nullable: true }),
    replies: t.relatedConnection('replies', {
      cursor: 'id',
      totalCount: true,
      query: () => ({
        where: { user: { spammy: false }, hidden: false },
        orderBy: { createdAt: 'desc' }
      })
    }),
    likes: t.relatedConnection('likes', { cursor: 'id', totalCount: true })
  })
})

builder.queryField('morePostsByUser', (t) =>
  t.prismaConnection({
    type: 'Highlight',
    cursor: 'id',
    args: {
      userId: t.arg.id(),
      type: t.arg.string()
    },
    resolve: async (query, parent, { userId, type }) => {
      return await getMoreHighlightByUser(query, userId, type)
    }
  })
)

builder.queryField('homeFeed', (t) =>
  t.prismaConnection({
    type: 'Highlight',
    cursor: 'id',
    defaultSize: 20,
    maxSize: 100,
    args: { type: t.arg.string({ defaultValue: 'ALL' }) },
    resolve: async (query, parent, { type }, { session }) => {
      return await homeFeed(query, type, session)
    }
  })
)

builder.queryField('exploreFeed', (t) =>
  t.prismaConnection({
    type: 'Highlight',
    cursor: 'id',
    defaultSize: 20,
    maxSize: 100,
    resolve: async (query) => {
      return await exploreFeed(query)
    }
  })
)

builder.queryField('post', (t) =>
  t.prismaField({
    type: 'Highlight',
    args: { id: t.arg.id() },
    resolve: async (query, parent, { id }) => {
      return await db.highlight.findFirst({
        ...query,
        where: { id, hidden: false },
        rejectOnNotFound: true
      })
    }
  })
)

const CreatePostInput = builder.inputType('CreatePostInput', {
  fields: (t) => ({
    title: t.string({
      required: false,
      validate: { minLength: 1, maxLength: 190 }
    }),
    parentId: t.id({ required: false }),
    productId: t.id({ required: false }),
    body: t.string({ validate: { minLength: 1, maxLength: 10000 } }),
    done: t.boolean({ defaultValue: true }),
    attachments: t.string({ required: false }),
    type: t.string({ defaultValue: 'POST' })
  })
})

builder.mutationField('createHighlight', (t) =>
  t.prismaField({
    type: 'Highlight',
    args: { input: t.arg({ type: CreatePostInput }) },
    resolve: async (query, parent, { input }, { session }) => {
      return await createHighlight(query, input, session)
    }
  })
)

const EditPostInput = builder.inputType('EditPostInput', {
  fields: (t) => ({
    id: t.id(),
    body: t.string({ required: false }),
    done: t.boolean({ required: false })
  })
})

builder.mutationField('editHighlight', (t) =>
  t.prismaField({
    type: 'Highlight',
    args: { input: t.arg({ type: EditPostInput }) },
    resolve: async (query, parent, { input }, { session }) => {
      return await editHighlight(query, input, session)
    }
  })
)

const DeletePostInput = builder.inputType('DeletePostInput', {
  fields: (t) => ({
    id: t.id()
  })
})

builder.mutationField('deleteHighlight', (t) =>
  t.field({
    type: Result,
    args: { input: t.arg({ type: DeletePostInput }) },
    resolve: async (parent, { input }, { session }) => {
      return await deleteHighlight(input, session)
    }
  })
)
