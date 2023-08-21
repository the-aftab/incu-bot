import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import courseData from "./Pages/tes.json"

export default function WeekData(props) {
  // function updateTopicStatus(topic_id){
  //   alert( props.course.schedule )
  //   let course = props.course.schedule.map((item)=>{
  //     console.log(item.topics)
  //     const schedule = item.topics.map((obj)=>{
  //       if ( obj.id === topic_id) {
  //         return {...obj, status: 'Completed'}
  //         }
  //       })

  //     if (schedule) {
  //       return schedule
  //     }
  //   })
  //   props.setCourse(course)
  // }
  
  return (          
    <div className="my-lg border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
    <div className="flex items-center justify-between border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
      <div className="flex items-center justify-between w-full mb-sm">
        <div className="">
          <div
            color="super"
            className="space-x-sm flex items-center "
          >
            <div className="super font-sans text-base font-medium text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fass"
                data-icon="align-left"
                className="svg-inline--fa fa-align-left fa-fw "
                role="img"
                xmlns="http://www.w3.org/000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M288 32V96H0V32H288zm0 256v64H0V288H288zM0 160H448v64H0V160zM448 416v64H0V416H448z"
                />
              </svg>
            </div>
            <div className="super font-sans text-base font-medium text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
              Week {props.week.week_id}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
      <div className="break-words min-w-0 [word-break:break-word]">
        <div dir="auto">
          <div id='answer' className="prose dark:prose-invert inline leading-normal break-words min-w-0 [word-break:break-word]">


          {
            props.week && props.week.days.map((item, index)=>{

            return <>

              <div className="super px-md font-sans text-base font-medium text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                Day {item.day_id}
               </div>
               {
                  item.topics && item.topics.map((item, index)=>{
                    return <div className="py-sm cursor-pointer flex justify-between group items-center">
                            <div className="px-md md:group-hover:text-super transition-all duration-300 default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                              <Link className="text-white flex-1 w-64   md:group-hover:text-super" to={`${item.id}`}>
                                  <li className=''>  {item.topic} </li> 
                              </Link>
                            </div>
                            <div className=" transition-all duration-300 default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                                 {
                                  item.status === "Completed" ?<><input value={item.id} checked={true}  type="checkbox" name="topic" id="" /> <span>{item.status}</span></>: <><input value={item.id}  type="checkbox" name="topic" id="" /> <span>{item.status}</span></> 
                                 } 
                            </div>
                            <div className="flex-none transition-all duration-300 ml-sm super font-sans text-base text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                              
                            </div>
                    </div>
      
                  })

               }
           
            </>
              
            })
          }

          </div>
        </div>
      </div>
    </div>
 
  </div>
  )
}
