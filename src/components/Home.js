import React from "react";
import Cards from "./Cards";
import "./home.css";
import { useState } from "react";

import ReqAnalysis from './../assets/images/version3Images/landingPageImg/ReqaAnalysis4.png'
import mindmap from './../assets/images/version3Images/landingPageImg/mindmap.png'
import interLocking from './../assets/images/version3Images/landingPageImg/Interlocking2.png'
import flowChart from './../assets/images/version3Images/landingPageImg/flowChart1.png'
import ReqTraceability from './../assets/images/version3Images/landingPageImg/ReqTraceability.png'
import testDesign from './../assets/images/version3Images/landingPageImg/testDesign1.png'
import buildDeploy from './../assets/images/version3Images/landingPageImg/buildDeploy.png'
import functionalAutomation from './../assets/images/version3Images/landingPageImg/functionalAutomation2.png'
import perfomanceTesting from './../assets/images/version3Images/landingPageImg/perfomanceTesting2.png'
import securityTesting from './../assets/images/version3Images/landingPageImg/securityTesting1.png'
import testClosure from './../assets/images/version3Images/landingPageImg/testClosure.jpg'
import apiTesting from './../assets/images/version3Images/landingPageImg/apiTesting1.jpeg'


import { Link, useNavigate } from "react-router-dom";



//import bank from "./images/QA-Images/Banking.png"
export const Home = () => {
 
  const [gif, setGif]=useState(false)
  const [mainContent, setmainContent]=useState(true)
  const images = [
    { img: ReqAnalysis, url: "/home/requirementAnalysis", title: "Requirement Analysis" },
    { img: mindmap, url: "/home/mindmap", title: "Mind Maps" },
    { img: interLocking, url: "/home/interlocking", title: "Interlocking Diagrams" },
    { img: flowChart, url: "/home/flowchart", title: "Flowcharts" },
    { img: ReqTraceability, url: "/home/requestTracaebility", title: "Requirement Traceability Matrix" },
    { img: testDesign, url: "/home/testDesign", title: "Test Design" },
    { img: buildDeploy, url: "/home/buildDeployeeProcess", title: "Build and Deployment Process" },
    { img: apiTesting, url: "/home/apitesting", title: "API Testing" },
    { img: functionalAutomation, url: "/home/functionaltesting", title: "Functional Automation Testing" },
    { img: perfomanceTesting, url: "/home/perfomancetesting", title: "Perfomance Testing" },
    { img: securityTesting, url: "/home/securitytesting", title: "Security Testing" },
    //{ img: testClosure, url: "/testClosure", title: "Test Closure" },
   
  ]

  const navigate=useNavigate();

  const data=(e)=>{
    console.log(e)
    setGif(true)
    setmainContent(false)
   setTimeout(()=>{
    navigate(e)
   },1000)
    
  }

  return (
    <>
    {gif && <div>
<center ><img  className="pb-2" src="https://flevix.com/wp-content/uploads/2019/12/Quarter-Circle-Loading-Image-1.gif" alt="Loading" /></center>
    </div>}

    {mainContent && <div className="py-1 " style={{ backgroundColor: "#accbe8" }}>
         <div class="flex felx-row rounded flex-wrap gap-1 mt-10 mb-10 ml-4 md:justify-center lg:justify-center" >
        {images.map((val, i) => (
          <div class="max-w-sm  rounded hover:scale-110 ease-in duration-300 cardShadowBanking   overflow-hidden shadow-lg m-9">
            <Link to={val.url}>  <img src={val.img} alt={val.title} className="w-[450px] h-[280px]" /> </Link>
            <div class="px-6 py-4 bg-blue-500 " >
              <button type="button" onClick={()=>data(val.url)}><p class="font-bold text-xl text-slate-100 hover:text-slate-100 w-[264px] h-[49px] ">{val.title}</p></button>
            </div>
          </div>

        ))}
      </div>
    </div>}
    </>
  );
};
export default Home;
