import React from 'react'

export default function Related(props) {
  return (
    <div className="">
    <div className="mt-lg border-t pt-lg animate-in fade-in ease-out duration-1000 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
      <div className="border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
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
                      data-icon="layer-plus"
                      className="svg-inline--fa fa-layer-plus fa-fw "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 24V0H440V24 56H408 384v48h24 32v32 24h48V136 104h32 24V56H520 488V24zM0 256L288 384 576 256 288 128 0 256zM288 419L104.6 337.5 0 384 288 512 576 384 471.4 337.5 288 419z"
                      />
                    </svg>
                  </div>
                  <div className="super font-sans text-base font-medium text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                    Related
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divide-y border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
            {
              props.data.map(item => (
                  <div key={item} className="py-sm cursor-pointer group flex items-center justify-between">
                    <div className="md:group-hover:text-super transition-all duration-300 default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      {item}
                    </div>
                    <div className="flex-none transition-all duration-300 ml-sm super font-sans text-base text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fass"
                        data-icon="plus"
                        className="svg-inline--fa fa-plus "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 80V48H192V80 224H48 16v64H48 192V432v32h64V432 288H400h32V224H400 256V80z"
                        />
                      </svg>
                    </div>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
