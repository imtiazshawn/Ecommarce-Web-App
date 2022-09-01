import React from 'react';
import Announce from '../Components/Announce';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import Counter from '../Components/Counter';

const ProductPage = () => {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <div className='flex justify-center mobile:flex-col mobile:mt-3'>
                {/* IMAGE */}
            <div className='flex flex-1 items-center justify-center'>
                <img 
                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733"
                    alt='product_Image' 
                    className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"/>
            </div>

                {/* DETAILS OF PRODUCT */}
            <div className='flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:items-center'>
              <h1 className='title text-[40px] mobile:text-[30px]'>Creamy Hoody Original</h1>
              <p className='pr-[4rem] text-justify mt-4 mobile:pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus non ea officiis minima unde delectus architecto ad voluptates? Dolore quaerat doloremque magnam inventore porro debitis, aut voluptates omnis asperiores.</p>
              <p className='mt-7 text-3xl'>Price: <b>$70</b></p>
              
                {/* Color Varients */}
              <div className='flex text-2xl mt-7'>
                Colors
                <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#3b82f6]'></div>
                <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                <div className='bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#3b82f6]'></div>
              </div>
              <div className='mt-7 text-2xl'>
                  Size
                  <select className='ml-5 border-2'>
                    <option selected disabled>Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
                <div className='mt-5'>
                  <Counter/>
                </div>
                <div className='mt-5'>
                  <button className='btn'>Add to cart</button>
                </div>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductPage;