import React from 'react'
import Navbar from '../Navbar'
import Result from './Result/Result'
import SignupPopUp from '../auth/SignupPopUp'
import { useState } from 'react'
import Header from './Result/Header'
import AskBar from './Result/AskBar'

export default function SearchResult(props) {
    console.log(props.user)
  return (
    <>
            <div className="md:pb-md md:pr-md md:pt-sm grow">
              <div className="md:rounded-xl shadow-sm md:dark:border h-full border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">
                <div className="md:flex justify-center h-full ">
                  <div className="w-full mx-auto h-full">
                    <Header user={props.user}/>
                         
                    <div id='SearchResults' className="flex flex-col pt-lg pb-[124px] px-md md:px-lg">
                      <div className="items-center w-full h-full md:mx-auto max-w-screen-md border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-background dark:bg-backgroundDark">

                          <Result/>

                          <AskBar/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
    </>
  )
}
