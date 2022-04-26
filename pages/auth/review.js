import React from 'react'
import ButtonInfo from '../../components/Dashboard/UI/Button/ButtonInfo';
import BusinessInformation from '../../components/Register/BusinessInformation/BusinessInformation'
import ContactInformation from '../../components/Register/ContactInformation/ContactInformation'
import PersonalInfomation from '../../components/Register/PersonalInfomation/PersonalInfomation'


export default function reviewPage() {
 return (
   <div>
     <div className="bg-darkYellow">
       <div className="m-auto w-full max-w-4xl py-2 px-3 md:p-0">
         <div className="py-12">
           <h1 className="text-2xl font-bold text-[#151515]">Review</h1>
           <p className=" w-full max-w-md  py-2 text-sm text-[#151515]">
             Please review or input information to check if you have to mend it
             or correct anything.
           </p>
         </div>
       </div>
     </div>

     {/*===========  step on how to register ============= */}

     <section className="relative m-auto w-full max-w-4xl">
       <div className="absolute -top-5 w-full">
         <div className="bg-whiteColor mx-2  p-2 shadow-md md:mx-0">
           <section className="flex px-2 sm:px-7 ">
             <div className="flex w-full items-center gap-2 text-xs sm:px-2">
               <div>
                 <h4 className="text-whiteColor  flex h-6 w-6 items-center justify-center rounded-full bg-[#C8BBA6] font-semibold">
                   1
                 </h4>
               </div>
               <p className="text-[#C1C1C1] sm:mx-5">Register</p>
               <div className="hidden w-[100%] border-b border-dashed border-[#C1C1C1] sm:block" />
             </div>

             <div className="flex w-full items-center gap-2 text-xs sm:px-2">
               <div>
                 <h4 className="text-whiteColor  bg-greenColor flex h-6 w-6 items-center justify-center   rounded-full font-semibold">
                   2
                 </h4>
               </div>
               <p className="text-greenColor sm:mx-5">Review</p>
               <div className="hidden w-[100%] border-b border-dashed border-[#C1C1C1] sm:block" />
             </div>

             <div className="flex  items-center gap-2 text-xs">
               <h4 className="text-whiteColor flex h-6 w-6 items-center justify-center rounded-full bg-[#C8BBA6]   font-semibold">
                 3
               </h4>
               <p className="text-[#C1C1C1]">Submit</p>
             </div>
           </section>
         </div>
       </div>
     </section>
     <div className="h-full bg-[#FBF6EE] py-10">
       <div className="m-auto w-full max-w-4xl">
         <section className="w-full">
           <div className="bg-whiteColor m-2 p-5 shadow-md">
             <PersonalInfomation />
           </div>

           <div className="bg-whiteColor m-2 p-5 shadow-md">
             <BusinessInformation />
           </div>

           <div className="bg-whiteColor m-2 p-5 shadow-md">
             <ContactInformation />
           </div>
         </section>

         <div className="flex justify-between">
           <ButtonInfo className="bg-[#151515] ">Back</ButtonInfo>
           <ButtonInfo className="bg-[#FFAF22]">Back</ButtonInfo>
         </div>
       </div>
     </div>
   </div>
 );
}
 



