import React from 'react'
import { Link } from 'react-router-dom'

function ThreadItem(props) {
  return (
    <div className="divide-y border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
  <div className="py-md md:px-0 max-w-[100%] border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
    <Link
      className="block group"
      to={`/search?query=${props.query}`}
    >
      <div className="flex items-center group border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
        <div>
          <div className="">
            <div className="default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              <div className="md:group-hover:text-super transition duration-300 line-clamp-1 break-all">
                {props.query}
              </div>
            </div>
            <div className="line-clamp-2 mt-two break-all light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              Hello is a common greeting in the English language. It is first
              attested in writing from 1826 and was extensively used in
              literature by the 1860s. The word "hello" became associated with
              telephones in the early 20th century. In addition to its use as a
              greeting, "Hello" is also the title of a song recorded by English
              singer-songwriter Adele. The song was released in 2015 and is a
              piano ballad with soul influences. "Hello" is also the title of a
              music video by Lionel Richie. Hello! is also the title of a song
              by Super Simple Songs, which is a fun and energetic song to talk
              about how you feel as you greet each other. Finally, Hello! is
              also the name of a brand of naturally friendly products, including
              vegan toothpaste.
            </div>
          </div>
        </div>
      </div>
    </Link>
    <div className="mt-xs">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-md items-center">
          <div className="flex gap-x-xs  items-center">
            <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fass"
                data-icon="layer-group"
                className="svg-inline--fa fa-layer-group "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M0 128L288 256 576 128 288 0 0 128zm104.6 81.5L0 256 288 384 576 256 471.4 209.5 288 291 104.6 209.5zM288 419L104.6 337.5 0 384 288 512 576 384 471.4 337.5 288 419z"
                />
              </svg>
            </div>
            <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              1
            </div>
          </div>
          <div className="flex gap-x-xs  items-center">
            <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fass"
                data-icon="clock"
                className="svg-inline--fa fa-clock "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256v12.8l10.7 7.1 96 64 20 13.3 26.6-39.9-20-13.3L280 243.2V120 96H232v24z"
                />
              </svg>
            </div>
            <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              1 day ago
            </div>
          </div>
        </div>
        <div className="-mr-xs">
          <div>
            <button
              type="button"
              className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
              onClick={()=>{
                alert("Are you sure to delete all? ")
              }}
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
                    d="M16 304l0-96 96 0 0 96-96 0zm160 0l0-96 96 0 0 96-96 0zm160-96l96 0 0 96-96 0 0-96z"
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

  )
}

export default ThreadItem