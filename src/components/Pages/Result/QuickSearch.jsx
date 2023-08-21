import React from "react";

export default function QuickSearch(props) {
  console.log(props.data)
  return (
    <div className="mb-lg border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
      <div className="flex items-center">
        <div className="flex items-center gap-x-sm super font-sans text-base font-medium text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fass"
            data-icon="bolt"
            className="svg-inline--fa fa-bolt "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 288L320 0 260.7 197.6 432 224 128 512l59.3-197.6L16 288z"
            />
          </svg>
          <p>Quick Search</p>
        </div>
      </div>
      <div className="space-y-md mt-md">
        <div className="animate-in fade-in duration-1000">
          <div className="taco flex items-center gap-x-xs border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
            <div className="rounded-full animate-in zoom-in-50 duration-1000 ease-in-out">
              <div className="default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70" />
            </div>
            <div />
          </div>
          <div className="grow default font-sans text-sm text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
            <div className="grid grid-cols-2 gap-sm md:grid-cols-4">
              {
                props.data.map(
                  item => (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex group items-stretch "
                      >
                        <div className="flex group items-stretch cursor-pointer w-full relative min-h-[52px]">
                          <div className="rounded-md px-sm pt-sm pb-xs flex w-full ring-1 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  transition duration-300 bg-background dark:bg-backgroundDark md:hover:bg-offset md:dark:hover:bg-offsetDark">
                            <div className="relative z-10 flex flex-col justify-between h-full pointer-events-none select-none">
                              <div>
                                <div className="inline line-clamp-1 grow default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                                  {item.title}
                                </div>
                              </div>
                              <div className="flex items-center space-x-xs ">
                                <div className="flex items-center gap-x-xs border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                                  <div className="relative">
                                    <div className="rounded-full overflow-hidden">
                                      <img
                                        className="block w-[16px] h-[16px]"
                                        src={item.favicon}
                                        alt="favicon"
                                        width={16}
                                        height={16}
                                      />
                                    </div>
                                  </div>
                                  <div className=" duration-300 transition-all line-clamp-1 break-all light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                                    {item.website}
                                  </div>
                                </div>
                                <div className="light font-sans text-base font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                                  ·
                                </div>
                                <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                                  {item.count}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                  )
                  
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
