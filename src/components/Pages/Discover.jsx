import React, { useEffect, useState } from 'react'
import DiscoverItem from '../DiscoverItem'

export default function Discover(props) {
    const [discoverItemsData, setDiscoverItemsData] = useState([])
    useEffect(() => {
        const url = "http://52.36.134.170/dummy/get_discoverList/";
        fetch(url).then((resp)=>{
            return resp.json();
           })
           .then((result)=>{
            console.log(result)
            setDiscoverItemsData(result)
           })
           .catch((err)=>{
            alert(err.message)
           })
      return () => {  }
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
      <div className="w-full mx-auto h-full max-w-screen-md md:px-lg  px-md py-lg">
        <div className="border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
          <div className="sticky top-[48px] md:top-0 -mt-lg pt-lg z-20 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
            <div className="flex justify-between items-center  border-b pb-md border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
              <div className="">
                <div className="flex items-center gap-x-sm ">
                  <h1 className="flex items-center default font-sans text-2xl font-semibold text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fass"
                      data-icon="compass"
                      className="svg-inline--fa fa-compass fa-fw "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 384l64-192 192-64L320 320 128 384zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                      />
                    </svg>
                  </h1>
                  <h1 className="default font-sans text-2xl font-semibold text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                    Discover
                  </h1>
                </div>
              </div>
              <div className="flex gap-x-sm" />
            </div>
          </div>
            <div className="divide-y border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                {
                    discoverItemsData ? discoverItemsData.map((item)=>{
                        const socialInfo = item.social_info
                        return <DiscoverItem query={item.query_str} answer={item.answer} like={socialInfo.like_count} fork={socialInfo.fork_count} views={socialInfo.view_count} />
                    }) : null
                }
                

            </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
