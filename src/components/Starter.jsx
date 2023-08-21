import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase-auth'
import NewThreadBox from './Pages/NewThreadBox';
import Focus from './Focus';


export default function Starter() {
  const [query, setquery] = useState("");
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  
  function useSearchResults(){
    navigate("/search",{state: {query: query} })
  }
  return (
    <>
    <div className="md:pb-md md:pr-md md:pt-sm grow">
    <div className="md:rounded-xl shadow-sm md:dark:border h-full border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark">
      <div className="md:flex justify-center h-full">
        <div className="w-full mx-auto h-full max-w-screen-md md:px-lg px-md py-lg">
          <div className="relative h-full flex flex-col">
            <div className="md:hidden border-b pb-lg flex items-center justify-between border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
              <div className="flex items-center space-x-sm">
                <div className="super font-sans text-base text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                  <div className="h-auto duration-300 rounded-md overflow-hidden group w-8">
                    <svg
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width={1024}
                        height={1024}
                        className="fill-zinc-900 dark:fill-zinc-300"
                      />
                      <svg className="fill-zinc-50 dark:fill-zinc-900 duration-1000">
                        <circle cx="512.408" cy="511.592" r="65.236" />
                        <circle cx="512.408" cy="731.764" r="65.236" />
                        <circle cx="512.408" cy="292.236" r="65.236" />
                        <circle cx="292.236" cy="511.592" r="65.236" />
                        <circle cx="292.236" cy="731.764" r="65.236" />
                        <circle cx="292.236" cy="292.236" r="65.236" />
                        <circle cx="732.579" cy="511.592" r="65.236" />
                        <circle cx="732.579" cy="731.764" r="65.236" />
                        <circle cx="732.579" cy="292.236" r="65.236" />
                      </svg>
                    </svg>
                  </div>
                </div>
                <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                  <div className="font-display font-semibold select-none text-3xl">
                    Perplexity
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grow flex items-center -mt-xl md:mt-0 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
              <div className="mb-lg md:mb-xl w-full">
                <div className="">
                  <div className="md:text-center mb-lg pb-xs">
                    <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <span className="text-3xl md:text-4xl font-medium">
                        The answer to any question.
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="grow">
                      <div>
                        <div className="rounded-full rounded-md">
                          <div className="relative flex items-center">
                            <textarea
                              placeholder="Ask anything..."
                              className="outline-none focus:outline-none w-full font-sans duration-200 transition-all caret-super focus:ring-1 resize-none overflow-auto max-h-[50vh] bg-white focus:bg-white border text-textMain border-borderMain focus:ring-borderMain place-holder-textOff dark:bg-offsetDark dark:focus:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark shadow-sm rounded-t-md rounded-b-md text-base p-md pb-xl"
                              autoComplete="off"
                              defaultValue={""}
                              value={query}
                              onChange={(event)=>{
                                  setquery(event.target.value)
                              }}
                              
                            />
                            <div
                              className="absolute m-[1px] bottom-0 py-[6px] flex justify-between px-[6px] bg-white focus:bg-white dark:bg-offsetDark dark:focus:bg-offsetDark rounded-b-md"
                              style={{ width: "calc(100% - 2px)" }}
                            >
                              <div className="absolute bg-background dark:bg-offsetDark rounded-full px-xs -ml-sm bottom-sm left-[6px] left-sm">
                                <div className="">
                                  <div>
                                    <button
                                      type="button"
                                      className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                                    >
                                      <div className="flex items-center leading-none justify-center gap-xs">
                                        <svg
                                          aria-hidden="true"
                                          focusable="false"
                                          data-prefix="fass"
                                          data-icon="circle-plus"
                                          className="svg-inline--fa fa-circle-plus fa-fw fa-1x"
                                          role="img"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 368V344 280H168 144V232h24 64V168 144h48v24 64h64 24v48H344 280v64 24H232z"
                                          />
                                        </svg>
                                        <span className="flex items-center relative">
                                          Focus
                                        </span>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-green absolute right-sm flex items-center gap-sm bg-background dark:bg-offsetDark rounded-full px-sm bottom-sm right-sm">
                                <button
                                  type="button"
                                  className="bg-super text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                                  onClick={useSearchResults}
                                >
                                  <div className="flex items-center leading-none justify-center gap-xs">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fass"
                                      data-icon="arrow-right"
                                      className="svg-inline--fa fa-arrow-right fa-fw fa-1x"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M422.6 278.6L445.3 256l-22.6-22.6-144-144L256 66.7 210.8 112l22.6 22.6L322.8 224 32 224 0 224l0 64 32 0 290.7 0-89.4 89.4L210.8 400 256 445.3l22.6-22.6 144-144z"
                                      />
                                    </svg>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-lg">
                      <div className="mb-sm md:text-center flex items-center gap-x-xs md:justify-center">
                        <div className="inline default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fass"
                            data-icon="arrow-right-to-arc"
                            className="svg-inline--fa fa-arrow-right-to-arc"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M448 256c0-106-86-192-192-192V0C397.4 0 512 114.6 512 256s-114.6 256-256 256V448c106 0 192-86 192-192zM230.6 121.4l112 112L365.3 256l-22.6 22.6-112 112L208 413.3 162.7 368l22.6-22.6L242.7 288H32 0V224H32 242.7l-57.4-57.4L162.7 144 208 98.7l22.6 22.6z"
                            />
                          </svg>
                        </div>
                        <div className="inline default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                          Try<span> asking </span>
                        </div>
                      </div>
                      <div className="flex gap-sm md:gap-xs md:justify-center md:items-center flex-wrap">
                        <a href="/search?q=history%20of%20Argentina">
                          <div className="animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
                            <div className="md:hidden">
                              <button
                                type="button"
                                className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                              >
                                <div className="flex items-center leading-none justify-center gap-xs">
                                  <span className="flex items-center relative">
                                    history of Argentina
                                  </span>
                                </div>
                              </button>
                            </div>
                            <div className="hidden md:block">
                              <button
                                type="button"
                                className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                              >
                                <div className="flex items-center leading-none justify-center gap-xs">
                                  <span className="flex items-center relative">
                                    history of Argentina
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </a>
                        <a href="/search?q=unique%20colorado%20flowers">
                          <div className="animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
                            <div className="md:hidden">
                              <button
                                type="button"
                                className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                              >
                                <div className="flex items-center leading-none justify-center gap-xs">
                                  <span className="flex items-center relative">
                                    unique colorado flowers
                                  </span>
                                </div>
                              </button>
                            </div>
                            <div className="hidden md:block">
                              <button
                                type="button"
                                className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                              >
                                <div className="flex items-center leading-none justify-center gap-xs">
                                  <span className="flex items-center relative">
                                    unique colorado flowers
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </a>
                        <a href="/search?q=checkout%20time%20w%20hotel%20cdmx">
                          <div className="animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
                            <div className="md:hidden">
                              <button
                                type="button"
                                className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                              >
                                <div className="flex items-center leading-none justify-center gap-xs">
                                  <span className="flex items-center relative">
                                    checkout time w hotel cdmx
                                  </span>
                                </div>
                              </button>
                            </div>
                            <div className="hidden md:block">
                              <button
                                type="button"
                                className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                              >
                                <div className="flex items-center leading-none justify-center gap-xs">
                                  <span className="flex items-center relative">
                                    checkout time w hotel cdmx
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div>
                <div className="flex md:justify-center flex-wrap gap-x-md gap-y-sm px-sm md:px-0 pb-2xl md:pb-0 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
                  <a href="/pro">
                    <div className="hover:underline super font-sans text-sm text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Try Pro
                    </div>
                  </a>
                  <a href="/about">
                    <div className="hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      About
                    </div>
                  </a>
                  <a href="/blog">
                    <div className="hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Blog
                    </div>
                  </a>
                  <a href="/privacy">
                    <div className="hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Privacy Policy
                    </div>
                  </a>
                  <a href="/tos">
                    <div className="hover:underline light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Terms of Service
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden left-0 fixed z-20 bottom-0 right-0 px-sm pb-sm border-t border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark">
            <div className="flex items-center gap-x-sm pt-sm pb-md">
              <button
                type="button"
                className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8"
              >
                <div className="flex items-center leading-none justify-center gap-xs">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fass"
                    data-icon="door-open"
                    className="svg-inline--fa fa-door-open fa-fw fa-1x"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M320 0L64 64V448H32 0v64H32 64 320V0zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480v32h32 64 32V448H544 512V96 64H480 352v64z"
                    />
                  </svg>
                  <span className="flex items-center relative">Login</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </>

  )
}
