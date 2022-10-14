import React from "react";
import './JmeterApi.css'

import jmeterApi from './../../../../../assets/images/version3Images/Level-3/PerfomanceTesing/JmeterApi/apiJmeter.png'
import jmeterWeb from './../../../../../assets/images/version3Images/Level-3/PerfomanceTesing/JmeterApi/jmeterWeb.jpg'
import jmeterAndroid from './../../../../../assets/images/version3Images/Level-3/PerfomanceTesing/JmeterApi/jmeterAndroid.jpg'
import jmeterIos from './../../../../../assets/images/version3Images/Level-3/PerfomanceTesing/JmeterApi/jmeterIos.jpg'
import jmeterTaurus from './../../../../../assets/images/version3Images/Level-3/PerfomanceTesing/JmeterApi/taurus.png'
import Locust from './../../../../../assets/images/version3Images/Level-3/PerfomanceTesing/JmeterApi/locust.png'

import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react'


function JmeterApi (){

   
    const images = [
        { img: jmeterApi, url: "/home/perfomsncetetsing/blockchain/jmeterapi", title: "Jmeter Api" },
        { img: jmeterWeb, url: "/home/perfomsncetetsing/blockchain/jmeterWeb", title: "Jmeter Web" },
        { img: jmeterAndroid, url: "/home/perfomsncetetsing/blockchain/jmeterAndroid", title: "Jmeter Android" },
        { img: jmeterIos, url: "home/perfomsncetetsing/blockchain/jmeterIos", title: "Jmeter Ios" },
        { img: jmeterTaurus, url: "/home/perfomsncetetsing/blockchain/jmeterTaurus", title: "Jmeter Taurus" },
        { img: Locust, url: "home/perfomsncetetsing/blockchain/Locust", title: "Locust" },
        
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
          <div class="max-w-sm  rounded hover:scale-110 ease-in duration-300 perfomanceTestingcardShadow overflow-hidden shadow-lg m-9">
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

export default JmeterApi;