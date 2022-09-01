import React from 'react';
import { Search } from '@mui/icons-material';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const style = 'text-[14px] cursor-pointer ml-[25px] hover:text-[#3b82f6] hover:scale-[1.1] mobile:ml-[10px]'

  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
        <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] 
                        flex justify-between items-center mobile:pl-0 mobile:pr-0">


                {/* Left div */}
            <div className='left flex flex-1 items-center'>
                <div className="language cursor-pointer text-[16px] mobile:hidden">
                    EN
                </div>
                <div className="searchInput flex border-[2px] 
                                border-solid border-lightgrey rounded-md 
                                items-center ml-[10px] p-[5px] focus-within:border-[#3b82f6]
                                transition-all">
                    <input 
                        className='input outline-none mobile:w-[50px]' 
                        type="text" />
                        <Search className='' style={{fontSize: '16px'}} />
                </div>
            </div>



                {/* Center div | Logo */}
            <div className='center flex-1 text-center mobile:ml-6'>
                <div className='logo font-bold text-lg mobile:text-sm'>Summer Kings</div>
            </div>




                {/* Right div */}
            <div className='right flex flex-1 items-center justify-end mobile:flex-[1.5] mobile:justify-center'>
                <div className={style}>
                    <Link to="/">Home</Link>
                </div>
                <div className={style}>
                    <Link to="/products">Products</Link>
                </div>
                <div className={style}>
                    <Badge badgeContent={2} color='primary'>
                        <Link to="/Cart">
                        <ShoppingCartOutlinedIcon/>
                        </Link>
                    </Badge>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;