import React from "react";
import './Blockchain.css'

import Acunetix from './../../../../../assets/images/version3Images/Level-3/SecurityTesting/Blockchain/Acunetix1.png'
import Intruder from './../../../../../assets/images/version3Images/Level-3/SecurityTesting/Blockchain/intruder.jpg'
import OWASP from './../../../../../assets/images/version3Images/Level-3/SecurityTesting/Blockchain/owasp.jpg'
import Wireshark from './../../../../../assets/images/version3Images/Level-3/SecurityTesting/Blockchain/wireshark.jpg'


import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react'


function SecurityBlockchain (){

    const images = [
        { img: Acunetix, url: "/home/securitytesting/blockchain/acunetix", title: "Acunetix" },
        { img: Intruder, url: "/home/securitytesting/blockchain/intruder", title: "Intruder" },
        { img: OWASP, url: "/home/securitytesting/blockchain/OWASP", title: "OWASP" },
        { img: Wireshark, url: "home/securitytesting/blockchain/wireshark", title: "Wireshark" },
        
      ]

      const [gif, setGif]=useState(false)
      const [mainContent, setmainContent]=useState(true)
      const navigate=useNavigate();

  const data=(e)=>{
    console.log(e)
    setGif(true)
    setmainContent(false)
   setTimeout(()=>{
    navigate(e)
   },1000)
    
  }
    return(
        <>
         {gif && <div>
<center ><img  className="pb-2" src="https://flevix.com/wp-content/uploads/2019/12/Quarter-Circle-Loading-Image-1.gif" alt="Loading" /></center>
    </div>}

    {mainContent && <div className="py-1 " style={{height:"733px", backgroundColor: "#accbe8" }}>
      <div class="flex felx-row rounded flex-wrap gap-1 mt-10 mb-10 ml-4 md:justify-center lg:justify-center" >
        {images.map((val, i) => (
          <div class="max-w-sm  rounded hover:scale-110 ease-in duration-300 securityBCcardshadow overflow-hidden shadow-lg m-9">
            <Link to={val.url}>  <img src={val.img} alt={val.title} className="w-[450px] h-[280px]" /> </Link>
            <div class="px-6 py-4 bg-blue-500 hover:bg-orange-500" >
              <button type="button" onClick={()=>data(val.url)}><p class="font-bold text-xl text-slate-100 hover:text-neutral-900  w-[264px] h-[49px] ">{val.title}</p></button>
            </div>
          </div>

        ))}
      </div>
      </div>}
    </>
    )
}

export default SecurityBlockchain;