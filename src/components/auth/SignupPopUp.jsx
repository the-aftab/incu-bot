import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth , provider} from "../../firebase-auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function SignupPopUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function handleSignIn(){
    signInWithPopup(auth, provider).then((data)=>{
      props.setshowPopUp(false)
      alert("Sign in")
    }).catch((err)=>{
      alert(err.message)
    })
  }

  const registerUserWithEmail = async ()=>{
    if (!email && !password) {
      alert("please enter your credentials...")

      return;
    }
    console.log("Enter")

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      closeSignupPopUp()
      navigate("/")
      alert("user Signin Success")

    } catch(error) {
      if (error.code == "auth/email-already-in-use") {
        if (!email && !password) {
          alert("please enter your credentials...")
        }
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          closeSignupPopUp()
          navigate("/")

          alert("Signin Success")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        });
      }
      alert(error.code)
    }
    
  }
    function closeSignupPopUp(){
        props.setshowPopUp(false)
    }
  return (
    <>
      <div onClick={closeSignupPopUp}  className="bg-black/80 fixed top-0 left-0 bottom-0 right-0 z-20 transition-all duration-5000 items-center animate-in fade-in duration-300" />

      <div className="flex justify-center fixed top-0 left-0 bottom-0 right-0 z-20 items-center">
        <div className="">
          <div className="bg-white dark:bg-backgroundDark md:w-full  shadow-md  overflow-auto animate-in fade-in  md:rounded-xl md:min-w-[600px] max-w-screen-md shadow-md relative h-full max-h-[100vh] md:max-h-[95vh] overflow-auto zoom-in-95 duration-300">
            <div className="fixed z-20 md:absolute top-sm right-sm">
              <button
                type="button"
                className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                onClick={()=>{
                    props.setshowPopUp(false)
                }}
              >
                <div className="flex items-center leading-none justify-center gap-xs">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fass"
                    data-icon="xmark"
                    className="svg-inline--fa fa-xmark fa-fw fa-1x "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="flex flex-col h-full">
              <div className="py-md px-md md:px-xl grow md:pt-xl md:pb-xl">
                <div className="flex h-full items-center md:block">
                  <div className="grow">
                    <div className="text-center super font-display text-4xl md:text-6xl font-bold text-super selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Welcome
                    </div>
                    <h2 className="text-center mt-sm light font-sans text-lg font-semibold text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
                      Sign in or sign up to continue
                    </h2>
                    <div className="max-w-sm mx-auto mt-lg">
                      <div className=" space-y-sm">
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                          onClick={handleSignIn}
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fab"
                              data-icon="google"
                              className="svg-inline--fa fa-google fa-fw fa-1x "
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 488 512"
                            >
                              <path
                                fill="currentColor"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                              />
                            </svg>
                            <span className="flex items-center relative ">
                              Continue with Google
                            </span>
                          </div>
                        </button>
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                        >
                          <div className="flex items-center leading-none justify-center gap-xs">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fab"
                              data-icon="apple"
                              className="svg-inline--fa fa-apple fa-fw fa-1x "
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                            >
                              <path
                                fill="currentColor"
                                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                              />
                            </svg>
                            <span className="flex items-center relative ">
                              Continue with Apple
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="border-t mt-md pt-md space-y-sm border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
                        <div>
                          <div className="rounded-full">
                            <div className="relative flex items-center">
                              <input
                                type="email"
                                placeholder="henry@example.com"
                                onChange={(event)=>{
                                  setEmail(event.target.value)
                                }}
                                value={email}
                                className="outline-none focus:outline-none w-full font-sans duration-200 transition-all caret-super focus:ring-1 resize-none overflow-auto max-h-[50vh] bg-white focus:bg-white border text-textMain  border-borderMain focus:ring-borderMain place-holder-textOff dark:bg-offsetDark dark:focus:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark  dark:border-borderMainDark  dark:focus:ring-borderMainDark rounded-t-[32px] rounded-b-[32px] py-sm text-sm px-md pr-md"
                                autoComplete="off"
                                defaultValue=""
                              />
                              <div />
                              <div className="bg-green absolute right-sm flex items-center gap-sm bg-background  dark:bg-offsetDark rounded-full px-sm" />
                            </div>
                          </div>
                          <div className="rounded-full my-sm">
                            <div className="relative flex items-center">
                              <input
                                type="password"
                                placeholder="Password"
                                onChange={(event)=>{
                                  setPassword(event.target.value)
                                }}
                                value={password}
                                className="outline-none focus:outline-none w-full font-sans duration-200 transition-all caret-super focus:ring-1 resize-none overflow-auto max-h-[50vh] bg-white focus:bg-white border text-textMain  border-borderMain focus:ring-borderMain place-holder-textOff dark:bg-offsetDark dark:focus:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark  dark:border-borderMainDark  dark:focus:ring-borderMainDark rounded-t-[32px] rounded-b-[32px] py-sm text-sm px-md pr-md"
                                autoComplete="off"
                                defaultValue=""
                              />
                              <div />
                              <div className="bg-green absolute right-sm flex items-center gap-sm bg-background  dark:bg-offsetDark rounded-full px-sm" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <button
                            type="button"
                            className="md:hover:bg-offsetPlus text-textOff md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group justify-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
                            onClick={registerUserWithEmail}
                          >
                            <div className="flex items-center leading-none justify-center gap-xs">
                              <span className="flex items-center relative ">
                                Continue
                              </span>
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
    </>
  );
}
