import { hasLiked } from '@graphql/resolvers/Like/queries/hasLiked'
import { createNotification } from '@graphql/resolvers/Notification/mutations/createNotification'
import { db } from '@utils/prisma'

export const toggleHighlightLike = async (
  query: any,
  userId: string,
  highlightId: string
) => {
  try {
    let like
    if (await hasLiked(userId, highlightId)) {
      await db.like.deleteMany({
        where: { userId, highlightId }
      })
    } else {
      like = await db.like.create({
        data: {
          highlight: { connect: { id: highlightId } },
          user: { connect: { id: userId } }
        }
      })
    }

    const highlight = await db.highlight.findFirst({
      ...query,
      where: { id: highlightId }
    })

    if (like && userId !== highlight?.userId) {
      await createNotification(
        userId,
        highlight?.userId,
        like?.id,
        'HIGHLIGHT_LIKE'
      )
    }

    return highlight
  } catch (error) {
    throw new Error('Something went wrong!')
  }
}
