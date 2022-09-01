import React from 'react';
import Announce from '../Components/Announce';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Counter from '../Components/Counter';

const Cart = () => {
  return (
    <div>
        <Announce/>
        <Navbar/>

        <div className='m-4'>
            <div className='flex justify-center text-5xl'>Cart</div>
            <div className='flex items-center justify-between mt-4 mobile:flex-col'>
                <button className='btnn hover:scale-[1.1] ease-in duration-100'>Continue Shopping</button>
            <div className='flex underline text-lg hvoer:cursor-pointer mobile:mt-3 mobile:mb-3'>
                <p>Items in your cart : 3</p>
                <p className='ml-5'>Whitlist : 0</p>
            </div>
                <button className='btn '>Check Out</button>
            </div>

            {/* Central Div */}

            <div className='flex mt-7 mobile:flex-col'>
                <div className='flex flex-col flex-1'>
                                {/* list of products */}
                                {/* FIRST PRODUCT */}

                    <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
                        <div className='product flex self-start pl-5'>
                            <img 
                            className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                            src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824" 
                            alt="Simple_Product_Image" />
                            <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                                <p>
                                    <b className='mr-2'>ID:</b>12345666
                                </p>
                                <p>
                                    <b className='mr-2'>Product:</b>Dazing Sky Shirt
                                </p>
                                <p className='flex  items-center justify-start'>
                                    <b className='mr-2'>Color:</b>
                                    <div className='bg-blue-500 w-[1rem] h-[1rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                                </p>
                                <p>
                                    <b className='mr-2'>Size:</b>Large
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                            <Counter/>
                            <p className='flex items-center justify-center text-4xl'>
                                <b>$75</b>
                            </p>
                        </div>
                    </div>
                    <hr className='mt-7 mb-7'/>



                            {/* SECOND PRODUCT */}


            <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
                <div className='product flex self-start pl-5'>
                        <img 
                            className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                            src="https://cdn.shopify.com/s/files/1/0240/7285/products/VisitorsCrewneckSweatshirtinWhite11_360x.jpg?v=1642719779" 
                            alt="Simple_Product_Image" />
                        <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                                <p>
                                    <b className='mr-2'>ID:</b>32345666
                                </p>
                                <p>
                                    <b className='mr-2'>Product:</b>Dazing White Shirt
                                </p>
                                <p className='flex  items-center justify-start'>
                                    <b className='mr-2'>Color:</b>
                                    <div className='bg-white w-[1rem] h-[1rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                                </p>
                                <p>
                                    <b className='mr-2'>Size:</b>Large
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                            <Counter/>
                            <p className='flex items-center justify-center text-4xl'>
                                <b>$70</b>
                            </p>
                        </div>
                    </div>
                <hr className='mt-7 mb-7'/>
                </div>
                <div className='flex flex-col items-center flex-[0.4] w-auto h-[40vh] border-2 border-[#3b82f6] rounded-md shadow-lg p-4'>
                    <h1 className='text-[2rem]'>Summery</h1>
                    <div className='flex justify-between mt-3 w-[100%]'>
                        <p>Subtotal</p>
                        <p>$145</p>
                    </div>
                    <div className='flex justify-between mt-3 w-[100%]'>
                        <p>Sheeping</p>
                        <p>$40</p>
                    </div>
                    <div className='flex justify-between mt-3 w-[100%]'>
                        <p>Shipping Discout</p>
                        <p>-$40</p>
                    </div>
                    <div className='flex justify-between mt-3 w-[100%] text-3xl font-bold'>
                        <p>Total</p>
                        <p>$145</p>
                    </div>
                </div>
            </div>
        </div>

        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Cart;