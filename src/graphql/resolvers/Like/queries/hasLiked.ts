import { db } from '@utils/prisma'

export const hasLiked = async (userId: string, highlightId: string | null) => {
  const count: number = await db.like.count({
    where: { userId, highlightId }
  })

  return count === 0 ? false : true
}
