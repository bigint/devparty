import React from 'react'

export const PageLoading: React.FC = () => {
  return (
    <div className="flex flex-grow items-center justify-center">
      <img
        className="block h-15 sm:h-10 w-auto"
        src="/logo.svg"
        alt="Devparty"
      />
    </div>
  )
}
