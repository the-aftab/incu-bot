import React, { Component, useEffect, useState } from "react";
import Navbar from "../Navbar";
import { auth } from "../../firebase-auth";
import { useNavigate, Navigate } from "react-router-dom";

function Setting(props) {
  const navigate = useNavigate();
  const [showApearences, setShowApearences] = useState(false);
  const [selectedApearence, setSelectedApearence] = useState(localStorage.getItem("apearence"));
  const [editUserId, setEditUserId] = useState(true);
  function setLightTheme(){
        document.documentElement.classList.remove('dark');
        setSelectedApearence("Light")
        localStorage.setItem("apearence","Light")
        toggleShowAppearences()
    }
    function setDarkTheme(){
        document.documentElement.classList.add('dark');
        localStorage.setItem("apearence","Dark")
        setSelectedApearence("Dark")
        toggleShowAppearences()
    }
    function setSystemTheme(){
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }else{
        document.documentElement.classList.remove('dark');
      }

      localStorage.setItem("apearence", "System")
      setSelectedApearence("System")
      toggleShowAppearences()
    }
    
    function toggleShowAppearences() {
      if (showApearences) {
        setShowApearences(false);
      } else {
        setShowApearences(true);
      }
    }

  if (!props.user) {
    return navigate("/");
  }
  return (
    <>
      <div
        className="lg:pb-md lg:pr-md lg:pt-sm grow"
        onClick={() => {
          if (showApearences) {
            setShowApearences(false);
          }
        }}
      >
        <div className="lg:rounded-xl shadow-sm md:dark:border h-full border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
          <div className="md:hidden pt-[48px] border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
            <div className="py-sm px-md fixed left-0 right-0 top-0 md:mb-0 z-10 w-full border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
              <div className="flex items-center justify-between gap-x-sm md:hidden">
                <a href="/">
                  <div className="flex  items-center space-x-sm">
                    <div className="super font-sans text-base text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <div className="h-auto duration-300 rounded-md overflow-hidden group w-6 md:w-6">
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
                    </div>
                    <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      <div className="font-display  font-semibold select-none text-[24px] md:text-[22px]">
                        Incu-Bot
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="bg-super text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
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
                    <span className="flex items-center relative">New</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="md:flex justify-center h-full ">
            <div className="w-full mx-auto h-full max-w-screen-sm md:px-lg  px-md py-lg">
              <div>
                <div className="sticky top-[48px] md:top-0 -mt-lg pt-lg z-20 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
                  <div className="flex justify-between items-center  border-b pb-md border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                    <div className="">
                      <div className="flex items-center gap-x-sm ">
                        <h1 className="flex items-center default font-sans text-2xl font-semibold text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fass"
                            data-icon="gear"
                            className="svg-inline--fa fa-gear fa-fw "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M194 0H306l17.2 78.4c15.8 6.5 30.6 15.1 44 25.4l76.5-24.4 56 97-59.4 54.1c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l59.4 54.1-56 97-76.5-24.4c-13.4 10.3-28.2 18.9-44 25.4L306 512H194l-17.2-78.4c-15.8-6.5-30.6-15.1-44-25.4L56.3 432.5l-56-97 59.4-54.1C58.6 273.1 58 264.6 58 256s.6-17.1 1.7-25.4L.3 176.5l56-97 76.5 24.4c13.4-10.3 28.2-18.9 44-25.4L194 0zm56 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                            />
                          </svg>
                        </h1>
                        <h1 className="default font-sans text-2xl font-semibold text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                          Settings
                        </h1>
                      </div>
                    </div>
                    <div className="flex gap-x-sm" />
                  </div>
                </div>
                <div className="divide-y border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                  <div className="flex justify-between py-md items-center">
                    <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Appearance
                    </div>
                    <div>
                      <button
                        type="button"
                        className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                        onClick={() => {
                          toggleShowAppearences();
                        }}
                      >
                        <div className="flex items-center leading-none justify-center gap-xs">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fass"
                            data-icon="moon"
                            className="svg-inline--fa fa-moon fa-fw fa-1x "
                            ro
                            le="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path
                              fill="currentColor"
                              d="M287.6 41.2c-82.8 21.2-144 96.5-144 186c0 106 85.8 192 191.5 192c16.8 0 33.1-2.2 48.6-6.2c-40.6 41.4-97.2 67-159.8 67C100.3 480 0 379.7 0 256S100.3 32 224 32c22.1 0 43.5 3.2 63.6 9.2z"
                            />
                          </svg>
                          <span className="flex items-center relative">
                            {selectedApearence}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between py-md items-center">
                    <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Avatar
                    </div>
                    <div className="flex flex-col gap-sm items-end">
                      <div className="relative">
                        <div className="aspect-square rounded-full overflow-hidden flex items-center justify-center  w-[80px] border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offsetPlus dark:bg-offsetPlusDark">
                          <img
                            alt="User avatar"
                            className="w-full h-auto"
                            src="https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/8ad03ebc-8f40-4345-9fb4-ef6f56fc4c00/thumbnail"
                          />
                          <div className="absolute bottom-0 right-0">
                            <button
                              type="button"
                              className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                            >
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
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex justify-between py-md items-center">
                    <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      User Id
                    </div>
                    <div className="flex items-center gap-x-xs relative">
                      {editUserId ? (
                        <>
                        <div>
                        <div>
                            <div className="rounded-full">
                            <div className="relative flex items-center">
                                <input
                                placeholder=""
                                className="outline-none focus:outline-none w-full font-sans duration-200 transition-all caret-super focus:ring-1 resize-none overflow-auto max-h-[50vh] bg-white focus:bg-white border text-textMain  border-borderMain focus:ring-borderMain place-holder-textOff dark:bg-offsetDark dark:focus:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark  dark:border-borderMainDark  dark:focus:ring-borderMainDark rounded-t-[32px] rounded-b-[32px] py-sm text-sm px-md pr-md md:min-w-[300px]"
                                autoComplete="off"
                                defaultValue="aftabahmad414428271"
                                />
                                <div />
                                <div className="bg-green absolute right-sm flex items-center gap-sm bg-background  dark:bg-offsetDark rounded-full px-sm" />
                            </div>
                            </div>
                            <div className="flex justify-end mt-sm">
                            <div className="flex items-center ml-sm gap-x-xs">
                                <button
                                type="button"
                                disabled=""
                                className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-default whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                                >
                                <div className="flex items-center leading-none justify-center gap-xs">
                                    <span className="flex items-center relative">Save</span>
                                </div>
                                </button>
                                <button
                                type="button"
                                className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                                >
                                <div className="flex items-center leading-none justify-center gap-xs">
                                    <span className="flex items-center relative">Cancel</span>
                                </div>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>

                        </>
                      ) : (
                        <>
                          <div className="line-clamp-1 break-all default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                            {props.user && props.user.uid}
                          </div>
                          <button
                            type="button"
                            className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                          >
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
                        </>
                      )}
                    </div>
                  </div> */}
                  <div className="flex justify-between py-md items-center">
                    <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Email
                    </div>
                    <div className="default font-sans text-sm text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      {props.user && props.user.email}
                    </div>
                  </div>
                  <div className="flex justify-between py-md items-center">
                    <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Account
                    </div>
                    <div className="-ml-sm flex space-x-sm">
                      <button
                        type="button"
                        className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                        onClick={() => {
                          auth.signOut();
                        }}
                      >
                        <div className="flex items-center leading-none justify-center gap-xs">
                          <span className="flex items-center relative">
                            Sign Out
                          </span>
                        </div>
                      </button>
                      <button
                        type="button"
                        className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                      >
                        <div className="flex items-center leading-none justify-center gap-xs">
                          <span className="flex items-center relative">
                            Delete Account
                          </span>
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

      {showApearences && (
        <div className="">
          <div className="absolute left-0 top-0 right-0 z-20">
            <div
              data-popper-reference-hidden="false"
              data-popper-escaped="false"
              data-popper-placement="bottom-end"
              style={{
                position: "absolute",
                inset: "0px 0px auto auto",
                transform: "translate3d(-233.333px, 133.333px, 0px)",
              }}
            >
              <div>
                <div className="animate-in fade-in zoom-in-95 duration-300 rounded-md shadow-sm p-xs min-w-[160px] border  max-w-[250px] border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
                  <div className="md:h-full">
                    <div className="md:h-full" onClick={setLightTheme}>
                      <div className="relative cursor-pointer md:hover:bg-offsetPlus p-sm rounded-md md:hover:dark:bg-offsetPlusDark transition-all duration-300 md:h-full">
                        <div className="flex items-center justify-between" >
                          <div className="flex items-center gap-x-xs default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fass"
                              data-icon="sun"
                              className="svg-inline--fa fa-sun fa-fw "
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M256 73.1L150 0 126.7 126.7 0 150 73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l23.3-126.7L512 362 438.9 256 512 150 385.3 126.7 362 0 256 73.1zM352 256a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-224 0a128 128 0 1 1 256 0 128 128 0 1 1 -256 0z"
                              />
                            </svg>
                            <span>Light</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-full">
                    <div className="md:h-full" onClick={setDarkTheme}>
                      <div className="relative cursor-pointer md:hover:bg-offsetPlus p-sm rounded-md md:hover:dark:bg-offsetPlusDark transition-all duration-300 md:h-full">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-x-xs default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fass"
                              data-icon="moon"
                              className="svg-inline--fa fa-moon fa-fw "
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                            >
                              <path
                                fill="currentColor"
                                d="M287.6 41.2c-82.8 21.2-144 96.5-144 186c0 106 85.8 192 191.5 192c16.8 0 33.1-2.2 48.6-6.2c-40.6 41.4-97.2 67-159.8 67C100.3 480 0 379.7 0 256S100.3 32 224 32c22.1 0 43.5 3.2 63.6 9.2z"
                              />
                            </svg>
                            <span>Dark</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-full">
                    <div className="md:h-full" onClick={setSystemTheme}>
                      <div className="relative cursor-pointer md:hover:bg-offsetPlus p-sm rounded-md md:hover:dark:bg-offsetPlusDark transition-all duration-300 md:h-full">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-x-xs default font-sans text-sm font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fass"
                              data-icon="computer-classic"
                              className="svg-inline--fa fa-computer-classic fa-fw "
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M0 0H448V416H0V0zM32 512V448H416v64H32zM384 64H64V256H384V64zM80 360a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm144-40v32h16H368h16V320H368 240 224z"
                              />
                            </svg>
                            <span>System</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Setting;
