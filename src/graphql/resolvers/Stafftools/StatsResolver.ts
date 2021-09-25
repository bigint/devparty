import { builder } from '@graphql/builder'
import { db } from '@utils/prisma'

export class Stats {
  users: number
  products: number
  highlights: number
  likes: number
  topics: number
  badges: number
  notifications: number
  sessions: number

  constructor(
    users: number,
    products: number,
    highlights: number,
    likes: number,
    topics: number,
    badges: number,
    notifications: number,
    sessions: number
  ) {
    this.users = users
    this.products = products
    this.highlights = highlights
    this.likes = likes
    this.topics = topics
    this.badges = badges
    this.notifications = notifications
    this.sessions = sessions
  }
}

export const StatsObject = builder.objectRef<Stats>('Stats').implement({
  fields: (t) => ({
    users: t.exposeInt('users'),
    products: t.exposeInt('products'),
    highlights: t.exposeInt('highlights'),
    likes: t.exposeInt('likes'),
    topics: t.exposeInt('topics'),
    badges: t.exposeInt('badges'),
    notifications: t.exposeInt('notifications'),
    sessions: t.exposeInt('sessions')
  })
})

builder.queryField('stats', (t) =>
  t.field({
    type: StatsObject,
    nullable: true,
    authScopes: { isStaff: true },
    resolve: async () => {
      const users = await db.user.count()
      const products = await db.product.count()
      const highlights = await db.post.count()
      const likes = await db.like.count()
      const topics = await db.topic.count()
      const badges = await db.badge.count()
      const notifications = await db.notification.count()
      const sessions = await db.session.count()

      return new Stats(
        users,
        products,
        highlights,
        likes,
        topics,
        badges,
        notifications,
        sessions
      )
    }
  })
)
