import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'} />
         </div> 
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img  className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="Contact image" />
          <div className='flex flex-col justify-center items-start gap-6'>
             <p className='font-semibold text-xl text-gray-600'>Our Store </p>
             <p className='text-gray-500'>Paayilis Rd, Financial District,<br/>Gachibowli, Telangana 500032</p>
             <p className='text-gray-500'>Tel: (415) 555-0193 <br/> Email: fabiKo@support.com</p>
             <p className='font-semibold text-xl text-gray-600'>Carrers at FabiKo</p>
             <p className='text-gray-500'>Learn more about our teams, values<br/>and exciting career opportunities with us.</p>
            <button className="border border-black px-8 py-4 text-sm font-medium rounded-md shadow-sm hover:bg-black hover:text-white hover:shadow-md transition-all duration-300 ease-in-out">
  Explore Jobs
</button>

          </div>
        </div>

        <NewsletterBox />
      
    </div>
   
  )
}

export default Contact
