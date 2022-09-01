import React from 'react';

const Login = () => {

  return (
    <div className='flex justify-center'>
        <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%]'>
            <text className='text-2xl'>Login</text>
            <div className='flex mt-3'>
                <input 
                    className='border-[2px] rounded-lg w-[100%] p-2 outline-[#3b82f6] focus:border-[#3b82f6] ease-linear duration-200'
                    type="text"
                    placeholder="Username" 
                />
            </div>
            <div className='flex mt-3'>
                <input 
                    className='border-[2px] rounded-lg w-[100%] p-2 outline-[#3b82f6] focus:border-[#3b82f6] ease-linear duration-200'
                    type="text" 
                    placeholder='Password'
                />
            </div>
            <input type="button" value="Login" className='btn mt-7 hover:scale-[1.02]'/>
        </div>
    </div>
  )
}

export default Login;