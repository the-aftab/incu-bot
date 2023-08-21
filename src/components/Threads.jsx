import React, { useEffect, useState } from 'react'
import ThreadItem from './ThreadItem'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase-auth';

export default function Threads() {
  const [myThreads, setMyThreads] = useState([])

  async function getThreadsData(){
    const querySnapshot = await getDocs(collection(db, "myThreads"))
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setMyThreads((prevThread)=>[...prevThread, doc.data()])
    });
  }
  useEffect(() => {
    getThreadsData()
    // if(localStorage.getItem("myThreads")){

    //   try {
    //     let myThreads = JSON.parse(localStorage.getItem("myThreads"))
    //     setMyThreads(myThreads)
    //   } catch (
    //     error
    //   ) {
    //     alert(error.message) 
    //   }

    // }
    return () => {
    }
  }, [])
  
  return (
    <div className="lg:pb-md lg:pr-md lg:pt-sm grow">
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
                  Perplexity
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
                  d="M256 80V48H192V80 224H48 16v64H48 192V432v32h64V432 288H400h32V224H400 256V80z"
                />
              </svg>
              <span className="flex items-center relative">New</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="md:flex justify-center h-full ">
      <div className="w-full mx-auto h-full max-w-screen-md md:px-lg  px-md py-lg">
        <div />
        <div>
          <div className="sticky top-[48px] md:top-0 -mt-lg pt-lg z-20 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
            <div className="flex justify-between items-center  border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
              <div className="">
                <div className="flex items-center gap-x-sm ">
                  <h1 className="flex items-center default font-sans text-2xl font-semibold text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fass"
                      data-icon="layer-group"
                      className="svg-inline--fa fa-layer-group fa-fw "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 128L288 256 576 128 288 0 0 128zm104.6 81.5L0 256 288 384 576 256 471.4 209.5 288 291 104.6 209.5zM288 419L104.6 337.5 0 384 288 512 576 384 471.4 337.5 288 419z"
                      />
                    </svg>
                  </h1>
                  <h1 className="default font-sans text-2xl font-semibold text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                    My Threads
                  </h1>
                </div>
              </div>
              <div className="flex gap-x-sm">
                <div className="h-full relative flex items-center">
                  <button
                    type="button"
                    className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
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
                          d="M256 80V48H192V80 224H48 16v64H48 192V432v32h64V432 288H400h32V224H400 256V80z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                    onClick={()=>{
                      if(window.confirm("Are you sure to delete all threads ?")){
                        alert("items deleted")
                      }
                    }}
                  >
                    <div className="flex items-center leading-none justify-center gap-xs">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fass"
                        data-icon="trash"
                        className="svg-inline--fa fa-trash fa-fw fa-1x "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-md">
              <div className="border-b pb-md border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                <div>
                  <div className="rounded-full">
                    <div className="relative flex items-center">
                      <input
                        type="search"
                        placeholder="Search your threads"
                        className="outline-none focus:outline-none w-full font-sans duration-200 transition-all caret-super focus:ring-1 resize-none overflow-auto max-h-[50vh] bg-white focus:bg-white border text-textMain  border-borderMain focus:ring-borderMain place-holder-textOff dark:bg-offsetDark dark:focus:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark  dark:border-borderMainDark  dark:focus:ring-borderMainDark rounded-t-[32px] rounded-b-[32px] py-sm text-sm px-md pl-[40px] pr-md"
                        autoComplete="off"
                        defaultValue=""
                      />
                      <div className="absolute bg-background flex items-center dark:bg-offsetDark rounded-full px-xs -ml-sm left-md">
                        <div className="light font-sans text-base text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fass"
                            data-icon="magnifying-glass"
                            className="svg-inline--fa fa-magnifying-glass "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M416 208c0 45.9-14.9 88.3-40 122.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-green absolute right-sm flex items-center gap-sm bg-background  dark:bg-offsetDark rounded-full px-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
          myThreads ? myThreads.map((item)=>{
              return <ThreadItem query={item.query}/>
            }) : <div className="p-xl mt-md flex items-center justify-center rounded-md border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offset dark:bg-offsetDark">
            <div className="light font-sans text-base text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              No threads yet
            </div>
          </div>
          }
          
          <div className="divide-y border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
