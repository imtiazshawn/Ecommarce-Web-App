import { Close } from '@mui/icons-material';
import {React, useState} from 'react';

const Announce = () => {

    const [announceStyle, setAnnounceStyle] = useState('bg-[#3b82f6] font-bold text-white flex items-center justify-center');
    const handleClose = ()=>{
        setAnnounceStyle(announceStyle + " hidden")
    }

  return ( 
    <div className={announceStyle}>
        <h2>Hurry up it's 40% of now!</h2>
        <Close className='cursor-pointer' onClick={handleClose} />
    </div>
  )
}

export default Announce;