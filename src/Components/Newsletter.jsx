import React from 'react';
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#b4afaf]'>
        <h1 className='text-[50px] font-bold'>
            NEWSLETTER
        </h1>
        <h2 className='text-[20px] mt-2 mobile:p-3 mobile:text-center'>
            Always in touch with us. For your favourite products
        </h2>
        <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] 
                        bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]'>
            <input 
                type="email" 
                placeholder='Email' 
                className='border-none pl-[20px] flex-[7] outline-none' />
            <button className='bg-[#3b82f6] flex-1 h-[100%]'>
                <SendIcon className='text-white'/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter;