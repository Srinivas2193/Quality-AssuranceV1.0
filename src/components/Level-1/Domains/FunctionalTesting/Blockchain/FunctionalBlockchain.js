import React from "react";
import './FunctionalBlockchain.css'

import selenium from './../../../../../assets/images/version3Images/Level-3/FunctionalTesting/Blockchain/selenium.jpg'   
import Cypress from './../../../../../assets/images/version3Images/Level-3/FunctionalTesting/Blockchain/cypress.png'   
import Katalan from './../../../../../assets/images/version3Images/Level-3/FunctionalTesting/Blockchain/katalan.jpg'   
import Python from './../../../../../assets/images/version3Images/Level-3/FunctionalTesting/Blockchain/python.png'   
import cucumber from './../../../../../assets/images/version3Images/Level-3/FunctionalTesting/Blockchain/cucumber.png'   
import Protractor from './../../../../../assets/images/version3Images/Level-3/FunctionalTesting/Blockchain/protractor.jpg'   
 
//import selenium from './../../../../../assets/images/version3Images/Level-3/FunctionalTesting/Blockchain/Selenium.jpg'

import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react'


function FunctionalBlockchain (){

    const images = [
        { img: selenium, url: "/home/reqAnalysis/blockchain/selenium", title: "Selenium" },
        { img: Cypress, url: "/home/reqAnalysis/blockchain/cypress", title: "Cypress" },
        { img: Katalan, url: "/home/reqAnalysis/blockchain/katalan", title: "Katalon" },
        { img: Python, url: "/home/reqAnalysis/blockchain/python", title: "Python" },
        { img: cucumber, url: "/home/reqAnalysis/blockchain/cucumber", title: "Cucumber (BDD)" },
        { img: Protractor, url: "/home/reqAnalysis/blockchain/protractor", title: "Protractor" },
        
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
          <div class="max-w-sm  rounded hover:scale-110 ease-in duration-300  Functional_Blockchain_cardshadow  overflow-hidden shadow-lg m-9">
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

export default FunctionalBlockchain;