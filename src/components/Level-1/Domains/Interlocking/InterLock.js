import React from "react";
import './Interlock.css'

import blockChain from './../../../../assets/images/version3Images/Level-2/Mindmap/BlockChain.png'
import Banking from './../../../../assets/images/version3Images/Level-2/Mindmap/Banking.jpg'
import Fitness from './../../../../assets/images/version3Images/Level-2/Mindmap/Fintech.jpg'
import Construction from './../../../../assets/images/version3Images/Level-2/Mindmap/Construction.jpg'
import Iot from './../../../../assets/images/version3Images/Level-2/Mindmap/Iot.jpg'
import FinancialAnalysis from './../../../../assets/images/version3Images/Level-2/Mindmap/FinancialAnalysis.jpg'
import Ecommerse from './../../../../assets/images/version3Images/Level-2/Mindmap/Ecommerse.jpg'
import Analytics from './../../../../assets/images/version3Images/Level-2/Mindmap/Analytics.jpg'

import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react'


function InterlockingDiagram (){

    const images = [
        { img: blockChain, url: "/home/interlocking/blockchain", title: "Blockchain" },
        { img: Banking, url: "/home/interlocking/blockchain", title: "Banking" },
        { img: Fitness, url: "/home/interlocking/blockchain", title: "Fintech" },
        { img: Construction, url: "/home/interlocking/blockchain", title: "Construction" },
        { img: Iot, url: "/home/interlocking/blockchain", title: "IoT" },
        { img: FinancialAnalysis, url: "/home/interlocking/blockchain", title: "Financial and Analytical" },
        { img: Ecommerse, url: "/home/interlocking/blockchain", title: "e-Commerce" },
        { img: Analytics, url: "/home/interlocking/blockchain", title: "Analytics" },

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

    {mainContent && <div className="py-1 " style={{ backgroundColor: "#accbe8" }}>
      <div class="flex felx-row rounded flex-wrap gap-1 mt-10 mb-10 ml-4 md:justify-center lg:justify-center" >
        {images.map((val, i) => (
          <div class="max-w-sm  rounded hover:scale-110 ease-in duration-300 interLockingcardShadow overflow-hidden shadow-lg m-9">
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

export default InterlockingDiagram;