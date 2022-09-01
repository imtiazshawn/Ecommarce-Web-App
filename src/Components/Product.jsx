import {React, useState} from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom'

const Product = ({item}) => {

    const [hoverEffect, setHoverEffects] = useState(' opacity-0')

    const handleHoverEnter = ()=>{
        setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }
    const handleHoverExit = ()=>{
        setHoverEffects(' opacity-0')
    }

    const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#3b82f9] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer';

  return <Link className='flex items-center justify-center min-w-[250px] min-h-[350px]
  overflow-hidden shadow-lg rounded-md m-2 flex-1 relative'  to="/product"
                        onMouseEnter={handleHoverEnter}
                        onMouseLeave={handleHoverExit}>
        <img src={item.src} alt="product_image"/>
        <div className={`flex items-center justify-center w-[100%] h-[100%] 
                        absolute ease-in duration-100` + hoverEffect}>
            {/* ICONS */}
            <div className={iconStyle}>
              <ShoppingCartOutlinedIcon/>
            </div>
            <div className={iconStyle}>
                <FavoriteBorderOutlinedIcon/>
            </div>
            <div className={iconStyle}>
                <SearchOutlinedIcon/>
            </div>
        </div>
    </Link>
}

export default Product;