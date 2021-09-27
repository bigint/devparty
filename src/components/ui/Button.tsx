import clsx from 'clsx'
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef
} from 'react'

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  outline?: boolean
  loading?: boolean
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    className = '',
    size = 'md',
    variant = 'primary',
    outline,
    loading,
    icon,
    children,
    ...rest
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={clsx(
        {
          'bg-purple-400 hover:bg-purple-500 border border-purple-500 text-white focus:ring-purple-300':
            !outline && variant === 'primary',
          'bg-gray-400 hover:bg-gray-500 border border-gray-500 text-white focus:ring-gray-300':
            !outline && variant === 'secondary',
          'bg-green-400 hover:bg-green-500 border border-green-500 text-white focus:ring-green-300':
            !outline && variant === 'success',
          'bg-red-400 hover:bg-red-500 border border-red-500 text-white focus:ring-red-300':
            !outline && variant === 'danger',
          'border border-purple-500 text-purple-500 hover:bg-purple-100 focus:ring-purple-400':
            outline && variant === 'primary',
          'border border-gray-500 text-gray-500 hover:bg-gray-100 focus:ring-gray-400':
            outline && variant === 'secondary',
          'border border-green-500 text-green-500 hover:bg-green-100 focus:ring-green-400':
            outline && variant === 'success',
          'border border-red-500 text-red-500 hover:bg-red-100 focus:ring-red-400':
            outline && variant === 'danger',
          'px-2 py-0.5': size === 'sm',
          'px-3 py-1': size === 'md',
          'px-4 py-1.5': size === 'lg',
          'flex items-center space-x-1.5': icon && children
        },
        'rounded-lg font-bold disabled:opacity-50 shadow-sm focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 outline-none',
        className
      )}
      disabled={loading}
      {...rest}
    >
      {icon}
      <div>{children}</div>
    </button>
  )
})
