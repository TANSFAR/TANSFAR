import React, { useState } from 'react'
import Modal from 'react-modal'
const PreOrderModal = () => {
   const [isOpen, setIsOpen] = useState(false)
   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)',
         
      },
   }
   return (
      <div className='w-[40%]'>
      <button 
         onClick={() => setIsOpen(true)}
         className="uppercase w-[100%] rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
      >
        Join
      </button>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}
            style={{
               content: {
                 width: '45%',         // Set width
                 height: '300px',       // Set height
                 top: '50%',            // Center vertically
                 left: '50%',  
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',         // Center horizontally
                 transform: 'translate(-50%, -50%)' // Center the modal
               },
               overlay: {
                 backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: dim background
               },}}
               >
                  <div className='text-black'>
                     <button onClick={() => setIsOpen(false)} className='absolute top-4 left-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                     </button>
                     <form action="https://formsubmit.co/08e7a587187d05f067a32b0aa0279f6a" method="POST" className="w-full">
                        <div className="-mx-4 flex flex-wrap">
                           <div className="w-full px-4 md:w-1/2">
                              <div className="mb-8">
                                 <label
                                    htmlFor="name"
                                    className="mb-3 block text-sm font-medium text-dark "
                                 >
                                    Your Name
                                 </label>
                                 <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                                 />
                              </div>
                           </div>
                           <div className="w-full px-4 md:w-1/2">
                              <div className="mb-8">
                                 <label
                                    htmlFor="email"
                                    className="mb-3 block text-sm font-medium text-dark "
                                 >
                                    Your Email
                                 </label>
                                 <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary "
                                 />
                              </div>
                           </div>
                           <div className="w-full px-4 ">
                              <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 ">
                                 Submit
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
         </Modal>
      </div>
   )
}
export default PreOrderModal