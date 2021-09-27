import React from 'react'

interface Props {
  slug: string | undefined
  prefix?: string
  className?: string
}

const Slug: React.FC<Props> = ({ slug, prefix, className = '' }) => {
  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-600 dark:from-purple-400 to-pink-600 dark:to-pink-400 ${className}`}
    >
      {prefix}
      {slug}
    </span>
  )
}

export default Slug
