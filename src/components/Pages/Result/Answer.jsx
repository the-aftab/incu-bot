import React, { useEffect, useState } from 'react'


export default function Answer(props) {

  useEffect(() => {
    document.getElementById('answer').innerHTML = props.data
    console.log(props.data)
  }, [props.data]);

  return (
    <div className="border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
            <div className="flex items-center justify-between border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
              <div className="flex items-center justify-between w-full mb-sm">
                <div className="">
                  <div
                    color="super"
                    className="space-x-sm flex items-center "
                  >
                    <div className="super font-sans text-base font-medium text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fass"
                        data-icon="align-left"
                        className="svg-inline--fa fa-align-left fa-fw "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M288 32V96H0V32H288zm0 256v64H0V288H288zM0 160H448v64H0V160zM448 416v64H0V416H448z"
                        />
                      </svg>
                    </div>
                    <div className="super font-sans text-base font-medium text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Answer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              <div className="break-words min-w-0 [word-break:break-word]">
                <div dir="auto">
                  <div id='answer' className="prose dark:prose-invert inline leading-normal break-words min-w-0 [word-break:break-word]">
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-xs mt-sm -ml-sm">
              <button
                type="button"
                className="text-textOff dark:text-textOffDark md:hover:bg-offsetPlus dark:md:hover:bg-offsetPlusDark  md:hover:text-superAlt font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
              >
                <div className="pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1">
                  <div className="py-xs px-sm rounded-md  border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offsetPlusDark">
                    <div className="default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <span className="text-zinc-200">
                        Not Accurate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center leading-none justify-center gap-xs">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fass"
                    data-icon="flag"
                    className="svg-inline--fa fa-flag fa-fw fa-1x "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M64 32V0H0V32 64 368 480v32H64V480 352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4L448 336V16L393.6 43.2c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
                    />
                  </svg>
                </div>
              </button>
              <button
                type="button"
                className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
              >
                <div className="pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1">
                  <div className="py-xs px-sm rounded-md  border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offsetPlusDark">
                    <div className="default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <span className="text-zinc-200">
                        View Sources
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center leading-none justify-center gap-xs">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fass"
                    data-icon="brackets-square"
                    className="svg-inline--fa fa-brackets-square fa-fw fa-1x "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 32h32V64 448v32H416 320 288V416h32 64V96H320 288V32h32 96zM32 32h96 32V96H128 64V416h64 32v64H128 32 0V448 64 32H32z"
                    />
                  </svg>
                </div>
              </button>
              <button
                type="button"
                className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
              >
                <div className="pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1">
                  <div className="py-xs px-sm rounded-md  border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offsetPlusDark">
                    <div className="default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <span className="text-zinc-200">
                        Copy To Clipboard
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center leading-none justify-center gap-xs">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fass"
                    data-icon="clipboard"
                    className="svg-inline--fa fa-clipboard fa-fw fa-1x "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M192 0c-41.8 0-77.4 26.7-90.5 64H0V512H384V64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272h16v32H272 112 96V192h16z"
                    />
                  </svg>
                </div>
              </button>
              <button
                type="button"
                className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
              >
                <div className="pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1">
                  <div className="py-xs px-sm rounded-md  border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offsetPlusDark">
                    <div className="default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <span className="text-zinc-200">
                        Edit Query
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center leading-none justify-center gap-xs">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fass"
                    data-icon="pen-to-square"
                    className="svg-inline--fa fa-pen-to-square fa-fw fa-1x "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M144 272L128 384l112-16L436.7 171.3l-96-96L144 272zM512 96L416 0 363.3 52.7l96 96L512 96zM32 64H0V96 480v32H32 416h32V480 320 288H384v32V448H64V128H192h32V64H192 32z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
  )
}
