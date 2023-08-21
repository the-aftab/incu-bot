import React, { useEffect, useState } from 'react'
import DiscoverItem from './DiscoverItem'
import { Link, useParams } from 'react-router-dom';
import AskBar from './Pages/Result/AskBar';
import Results from './Pages/Result/Result';
import QuickSearch from './Pages/Result/QuickSearch';
import WeekData from './WeekData';
import courseDatajson from "./Pages/tes.json"

function DisplayPlan() {
    const [courseData, setCourseData] = useState(courseDatajson)
    const [count, setCount] = useState(1)
    const [course, setCourse] = useState()
    const {plan_id} = useParams()
    useEffect(() => {
      let result = courseData["courses"].find(obj => {
        return obj.id == plan_id
      })
      if (result) {
        setCourse(result)
        console.log(result.schedule)
      }
      return () => {
      }
    }, [])
    
    
 
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
                                    {course && course.name}
                                </div>
                                </div>
                            </div>
                           {
                            course && course.weeks.map((item, index)=>{
                              return <WeekData count={count} course={course} setCourse={setCourse} setCount={setCount} week={item} />
                            })
                           }                        
                        
                            </div>
                        </div>
                        </div>
                    </div>

                          {/* <AskBar/> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default DisplayPlan