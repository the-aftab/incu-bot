import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Home from './components/Pages/Home';
import Starter from './components/Starter';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Result from './components/Pages/Result/Result';
import SearchResult from './components/Pages/SearchResult';
import VerifyEmail from './components/auth/VerifyEmail';
import { auth } from './firebase-auth';
import { useEffect, useState } from 'react';
import Setting from './components/Pages/Setting';
import Navbar from './components/Navbar';
import SignupPopUp from './components/auth/SignupPopUp';
import Discover from './components/Pages/Discover';
import NewThreadBox from './components/Pages/NewThreadBox';
import AiProfile from './components/Pages/AiProfile';
import Threads from './components/Threads';
import Focus from './components/Focus';
import Plans from './components/Plans';
import DisplayPlan from './components/DisplayPlan';
import CourseContent from './components/CourseContent';
// import { useEffect, useLayoutEffect, useState } from "react";


function App() {
  const [user, setUser] = useState(null)
  const [showPopUp, setshowPopUp] = useState(false)
  const [safeClick, setSafeClick] = useState(false)
  const [showNewThreadBox, setShowNewThreadBox] = useState(false)
  const setApearence = ()=>{
    const apearence = localStorage.getItem('apearence')
    if (apearence==="Light") {
      document.documentElement.classList.remove("dark")
    }
  }
  
  useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        console.log(user)
        setUser(user)
      })
  }, [])

  setApearence()

  return (
    <BrowserRouter>
      <div className="flex h-full min-h-[100vh]" >
        <Navbar  setshowPopUp={setshowPopUp} setShowNewThreadBox={setShowNewThreadBox} user={user} />
      <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='/search' element={<SearchResult user={user} />} />
          <Route path='/settings' element={<Setting user={user} />} />
          <Route path='/discover' element={<Discover user={user} />} />
          <Route path='/profile' element={<AiProfile user={user} />} />
          <Route path='/threads' element={<Threads user={user} />} />
          <Route path='/plans' element={<Plans user={user} />} />
          <Route path='/plans/:plan_id' element={<DisplayPlan user={user} />} />
          <Route path='/plans/:plan_id/:course' element={<CourseContent user={user} />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
      </Routes>
      </div>
    {showPopUp ?   <SignupPopUp setshowPopUp={setshowPopUp} /> : null}
    {showNewThreadBox ?   <NewThreadBox safeClick={safeClick} setSafeClick={setSafeClick} setShowNewThreadBox={setShowNewThreadBox} /> : null}

    </BrowserRouter>
    // <Home/>
   
  );
}

export default App;
