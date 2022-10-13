import React from 'react'
import './help.css';
import Sidebar from '../../components/sidebar/Sidebar';


export default function Help() {
  return (
    <div>
      <Sidebar/>
      <div className='htext1'>Help</div>
      <div className='htext2'>Read More</div>
      <div className='htext3'>Privacy Policy</div>
      <div className='htext4'>Support</div>
      <div className='htext5'>Terms of Service</div>
      <div className='htext6'>FAQs</div>

      <div className='hrect1'></div>
      <div className='hrect2'></div>
      <div className='hrect3'></div>
      <div className='hrect4'></div>
      <div className='hrect5'></div>
      <div className='hrect6'></div>
    </div>
  )
}
