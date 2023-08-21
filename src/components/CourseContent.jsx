import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseContent() {
  return (
    <div className="md:pb-md md:pr-md md:pt-sm grow">
    <div className="md:rounded-xl shadow-sm md:dark:border h-full border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
      <div className="md:flex justify-center h-full ">
        <div className="w-full mx-auto h-full">
          <div id='SearchResults' className="flex flex-col pt-lg pb-[124px] px-md md:px-lg">
            <div className="items-center w-full h-full md:mx-auto max-w-screen-md border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">                
                <div className="">
                    <div>
                    <div />
                    <div />
                    <div className="pb-md mb-md border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                        <div className="border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                        <div className="">
                            <div className="mb-md">
                            <div className="break-words [word-break:break-word] whitespace-pre-line  default font-sans text-2xl font-semibold text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                            Introduction to Python
                            </div>
                            </div>
                        </div>
                        

                        <div className="border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
            <div className="flex items-center justify-between border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
              <div className="flex items-center justify-between w-full mb-sm">
                <div className="">
                
                </div>
              </div>
            </div>
            <div className="relative default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              <div className="break-words min-w-0 [word-break:break-word]">
                <div dir="auto">
                  <div id='answer' className="prose dark:prose-invert inline leading-normal break-words min-w-0 [word-break:break-word]">
                  JavaScript is a versatile and widely-used programming language that primarily operates on web pages to enhance interactivity and dynamic content. It was initially created by Brendan Eich at Netscape Communications and has since become an integral part of web development. JavaScript allows developers to create responsive and engaging user interfaces, handle data, and communicate with web servers.

Here are some key points to introduce you to JavaScript:

Purpose and Use:
JavaScript was originally designed to add interactivity to web pages. It enables developers to manipulate HTML and CSS, respond to user interactions, and dynamically update content without requiring a full page reload. Over time, JavaScript's capabilities have expanded, and it is now used not only in web browsers but also on server-side platforms (Node.js) and even in mobile app development frameworks.

Basic Syntax:
JavaScript follows a C-style syntax, with statements terminated by semicolons. Variables are declared using the var, let, or const keywords. It is loosely typed, meaning you don't need to specify the data type explicitly when declaring variables.

Variables and Data Types:
JavaScript supports various data types such as numbers, strings, booleans, arrays, objects, and more. Variables can change their type during runtime, allowing for flexibility in programming.

Functions:
Functions in JavaScript are blocks of code that can be defined and reused. They can take parameters and return values. Functions are fundamental for organizing code and promoting reusability.

Control Structures:
JavaScript provides control structures like if, else, while, for, and switch to control the flow of execution based on conditions and loops.

DOM Manipulation:
The Document Object Model (DOM) represents the structure of an HTML document in a tree-like structure. JavaScript allows you to manipulate the DOM, changing content, adding elements, and responding to events like clicks and form submissions.

Events:
JavaScript can capture and respond to events triggered by user interactions (clicks, keypresses, etc.) or other sources (timers, server responses). Event handling is crucial for creating interactive web applications.

Asynchronous Programming:
JavaScript supports asynchronous operations using callbacks, promises, and async/await syntax. This enables non-blocking execution, allowing tasks like fetching data from servers to be performed without freezing the user interface.

Libraries and Frameworks:
There are numerous libraries and frameworks built on top of JavaScript that streamline and simplify web development. Some popular examples include React, Angular, and Vue.js for building user interfaces, and Express.js for server-side development.

Browser Compatibility:
JavaScript is supported by all major web browsers, but there might be slight differences in implementation. To ensure cross-browser compatibility, developers often use feature detection and polyfills.

JavaScript's flexibility and ubiquity make it an essential language for web development. Whether you're creating simple interactive elements or complex web applications, JavaScript's capabilities empower you to build rich and dynamic user experiences.
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
  )
}
