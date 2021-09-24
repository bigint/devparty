import clsx from 'clsx'
import React from 'react'

const ChatUserList: React.FC = () => {
  return (
    <div className="max-h-screen">
      <div className="md:flex">
        <div className="w-full">
          <div className="mb-4 pb-3 px-3">
            <h2 className="text-2xl font-bold">Messages</h2>
          </div>
          <div className="relative mb-4 px-2">
            <input
              type="text"
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:border-brand-500 focus:ring-brand-400 outline-none rounded-lg shadow-sm w-full py-1.5"
              placeholder="Search ..."
            />
          </div>
          <ul className="max-h-[70vh] overflow-y-auto">
            {Array(10)
              .fill(null)
              .map((_, i) => {
                return (
                  <li
                    key={i}
                    className={clsx(
                      'flex items-start hover:bg-gray-200 dark:hover:bg-gray-800 justify-between py-2 pr-3 mt-0.5 transition rounded-lg cursor-pointer',
                      { 'bg-gray-200 dark:bg-gray-800': i === 0 }
                    )}
                  >
                    <div className="flex ml-2 items-center">
                      <img
                        src="https://avatar.tobi.sh"
                        width="40"
                        height="40"
                        alt=""
                        className="w-10 h-10 bg-gray-200 rounded-full"
                      />
                      <div className="flex flex-col ml-2">
                        <span className="font-medium">Sasidharan{i}</span>
                        <span className="w-32 text-sm text-gray-400 truncate">
                          Hey, Yo, how are you..
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="opacity-50">11:26</span>
                    </div>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChatUserList
