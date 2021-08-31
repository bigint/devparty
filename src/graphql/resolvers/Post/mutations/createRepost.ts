import { Session } from '@prisma/client'

import { CreatePostInput } from '~/__generated__/schema.generated'
import { db } from '~/utils/prisma'

export const createRepost = async (
  query: any,
  input: CreatePostInput,
  session: Session | null | undefined
) => {
  let parentId = null

  if (input.parentId) {
    const parent = await db.post.findUnique({
      ...query,
      where: { id: input.parentId }
    })
    if (parent) {
      parentId = parent?.id
    } else {
      throw new Error('Incorrect parent ID')
    }
  }

  return await db.post.create({
    ...query,
    data: {
      userId: session!.userId,
      type: 'REPOST',
      parentId
    }
  })
}
