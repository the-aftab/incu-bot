import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; 
import { db, auth } from "../../firebase-auth";


export default function NewThreadBox(props) {
  let safe_click = false;
  const [query, setQuery] = useState("");

  const saveThread = async ()=>{
    props.setShowNewThreadBox(false);
    try {
      const user = auth.currentUser
      const docRef = await addDoc(collection(db, "myThreads"), {
        uid: user.uid,
        query: query,
        solution: `Lampenflora, also known as lamp-flora or lamp flora, are
        autotrophic lifeforms present in natural or artificial caves
        associated with permanently installed lighting. They are a
        problem with respect to the conservation of cave features,
        artworks, and fauna, and their presence in caves can be
        referred to by the terms green sickness and la maladie verte.
        The term "lampenflora" was coined by botanist Klaus Dobat in
        the 1960s and comes from German, meaning "lamp flora". The
        following types of lampenflora have been described: -
        Cyanobacteria - Algae – Chlorophyceae, golden algae
        (Chrysophyceae), diatoms (Bacillariophyceae) - Non-vascular
        plants – Marchantiophyta (Marchantiophyta), moss (Bryophyta)
        The requirements for the development of lampenflora are
        sufficient (artificial) light and moisture. An increase in
        nutrient content (e.g., fertilizer usage on land above the
        cave) or heat can also contribute to their growth. Lampenflora
        communities in show caves are periodically treated with sodium
        hypochlorite (bleach) solution to control their growth, but
        this treatment does not eliminate them completely, and ongoing
        treatments occur approximately every six months.`
      });
      alert("Document written with ID: ", docRef.id);
    } catch (e) {
      alert(e.message);
    }

    if(localStorage.getItem("myThreads")){
      try {
        let myThreads = JSON.parse(localStorage.getItem("myThreads"))
        const new_thread = {query: query, solution: "this is solution.."}
        myThreads.push(new_thread)
        localStorage.setItem("myThreads", JSON.stringify(myThreads))
      } catch (
        error
      ) {
        alert(error.message) 
      }

    }else{
      localStorage.setItem("myThreads", `[{"query": "${query}", "solution": "hello guys i am solution."}]`)
    }
  }

  return (
    <>
      <div className="bg-black/80 fixed top-0 left-0 bottom-0 right-0 z-20 transition-all duration-5000 items-center animate-in fade-in duration-300" />

      <div
        onClick={() => {
          console.log("Clicked");
          if (safe_click) {
            console.log("Safe Click");
            safe_click = false;
          } else {
            props.setShowNewThreadBox(false);
            console.log("Unsafe Click");
          }
        }}
        className="flex justify-center fixed top-0 left-0 bottom-0 right-0 z-20 items-center"
      >
        <div className="animate-in fade-in zoom-in-95 duration-300">
          <div
            className="max-w-screen-md min-w-[790px] w-[50vw] p-lg rounded-xl shadow-md relative border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offset dark:bg-offsetDark"
            onClick={() => {
              // props.setSafeClick(true)
              safe_click = true;
              console.log(props.safeClick);
            }}
          >
            <div className="relative">
              <div className="grow">
                <div>
                  <div className="rounded-full rounded-md">
                    <div className="relative flex items-center">
                      <textarea
                        placeholder="Ask anything..."
                        className="outline-none focus:outline-none w-full font-sans duration-200 transition-all caret-super focus:ring-1 resize-none overflow-auto max-h-[50vh] bg-white focus:bg-white border text-textMain  border-borderMain focus:ring-borderMain place-holder-textOff dark:bg-offsetDark dark:focus:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark  dark:border-borderMainDark  dark:focus:ring-borderMainDark rounded-t-md rounded-b-md  text-base p-md pb-xl"
                        autoComplete="off"
                        style={{ height: "113.333px !important" }}
                        defaultValue={""}
                        value={query}
                        onChange={(e)=>{
                          setQuery(e.target.value)

                        }}
                      />
                      <div
                        className="absolute m-[1px] bottom-0 py-[6px] flex justify-between px-[6px] bg-white focus:bg-white dark:bg-offsetDark dark:focus:bg-offsetDark rounded-b-md "
                        style={{ width: "calc(100% - 2px)" }}
                      >
                        <div className="absolute bg-background flex items-center dark:bg-offsetDark rounded-full px-xs -ml-sm bottom-sm left-[6px] left-sm">
                          <div className="">
                            <div>
                              <button
                                type="button"
                                className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                              >
                                <div className="flex items-center leading-none justify-center gap-xs">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fass"
                                    data-icon="magnifying-glass"
                                    className="svg-inline--fa fa-magnifying-glass fa-fw fa-1x "
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M416 208c0 45.9-14.9 88.3-40 122.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                    />
                                  </svg>
                                  <span className="flex items-center relative">
                                    {props.safeClick}
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green absolute right-sm flex items-center gap-sm bg-background  dark:bg-offsetDark rounded-full px-sm bottom-sm right-sm">
                          <button
                            type="button"
                            className="   text-textOff md:hover:text-textMain  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                          >
                            <div className="pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1">
                              <div className="py-xs px-sm rounded-md  border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offsetPlusDark">
                                <div className="default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                                  <span className="text-zinc-200">
                                    5 left. Reloads every 4 hours.
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center leading-none justify-center gap-xs">
                              <div>
                                <div className="rounded-full  p-three border  transition duration-300 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                                  <div className="relative w-8 transition duration-200 ease-in-out">
                                    <div className="rounded-full h-4 w-4 transition-all duration-300 ease-in-out shadow-sm md:group-hover:scale-90 ml-0 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-offsetPlus dark:bg-offsetPlusDark" />
                                  </div>
                                </div>
                              </div>
                              <span className="flex items-center relative">
                                Copilot
                              </span>
                              <span className=""> · 5</span>
                            </div>
                          </button>
                          <Link
                            type="button"
                            className="bg-super text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                            onClick={saveThread}
                            to={`/search?query=${query}`}
                          >
                            <div className="flex items-center leading-none justify-center gap-xs">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fass"
                                data-icon="arrow-right"
                                className="svg-inline--fa fa-arrow-right fa-fw fa-1x "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M422.6 278.6L445.3 256l-22.6-22.6-144-144L256 66.7 210.8 112l22.6 22.6L322.8 224 32 224 0 224l0 64 32 0 290.7 0-89.4 89.4L210.8 400 256 445.3l22.6-22.6 144-144z"
                                />
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-lg ">
                <div className="mb-sm md:text-center flex items-center gap-x-xs md:justify-center">
                  <div className="inline default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fass"
                      data-icon="arrow-right-to-arc"
                      className="svg-inline--fa fa-arrow-right-to-arc "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M448 256c0-106-86-192-192-192V0C397.4 0 512 114.6 512 256s-114.6 256-256 256V448c106 0 192-86 192-192zM230.6 121.4l112 112L365.3 256l-22.6 22.6-112 112L208 413.3 162.7 368l22.6-22.6L242.7 288H32 0V224H32 242.7l-57.4-57.4L162.7 144 208 98.7l22.6 22.6z"
                      />
                    </svg>
                  </div>
                  <div className="inline  default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                    Try<span> Something </span>
                  </div>
                </div>
                <div className="flex gap-sm md:gap-xs md:justify-center md:items-center flex-wrap">
                  <Link to={`/search?query=${query}`}>
                    <div className="animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                      <div className="md:hidden">
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              history of Argentina
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <button
                          type="button"
                          className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              history of Argentina
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </Link>
                  <a href="/search?q=unique%20colorado%20flowers">
                    <div className="animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                      <div className="md:hidden">
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              unique colorado flowers
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <button
                          type="button"
                          className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              unique colorado flowers
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </a>
                  <a href="/search?q=checkout%20time%20w%20hotel%20cdmx">
                    <div className="animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                      <div className="md:hidden">
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              checkout time w hotel cdmx
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <button
                          type="button"
                          className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              checkout time w hotel cdmx
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </a>
                  <a href="/search?q=how%20to%20center%20a%20div">
                    <div className="animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                      <div className="md:hidden">
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              how to center a div
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <button
                          type="button"
                          className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              how to center a div
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </a>
                  <a href="/search?q=brown%20dog%20name%20ideas">
                    <div className="animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                      <div className="md:hidden">
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              brown dog name ideas
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <button
                          type="button"
                          className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              brown dog name ideas
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </a>
                  <a href="/search?q=healthy%20restaurants%20in%20sf">
                    <div className="animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                      <div className="md:hidden">
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              healthy restaurants in sf
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <button
                          type="button"
                          className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              healthy restaurants in sf
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </a>
                  <a href="/search?q=d%2Fdx%20x%5E2%20y%5E4%2C%20d%2Fdy%20x%5E2%20y%5E4">
                    <div className="animate-in fade-in ease-out duration-500 border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                      <div className="md:hidden">
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              d/dx x^2 y^4, d/dy x^2 y^4
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <button
                          type="button"
                          className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center rounded-md cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm font-medium h-6"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <span className="flex items-center relative">
                              d/dx x^2 y^4, d/dy x^2 y^4
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
