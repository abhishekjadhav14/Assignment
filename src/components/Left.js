import React from 'react'
import { FaPen } from 'react-icons/fa';
import { BsPlusCircleDotted } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { CiHeadphones,CiLogout } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import ungray from "../data/UnGray_Favicon_5.png"

export default function Left() {
  return (
    <div className='left parent'>
      <div>
        <img src={ungray} style={{display: 'block',marginLeft: 'auto', marginRight: 'auto'}} alt='s'></img>
        <div className='createproject'>
          <BsPlusCircleDotted className='BsPlusCircleDotted'/>
          <p className='p3'>Create New Project</p>
        </div>
        <div className='projectDiv'>
          <div >
            <p className='p1'>Project Name</p>
            <p className='p2'>2.4k Searches</p>
          </div>
            <div className='fapen'>
              <FaPen />
            </div>
        </div>
      </div>
      <div className='bottom'>
        <p><CiBookmark className='icon'/><span>Saved Influencers</span></p>
        <p><CiHeadphones className='icon'/><span>Support</span></p>
        <p><AiOutlineUser className='icon'/><span>Account</span></p>
        <p><CiLogout className='icon'/><span>Sign Out</span></p>
      </div>
    </div>
  )
}
