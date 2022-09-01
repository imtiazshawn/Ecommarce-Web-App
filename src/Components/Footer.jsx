import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';



const Footer = () => {

    const socialIconStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
    const contactIconStyle = 'flex m-3'

  return (
    <div className='flex items-center justify-between p-2 mobile:flex-col mobile:items-start'>

                {/* STORE INFORMATION */}

        <div className='flex-1 flex flex-col flex-wrap p-2'>
            <h1 className='text-[25px]'>
                Ecommarce Store
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ab aliquid reprehenderit 
                perferendis ut amet officiis expedita velit quas facilis, provident nihil eligendi doloribus eum, 
                soluta culpa quibusdam harum.
            </p>
            <div className='flex items-center justify-center m-3 self-start'>
                <div className={socialIconStyle + ' bg-blue-700'}>
                    <FacebookIcon/>
                </div>
                <div className={socialIconStyle + ' bg-orange-500'}>
                    <InstagramIcon/>
                </div>
                <div className={socialIconStyle + ' bg-sky-400'}>
                    <TwitterIcon/>
                </div>
                <div className={socialIconStyle + ' bg-red-500'}>
                    <PinterestIcon/>
                </div>
            </div>
        </div>

                {/* CONTACT INFORMATION */}

        <div className='flex-1 flex flex-col p-2'>
            <div className={contactIconStyle}>
                <LocationOnOutlinedIcon/>
                <p className='pl-3'>State of Chittagong</p>
            </div>
            <div className={contactIconStyle}>
                <LocalPhoneOutlinedIcon/>
                <p className='pl-3'>+8801234567891</p>
            </div>
            <div className={contactIconStyle}>
                <EmailOutlinedIcon/>
                <p className='pl-3'>Example@Email.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;