import React from 'react'

export default function Header(props) {
  return (
    <div className="md:rounded-t-3xl py-sm mx-md sticky left-0 md:min-h-[53px] right-0 top-0 md:mb-0 z-20 border-b border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
          <div className="flex items-center justify-between gap-x-md">
            <div className="hidden md:block">
              <div className="flex items-center gap-x-md">
                <div className=" rounded-full border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                  <div className="flex items-center gap-x-xs relative">
                    <div className="relative">
                      <div className="aspect-square rounded-full overflow-hidden flex items-center justify-center  w-5 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offsetPlus dark:bg-offsetPlusDark">
                        <div className="light font-sans text-base text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fass"
                            data-icon="user-secret"
                            className="svg-inline--fa fa-user-secret fa-xs "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M121.1 87.5L160 0l64 32L288 0l38.9 87.5C380.5 96 416 111 416 128c0 14.3-25 27.1-64.6 35.9c.4 4 .6 8 .6 12.1c0 17-3.3 33.2-9.3 48H416L375.3 336H416l32 176H0L32 336H72.7L32 224h73.3c-6-14.8-9.3-31-9.3-48c0-4.1 .2-8.1 .6-12.1C57 155.1 32 142.3 32 128c0-17 35.5-32 89.1-40.5zM144 224h64l8-32h16l8 32h64l13.5-54.1C289.8 173.8 258 176 224 176s-65.8-2.2-93.5-6.1L144 224zm-16 64l48 192 32-128-16-32-64-32zM272 480l48-192-64 32-16 32 32 128z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="line-clamp-1 break-all default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      {props.user ? props.user.email : "Annonymous user"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-sm  border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                  <div className="border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                    <div className="flex items-center gap-x-xs transition duration-300 select-none cursor-pointer hover:text-superAlt light font-sans text-sm font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <div className="">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fass"
                          data-icon="heart"
                          className="svg-inline--fa fa-heart fa-fw fa-sm "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M64 288L39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96l24.2-24.2c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 256 480 64 288z"
                          />
                        </svg>
                      </div>
                      <div>Like</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-sm md:hidden">
              <a href="/">
                <div className="h-auto duration-300 rounded-md overflow-hidden group w-8 md:w-12">
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={1024}
                      height={1024}
                      className="fill-zinc-900 dark:fill-zinc-300 "
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
              </a>
              <a
                className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                href="/"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div className="flex items-center leading-none justify-center gap-xs">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fass"
                    data-icon="plus"
                    className="svg-inline--fa fa-plus fa-fw fa-1x "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M240 80V48H176V80 224H32 0v64H32 176V432v32h64V432 288H384h32V224H384 240V80z"
                    />
                  </svg>
                  <span className="flex items-center relative ">New</span>
                </div>
              </a>
            </div>
            <div className="grow max-w-md text-center hidden md:block">
              <div className="cursor-pointer hover:opacity-70 transition duration-300">
                <div className="px-sm py-sm  light font-sans text-sm font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                  <span className="line-clamp-1"></span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-sm">
              <div className="-mr-xs">
                <div>
                  <button
                    type="button"
                    className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                  >
                    <div className="flex items-center leading-none justify-center gap-xs">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fass"
                        data-icon="ellipsis"
                        className="svg-inline--fa fa-ellipsis fa-fw fa-1x "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 304l0-96 96 0 0 96L0 304zm160 0l0-96 96 0 0 96-96 0zm160-96l96 0 0 96-96 0 0-96z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="transition-all duration-300 opacity flex items-center gap-x-xs md:gap-x-0 opacity-100">
                <div className="hidden md:flex items-center gap-x-sm">
                  <button
                    type="button"
                    className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                  >
                    <div className="pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 top-[120%] -translate-y-1">
                      <div className="py-xs px-sm rounded-md  border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offsetPlusDark">
                        <div className="default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                          <span className="text-zinc-200">Copy Link</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center leading-none justify-center gap-xs">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fass"
                        data-icon="link"
                        className="svg-inline--fa fa-link fa-fw fa-1x "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M580.2 267.3c56.2-56.2 56.2-147.4 0-203.6S432.8 7.4 376.6 63.7L365.3 75l45.3 45.3 11.3-11.3c31.2-31.2 81.9-31.2 113.1 0s31.2 81.9 0 113.1L421.8 335.2c-31.2 31.2-81.9 31.2-113.1 0c-25.6-25.6-30.3-64.3-13.8-94.6c1.8-3.4 3.9-6.7 6.3-9.8l-51.2-38.4c-4.3 5.7-8.1 11.6-11.4 17.8c-29.5 54.6-21.3 124.2 24.9 170.3c56.2 56.2 147.4 56.2 203.6 0L580.2 267.3zM59.8 244.7c-56.2 56.2-56.2 147.4 0 203.6s147.4 56.2 203.6 0L274.7 437l-45.3-45.3-11.3 11.3c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1L218.2 176.8c31.2-31.2 81.9-31.2 113.1 0c25.6 25.6 30.3 64.3 13.8 94.6c-1.8 3.4-3.9 6.7-6.3 9.8l51.2 38.4c4.3-5.7 8.1-11.6 11.4-17.8c29.5-54.6 21.3-124.2-24.9-170.3c-56.2-56.2-147.4-56.2-203.6 0L59.8 244.7z"
                        />
                      </svg>
                    </div>
                  </button>
                  <div>
                    <button
                      type="button"
                      className="bg-super text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                    >
                      <div className="flex items-center leading-none justify-center gap-xs">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fass"
                          data-icon="share"
                          className="svg-inline--fa fa-share fa-fw fa-1x "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M512 208L320 384H288V288H208c-61.9 0-112 50.1-112 112c0 48 32 80 32 80s-128-48-128-176c0-97.2 78.8-176 176-176H288V32h32L512 208z"
                          />
                        </svg>
                        <span className="flex items-center relative ">
                          Share
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="block md:hidden">
                  <button
                    type="button"
                    className="bg-super text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                  >
                    <div className="flex items-center leading-none justify-center gap-xs">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fass"
                        data-icon="share"
                        className="svg-inline--fa fa-share fa-fw fa-1x "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M512 208L320 384H288V288H208c-61.9 0-112 50.1-112 112c0 48 32 80 32 80s-128-48-128-176c0-97.2 78.8-176 176-176H288V32h32L512 208z"
                        />
                      </svg>
                      <span className="flex items-center relative ">Share</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
