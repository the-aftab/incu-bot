import React from 'react'
import { Link } from 'react-router-dom'

export default function DiscoverItem(props) {
  return (

 <div className="h-full ">
 <div className="">
 <div className="py-md md:px-0 max-w-[100%] border-borderMain/60 dark:border-borderMainDark/60 divide-borderMain dark:divide-borderMainDark ring-borderMain dark:ring-borderMainDark  bg-transparent">
     <Link
     className="block group"
     to=""
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
             {/* {props.answer} */}
             Lampenflora, also known as lamp-flora or lamp flora, are
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
                  treatments occur approximately every six months.
             </div>
         </div>
         </div>
     </div>
     </Link>
     <div className="mt-sm">
     <div className="flex justify-between items-center">
         <div className="flex gap-x-md items-center">
         <div className="flex gap-x-xs  items-center">
             <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
             <svg
                 aria-hidden="true"
                 focusable="false"
                 data-prefix="fass"
                 data-icon="eye"
                 className="svg-inline--fa fa-eye "
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 576 512"
             >
                 <path
                 fill="currentColor"
                 d="M288 32C129.6 32 30 181.3 0 256c30 74.7 129.6 224 288 224s258-149.3 288-224C546 181.3 446.4 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm48 0c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-6.4 0-12.7 .6-18.8 1.8L288 256l-94.2-18.8c-1.2 6.1-1.8 12.4-1.8 18.8z"
                 />
             </svg>
             </div>
             <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
             {props.views}
             </div>
         </div>
         <div className="flex gap-x-xs  items-center">
             <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
             <svg
                 aria-hidden="true"
                 focusable="false"
                 data-prefix="fass"
                 data-icon="code-fork"
                 className="svg-inline--fa fa-code-fork "
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512"
             >
                 <path
                 fill="currentColor"
                 d="M104 56v48H56V56h48zM56 0H0V56v48 56H48v32c0 53 43 96 96 96h48v64H144v56 48 56h56 48 56V456 408 352H256V288h48c53 0 96-43 96-96V160h48V104 56 0H392 344 288V56v48 56h48v32c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V160h48V104 56 0H104 56zM392 56v48H344V56h48zM200 408h48v48H200V408z"
                 />
             </svg>
             </div>
             <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
             {props.fork}
             </div>
         </div>
         <div className="flex gap-x-xs  items-center">
             <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
             <svg
                 aria-hidden="true"
                 focusable="false"
                 data-prefix="fass"
                 data-icon="heart"
                 className="svg-inline--fa fa-heart "
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512"
             >
                 <path
                 fill="currentColor"
                 d="M64 288L39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96l24.2-24.2c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 256 480 64 288z"
                 />
             </svg>
             </div>
             <div className="light font-sans text-xs font-medium text-textOff dark:text-textOffDark selection:bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70">
             {props.like}
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
