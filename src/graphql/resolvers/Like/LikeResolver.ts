import { builder } from '@graphql/builder'
import { toggleHighlightLike } from '../Highlight/mutations/toggleHighlightLike'

builder.prismaObject('Like', {
  findUnique: (like) => ({ id: like.id }),
  fields: (t) => ({
    id: t.exposeID('id'),

    // Timestamps
    createdAt: t.expose('createdAt', { type: 'DateTime' }),

    // Relations
    user: t.relation('user'),
    highlight: t.relation('highlight')
  })
})

const TogglePostLikeInput = builder.inputType('TogglePostLikeInput', {
  fields: (t) => ({
    id: t.id()
  })
})

builder.mutationField('toggleHighlightLike', (t) =>
  t.prismaField({
    type: 'Highlight',
    args: { input: t.arg({ type: TogglePostLikeInput }) },
    authScopes: { user: true },
    nullable: true,
    resolve: async (query, parent, { input }, { session }) => {
      return await toggleHighlightLike(
        query,
        session?.userId as string,
        input?.id
      )
    }
  })
)
