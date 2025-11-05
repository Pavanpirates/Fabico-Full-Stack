import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
return (
    <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                    <div >
                            <img src={assets.logo} className='mb-5 w-32' alt="" />
                            <p className='w-full md:w-2/3 text-gray-600'>
                                    We are dedicated to providing high-quality products and exceptional service. Our mission is to ensure a seamless and trustworthy experience for every customer.
                                    Thank you for choosing us as your preferred shopping destination. Shop, save, smile, repeat!
                            </p>

                    </div>

                    <div>
                            <p className='text-xl font-medium mb-5'>COMPANY  </p>
                            <ul className='flex flex-col gap-1 text-gray-600'>
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Delivery</li>
                                    <li> Privacy policy</li>

                            </ul>
                     </div>
                            <div>
                            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                            <ul className='flex flex-col gap-1 text-gray-600'>
                                    <li>+91 768887776</li>
                                    <li>Fabiko@support.com</li>

                            </ul>
                            </div>
                     </div>
                     <div>
                            <hr />
                            <p className='py-5 text-sm text-center'>Copyright 2025@ Fabiko.com - All Right Reserved.</p>
                     </div>
                        
        
    </div>
)
}

export default Footer
