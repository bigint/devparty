import React from 'react'

const Conversation: React.FC = () => {
  return (
    <div className="flex-col justify-between flex-1 hidden max-h-screen col-span-3  md:flex">
      <div className="flex justify-between pb-2 border-b-2 border-gray-200 dark:border-gray-800 sm:items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://avatar.tobi.sh"
            alt=""
            className="w-10 h-10 bg-gray-200 rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <div className="flex items-center text-xl">
              <span className="mr-3">Sasidharan0</span>
              <span className="text-green-500">
                <svg width="10" height="10">
                  <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                </svg>
              </span>
            </div>
            <span className="text-sm opacity-70">
              Creator of lagandlog.com 😄 (publicity)
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-3 pl-1 pr-2 space-y-4 max-h-[65vh] overflow-y-auto">
        <div>
          <div className="flex items-end">
            <div className="flex flex-col items-start order-2 max-w-xs mx-2 space-y-2 text-xs">
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg rounded-bl-none">
                  Can be verified on any platform using docker
                </span>
              </div>
            </div>
            <img
              src="https://avatar.tobi.sh"
              alt=""
              className="w-6 h-6 rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="flex items-end justify-end">
            <div className="flex flex-col items-end order-1 max-w-xs mx-2 space-y-2 text-xs">
              <div>
                <span className="inline-block px-4 py-2 text-white bg-brand-600 rounded-lg rounded-br-none ">
                  Your error message says permission denied, npm global installs
                  must be given root privileges.
                </span>
              </div>
            </div>
            <img
              src="https://avatar.tobi.sh"
              alt=""
              className="order-2 w-6 h-6 rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="flex items-end">
            <div className="flex flex-col items-start order-2 max-w-xs mx-2 space-y-2 text-xs">
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
                  Command was run with root privileges. I'm sure about that.
                </span>
              </div>
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
                  I've update the description so it's more obviously now
                </span>
              </div>
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
                  FYI https://askubuntu.com/a/700266/510172
                </span>
              </div>
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg rounded-bl-none">
                  Check the line above (it ends with a # so, I'm running it as
                  root )
                </span>
              </div>
            </div>
            <img
              src="https://avatar.tobi.sh"
              alt=""
              className="order-1 w-6 h-6 rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="flex items-end justify-end">
            <div className="flex flex-col items-end order-1 max-w-xs mx-2 space-y-2 text-xs">
              <div>
                <span className="inline-block px-4 py-2 text-white bg-brand-600 rounded-lg rounded-br-none ">
                  Any updates on this issue? I'm getting the same error when
                  trying to install devtools. Thanks
                </span>
              </div>
            </div>
            <img
              src="https://avatar.tobi.sh"
              alt=""
              className="order-2 w-6 h-6 rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="flex items-end">
            <div className="flex flex-col items-start order-2 max-w-xs mx-2 space-y-2 text-xs">
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg rounded-bl-none">
                  Thanks for your message David. I thought I'm alone with this
                  issue. Please, 👍 the issue to support it :)
                </span>
              </div>
            </div>
            <img
              src="https://avatar.tobi.sh"
              alt=""
              className="order-1 w-6 h-6 rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="flex items-end justify-end">
            <div className="flex flex-col items-end order-1 max-w-xs mx-2 space-y-2 text-xs">
              <div>
                <span className="inline-block px-4 py-2 text-white bg-brand-600 rounded-lg ">
                  Are you using sudo?
                </span>
              </div>
              <div>
                <span className="inline-block px-4 py-2 text-white bg-brand-600 rounded-lg rounded-br-none ">
                  Run this command sudo chown -R `whoami` /Users//.npm-global/
                  then install the package globally without using sudo
                </span>
              </div>
            </div>
            <img
              src="https://avatar.tobi.sh"
              alt=""
              className="order-2 w-6 h-6 rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="flex items-end">
            <div className="flex flex-col items-start order-2 max-w-xs mx-2 space-y-2 text-xs">
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
                  It seems like you are from Mac OS world. There is no /Users/
                  folder on linux 😄
                </span>
              </div>
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg rounded-bl-none">
                  I have no issue with any other packages installed with root
                  permission globally.
                </span>
              </div>
            </div>
            <img
              src="https://avatar.tobi.sh"
              alt=""
              className="order-1 w-6 h-6 rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="flex items-end justify-end">
            <div className="flex flex-col items-end order-1 max-w-xs mx-2 space-y-2 text-xs">
              <div>
                <span className="inline-block px-4 py-2 text-white bg-brand-600 rounded-lg rounded-br-none ">
                  yes, I have a mac. I never had issues with root permission as
                  well, but this helped me to solve the problem
                </span>
              </div>
            </div>
            <img
              src="https://avatar.tobi.sh"
              alt=""
              className="order-2 w-6 h-6 rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="flex items-end">
            <div className="flex flex-col items-start order-2 max-w-xs mx-2 space-y-2 text-xs">
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
                  I get the same error on Arch Linux (also with sudo)
                </span>
              </div>
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
                  I also have this issue, Here is what I was doing until now:
                  #1076
                </span>
              </div>
              <div>
                <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg rounded-bl-none">
                  even i am facing
                </span>
              </div>
            </div>
            <img
              src="https://avatar.tobi.sh"
              alt=""
              className="order-1 w-6 h-6 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="px-4 pt-4 mb-2 border-t-2 border-gray-200 dark:border-gray-800 sm:mb-0">
        <div className="relative flex">
          <input
            type="text"
            placeholder="Write Something"
            className="w-full px-5 py-2 mr-3 border-gray-300 dark:border-gray-700 placeholder-gray-600 bg-transparent rounded-lg focus:border-brand-500 focus:ring-brand-400 outline-none focus:placeholder-gray-400"
          />
          <div className="items-center hidden sm:flex">
            <button
              type="button"
              className="inline-flex items-center justify-center px-5 py-2 text-white transition duration-500 ease-in-out bg-brand-500 rounded-lg hover:bg-brand-400 outline-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conversation
