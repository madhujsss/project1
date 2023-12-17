import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row p-20'>
    <div className='h-100 w-100 items-center p-10 ' >
      <h1>About Us</h1>
      <h2 className='text-center'>Welcome To <span id="W_Name1">Dr.Food</span></h2>

      <p><span id="W_Name2">Dr.Food</span> is a Professional <span id="W_Type1"> ecommerce </span> 
      Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of
       <span id="W_Type2"> ecommerce </span>,
        with a focus on dependability and 
        <span id="W_Spec"> Food ordering </span>.
         We're working to turn our passion for <span id="W_Type3"> ecommerce </span> 
         into a booming ecommerce websites
           We hope you enjoy our 
           <span id="W_Type4"> ecommerce </span> 
           as much as we enjoy offering them to you.
           </p>

           <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
   <p className='text-center font-bold'>Thanks For Visiting Our Site<br></br>
   <span className='text-center font-bold text-lg text-green-500'>Have a nice day!</span></p>
    </div>
    <div style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1419&q=80" + ")",
    height: "500px",
    width: "850px",
   alignItems: "center",
    justifyContent: "center",
    }}>

    </div>
    </div>
  )
}

export default About
