import React from 'react'

export default function AskBar() {
  return (
    <div className="z-10 border-t md:border-none bottom-0 md:bottom-lg  py-sm left-0 right-0 fixed md:left-sideBarWidth  justify-center px-sm md:p-0 animate-in slide-in-from-bottom-4 duration-300 ease-out border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
  <div className="max-w-screen-md md:px-lg mx-auto  border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
    <div className="rounded-full flex items-center gap-x-xs transition-all duration-300 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offset dark:bg-offsetDark">
      <div className="grow transition-all duration-300">
        <div>
          <div className="grow">
            <div>
              <div className="rounded-full md:p-sm bg-offset dark:bg-offsetDark">
                <div className="relative flex items-center">
                  <textarea
                    placeholder="Ask follow-up..."
                    className="outline-none focus:outline-none w-full font-sans duration-200 transition-all caret-super focus:ring-1 resize-none overflow-auto max-h-[50vh] bg-white focus:bg-white border text-textMain  border-borderMain focus:ring-borderMain place-holder-textOff dark:bg-offsetDark dark:focus:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark  dark:border-borderMainDark  dark:focus:ring-borderMainDark shadow-sm  rounded-t-[32px] rounded-b-[32px] py-md px-lg pr-[49px] md:pr-[59px]"
                    autoComplete="off"
                    autofocus=""
                    style={{ height: "57.3333px !important" }}
                    defaultValue={""}
                  />
                  <div />
                  <div className="bg-green absolute right-sm flex items-center gap-sm bg-background  dark:bg-offsetDark rounded-full px-sm">
                    <button
                      type="button"
                      className="bg-super text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-base aspect-square h-10"
                    >
                      <div className="flex items-center leading-none justify-center gap-xs">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fass"
                          data-icon="arrow-up"
                          className="svg-inline--fa fa-arrow-up fa-fw fa-lg "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="currentColor"
                            d="M214.6 57.4L192 34.7 169.4 57.4l-144 144L2.7 224 48 269.2l22.6-22.6L160 157.2V448v32h64V448 157.2l89.4 89.4L336 269.2 381.3 224l-22.6-22.6-144-144z"
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
      </div>
    </div>
  </div>
  <div className="md:hidden">
    <div className="flex items-center gap-x-sm pt-sm pb-md">
      <button
        type="button"
        className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8"
      >
        <div className="flex items-center leading-none justify-center gap-xs">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fass"
            data-icon="door-open"
            className="svg-inline--fa fa-door-open fa-fw fa-1x "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M320 0L64 64V448H32 0v64H32 64 320V0zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480v32h32 64 32V448H544 512V96 64H480 352v64z"
            />
          </svg>
          <span className="flex items-center relative ">Login</span>
        </div>
      </button>
    </div>
  </div>
</div>

  )
}
