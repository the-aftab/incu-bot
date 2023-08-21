import React, { useEffect, useState } from 'react'
import QuickSearch from './QuickSearch'
import Answer from './Answer'
import { getQuickSearches, getRelatedTopics, getResults } from './data'
import Related from './Related'
import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export default function Results(props) {
  const location = useLocation();
  const [isData, setIsData] = useState(false)
  const [answer, setAnswer] = useState("")
  const [related, setRelated] = useState([])
  const navigate = useNavigate()
  const [quickSearch, setQuickSearch] = useState([])
  const [queryParams, setQueryParams] = useSearchParams();
  
  const query = queryParams.get('query')
  console.log("query", query)
  const getApiResponse = async () => {
    const url = "http://52.36.134.170/dummy/get_results/";
    try {
      const response = await fetch(url);
      if (response.status == 200){
        const resData = await response.json();
  
        const answer = resData.data.answer
        const related = resData.data.related
        const quickSearch = resData.data.quickSearches
        
        setAnswer(answer)
        setRelated(related)
        setQuickSearch(quickSearch)
        setIsData(true)
      } else{
        alert("error in Api ")
      }
      
    } catch (error) {
      alert(error.message)
    }
  }
  useEffect( ()=>{
    getApiResponse()
    return () => { 
      console.log("Api Hitted...")
    }
  }, [])
  return (

  <div className="">
    <div>
      <div />
      <div />
      <div className="pb-md mb-md border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
        <div className="border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
          <div className="">
            <div className="mb-md">
              <div className="break-words [word-break:break-word] whitespace-pre-line  default font-sans text-2xl font-semibold text-textMain dark:text-textMainDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                {query}
              </div>
            </div>
          </div>
          {
            isData ? <><QuickSearch data={quickSearch} /> <Answer data={answer} /> <Related data={related} /> </> : null
          }
        
     
        </div>
      </div>
    </div>
  </div>

  )
}


