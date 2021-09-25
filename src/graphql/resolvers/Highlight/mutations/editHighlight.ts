import { Session } from '@prisma/client'
import { db } from '@utils/prisma'
import { EditPostInput } from 'src/__generated__/schema.generated'

export const editHighlight = async (
  query: any,
  input: EditPostInput | null | undefined,
  session: Session | null | undefined
) => {
  const post = await db.highlight.findFirst({
    ...query,
    where: {
      id: input?.id,
      userId: session!.userId
    },

    rejectOnNotFound: true
  })

  return await db.highlight.update({
    where: { id: post?.id },
    data: { body: input?.body as string, done: input?.done as boolean }
  })
}
