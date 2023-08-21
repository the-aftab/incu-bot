import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth } from '../firebase-auth'
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth'

export default function Navbar(props) {
  const navigate = useNavigate();


  function openSignupPopUp(){
        props.setshowPopUp(true)
    }
  function closeSignupPopUp(){
        props.setshowPopUp(false)
    }
 
  return (
    <div className="hidden md:block border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
    <div className="transition-all duration-300 ease-in-out group/bar w-sideBarWidth">
      <div className="h-full fixed z-20 transition-all duration-300 ease-in-out w-sideBarWidth border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
        <div className="pt-[12px] pb-sm sticky top-0 flex justify-between flex-col h-full">
          <div className="grow mt-xs">
            <div className="flex items-center justify-between mb-lg">
              <Link className="block" to="/">
                <div className="pr-sm pl-lg">
                  <div className="flex items-center space-x-sm">
                    <div className="super font-sans text-base text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <div className="h-auto duration-300 rounded-md overflow-hidden group w-6 md:w-6">
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
                      <div className="font-display font-semibold select-none text-[24px] md:text-[22px]">
                        Incu-Bot
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="my-md pt-two">
              <div onClick={()=>{
                props.setShowNewThreadBox(true)
              }}>
                <div className="border rounded-full pl-md pr-sm py-sm flex flex-none justify-between items-center mx-lg cursor-pointer group ring-2 ring-transparent hover:border-white hover:!ring-super transition duration-300 select-none border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark">
                  <div className="text-clip overflow-hidden line-clamp-1 light font-sans text-sm font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                    New Thread
                  </div>
                  <div className="flex items-center space-x-two light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                    <div className="rounded-md min-w-5 h-5 flex items-center px-xs justify-center border border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
                      Ctrl
                    </div>
                    <div className="font-mono rounded-md w-5 h-5 flex items-center justify-center border border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
                      I
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center relative space-y-sm">
              <div className="relative items-center gap-x-sm">
                <div className="px-sm md overflow-hidden transition duration-300 relative flex items-center">
                  <Link
                    className="md:hover:bg-offsetPlus text-textMain dark:text-textMainDark dark:md:hover:bg-offsetPlusDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-start rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    to="/"
                  >
                    <div className="flex items-center leading-none justify-start gap-xs">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fass"
                        data-icon="house-chimney"
                        className="svg-inline--fa fa-house-chimney fa-fw fa-1x"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M576 287.6H511.8l1 224.4H472 456 352V352H224V512H120 104 64.1V474.8c-.1-.9-.1-1.8-.1-2.8V360c0-.9 0-1.9 .1-2.8V287.6H0V240L288.4 0 416 106.5V32h96V186.6L576 240v47.6z"
                        />
                      </svg>
                      <span className="flex items-center relative">Home</span>
                    </div>
                  </Link>
                  <div className="absolute z-30 bg-textMain dark:bg-textMainDark" />
                </div>
              </div>
              <div className="relative items-center gap-x-sm">
                <div className="px-sm md overflow-hidden transition duration-300 relative flex items-center">
                <Link to="/discover">
                  <button
                    type="button"
                    className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-start rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                  >
                    <div className="flex items-center leading-none justify-start gap-xs">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fass"
                        data-icon="compass"
                        className="svg-inline--fa fa-compass fa-fw fa-1x"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 384l64-192 192-64L320 320 128 384zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        />
                      </svg>
                      <span className="flex items-center relative">
                        Discover
                      </span>
                    </div>
                  </button>
                  </Link>
                </div>
              </div>
              <div className="relative items-center gap-x-sm">
                <div className="px-sm md overflow-hidden transition duration-300 relative flex items-center">
                  <Link
                    type="button"
                    to="/threads"
                    className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-start rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                  >
                    <div className="flex items-center leading-none justify-start gap-xs">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fass"
                        data-icon="layer-group"
                        className="svg-inline--fa fa-layer-group fa-fw fa-1x"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 128L288 256 576 128 288 0 0 128zm104.6 81.5L0 256 288 384 576 256 471.4 209.5 288 291 104.6 209.5zM288 419L104.6 337.5 0 384 288 512 576 384 471.4 337.5 288 419z"
                        />
                      </svg>
                      <span className="flex items-center relative">
                        My Threads
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="relative items-center gap-x-sm">
                <div className="px-sm md overflow-hidden transition duration-300 relative flex items-center">
                  {
                    props.user ? <>
                     <Link
                    type="button"
                    to="/profile"
                    className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-start rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                    >
                    <div className="flex items-center leading-none justify-start gap-xs">
                    <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fass"
                              data-icon="circle-nodes"
                              className="svg-inline--fa fa-circle-nodes fa-fw fa-1x "
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"
                              />
                            </svg>                  
                      <span className="flex items-center relative">Ai Profile</span>
                    </div>
                  </Link>
                  </>
                  :
                  <>
                  <button
                    type="button"
                    className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-start rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                    onClick={openSignupPopUp}
                  >
                    <div className="flex items-center leading-none justify-start gap-xs">
                    <svg
                        aria-hidden="tru
                        e"
                        focusable="false"
                        data-prefix="fass"
                        data-icon="right-to-bracket"
                        className="svg-inline--fa fa-right-to-bracket fa-fw fa-1x"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M192 96L352 256 192 416l-32 0 0-96L0 320 0 192l160 0 0-96 32 0zM352 416l96 0 0-320-96 0-32 0 0-64 32 0 128 0 32 0 0 32 0 384 0 32-32 0-128 0-32 0 0-64 32 0z"
                        />
                      </svg>
                      <span className="flex items-center relative">Login</span>
                    </div>
                  </button>
                    
                    </>
                  }
                 
                </div>
              </div>
              <div className="relative items-center gap-x-sm">
                <div className="px-sm md overflow-hidden transition duration-300 relative flex items-center">
                  {
                    props.user && <>
                     <Link
                    type="button"
                    to="/plans"
                    className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-start rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                    
                  >
                    <div className="flex items-center leading-none justify-start gap-xs">
                    <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fass"
                              data-icon="circle-nodes"
                              className="svg-inline--fa fa-circle-nodes fa-fw fa-1x "
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"
                              />
                            </svg>                  
                      <span className="flex items-center relative">My Plans</span>
                    </div>
                  </Link>
                  </>
                  }
                 
                </div>
              </div>
            </div>
            <div className="ml-md mt-md mr-md hidden md:block">
             { props.user ?  null :<><button
                type="button"
                className="bg-super text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                onClick={openSignupPopUp}
              >
                <div className="flex items-center leading-none justify-center gap-xs">
                  <span className="flex items-center relative">Sign Up</span>
                </div>
              </button> </> }
            </div>
          </div>
          <div className="flex flex-col">
            <div className="px-md pb-sm border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
              <div>
                <div className="inline default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                  Try Pro
                </div>
              </div>
              <div className="light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                More Copilot uses and GPT-4 access.
              </div>
              <div className="mt-xs -ml-sm">
                <div>
                  <button
                    type="button"
                    className="md:hover:bg-offsetPlus text-super dark:md:hover:bg-offsetPlusDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                  >
                    <div className="flex items-center leading-none justify-center gap-xs">
                      <span className="flex items-center relative">
                        Learn More
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {props.user && <><Link to="/settings">
              <div className="px-sm py-sm border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                <div className="flex  items-center rounded-full gap-x-sm py-xs pl-sm pr-sm border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  transition duration-300 bg-transparent md:hover:bg-offsetPlus md:dark:hover:bg-offsetPlusDark">
                  <div className="relative">
                    <div className="aspect-square rounded-full overflow-hidden flex items-center justify-center  w-9 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offsetPlus dark:bg-offsetPlusDark">
                      <img
                        alt="User avatar"
                        className="w-full h-auto"
                        src={props.user.photoURL}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-x-xs relative">
                      <div className="line-clamp-1 break-all default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                        {props.user.email}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link></> 
}
            <div className="flex items-center gap-x-xs my-sm     pt-sm px-sm border-t border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark bg-transparent">
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
                      data-icon="mobile-screen"
                      className="svg-inline--fa fa-mobile-screen fa-fw fa-1x"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 0H352V512H0V0zM128 432v32h16 64 16V432H208 144 128zM288 64H64V384H288V64z"
                      />
                    </svg>
                    <span className="flex items-center relative">Download</span>
                  </div>
                </button>
              </div>
              <a
                className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                target="_blank"
                style={{ WebkitTapHighlightColor: "transparent" }}
                href="https://twitter.com/perplexity_ai"
              >
                <div className="flex items-center leading-none justify-center gap-xs">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    className="svg-inline--fa fa-twitter fa-fw fa-1x"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </div>
              </a>
              <a
                className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                target="_blank"
                style={{ WebkitTapHighlightColor: "transparent" }}
                href="https://discord.gg/perplexity-ai"
              >
                <div className="flex items-center leading-none justify-center gap-xs">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="discord"
                    className="svg-inline--fa fa-discord fa-fw fa-1x"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
