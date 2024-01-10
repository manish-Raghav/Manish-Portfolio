import React from 'react'
//import {HiBadgeCheck} from 'react-icons/hi'
//import './edu.css'

const Educ = () => {
  return (
   <section className='w-screen relative bottom-5'>
     <div className='flex justify-center  relative  bottom-12'>
     <h2 className='text-xl font-[500] text-[#4db5ff] '>My Education</h2>  
     </div>

     <div className='flex justify-center '>
     <div className='w-72  h-40  bg-indigo-900 rounded-xl cursor-default hover:bg-[#1f1f38] hover:border-2 hover:border-[indigo-900] '>
       <div className='p-3 flex flex-col items-center justify-center'>
         <h4 >MCA</h4>
         <p className='text-slate-300 '>Computer Application </p>
          {/* <h5>2022</h5> */}
       </div>
       <div className='flex justify-between'>
        <p className='text-slate-400 px-2' >2022--2023</p>
         <p  className='text-slate-400 pr-2' >7.5 CGPA</p>
       </div>
       <div className='flex justify-center'>
        <p className='text-slate-400'>Candigarh University </p>
       </div>
       <div>
       
       </div>
    </div>
     <div className='my-10 flex'>
     {/* <div id='experience'>
     <div className='container experience_container'>
      <div className='experienc_frontend'>
       <h3>MCA</h3>
        <div className='experience_content'>
        </div>
      </div>
     </div>
    </div> */}


      {/* <h1 className='mb-'>{'<'}</h1> */}
     <hr className="w-16 h-2 bg-white " />
     </div>

      <div>
         <hr className="w-2 h-96 bg-blue-900 " />
      </div>
    
    <div className='my-40'>
     <hr className="w-16 h-2 bg-white  mt-10" />
    </div>


    <div className='w-64 my-36 bg-indigo-900 rounded-xl h-40 cursor-default hover:bg-[#1f1f38] '>
    <div className='p-3 flex flex-col items-center justify-center'>
         <h4 >BCA</h4>
         <p className='text-slate-400 '>Computer Application </p>
          {/* <h5>2022</h5> */}
       </div>
       <div className='flex justify-between'>
        <p className='text-slate-400 px-2' >2017--2020</p>
         <p  className='text-slate-400 pr-2' >6.3 CGPA</p>
       </div>
       <div className='flex justify-center'>
        <p className='text-slate-400'>Sanskriti University (Mathura) </p>
       </div>
       <div>
       
       </div>
    </div>
     </div>
    
     
   </section>
  )
}

export default Educ
