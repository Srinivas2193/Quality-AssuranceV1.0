import React, { useState } from "react";
import "./App.css";
// import {Routes, Route} from 'react-router-dom';
// Importing components....
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import icon from "./assets/images/logo.jpg"

// import Header from "./components/HeaderPage.js"
import About from "./components/About";
import Footer from "./components/FooterPage";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Login from "./components/login/Login.js";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ideyaLabsLogo from "./assets/logoes/ideyalabsLogo.png"
import ThankYou from "./components/ThankYou";

//Level 2 component import
import Level1ReqAnalysis from './components/Level-1/Domains/RequirementAnalysis/ReqAnalysis';
import ReqTraceability from './components/Level-1/Domains/RequirementTracability/ReqTraceability';
import Mindmap from './components/Level-1/Domains/MindMaps/MindMap'
import TestDesign from "./components/Level-1/Domains/TestDesign/TestDesign";
import BuildDeployment from "./components/Level-1/Domains/BuildProcess/BuildProcess";
import InterlockingDiagram from "./components/Level-1/Domains/Interlocking/InterLock";
import FlowChart from "./components/Level-1/Domains/FlowChart/FlowChart";
import ApiTesting from "./components/Level-1/Domains/ApiTesting/ApiTesting";
import FunctionalTesting from "./components/Level-1/Domains/FunctionalTesting/FunctionalTesting";
import PerfomanceTesting from "./components/Level-1/Domains/PerfomanceTesting/PerfomanceTesting";
import SecurityTesting from "./components/Level-1/Domains/SecurityTesting/SecurityTesting";

//Level 3 component import
import SecurityBlockchain from "./components/Level-1/Domains/SecurityTesting/Blockchain/Blockchian";
import JmeterApi from "./components/Level-1/Domains/PerfomanceTesting/JmeterApi/JmeterApi";
import FunctionalBlockchain from "./components/Level-1/Domains/FunctionalTesting/Blockchain/FunctionalBlockchain";
import Blockchain from "./components/Level-1/Domains/ApiTesting/Blockchain/Blockchain";
import MindmapBlockchain from "./components/Level-1/Domains/MindMaps/Blockchain/Blockchain";


//level 4 component import

import MindmapDoc1 from "./components/Level-1/Domains/MindMaps/Blockchain/DocumentView/Doc1.js/MinmapDoc";
import InterlockingBlockchain from "./components/Level-1/Domains/Interlocking/InterlockingBlockchain/InterlockingBlockchain";
import Interlocking_BC_Doc from "./components/Level-1/Domains/Interlocking/InterlockingBlockchain/Interloking_BC_Doc/Interlocking_BC_Doc";
import FlowChartBlockchain from "./components/Level-1/Domains/FlowChart/FlochartBlockchain/FlowchartBlockchain";
import Flowchart_BC_Doc from "./components/Level-1/Domains/FlowChart/FlochartBlockchain/Flowchart_BC_Doc/Flowchart_BC_Doc";




// import BlockChain from "./components/SubDomains/BlockChain/BlockChain";
// import Selenium from "./components/NestedSubdomains/Selenium/Selenium.js";
// import Cypress from "./components/NestedSubdomains/Cypress/Cypress";
// import Katalan from "./components/NestedSubdomains/Katalan/Katalan";
// import Python from "./components/NestedSubdomains/Python/Python";
// import Cucumber from "./components/NestedSubdomains/Cucumber/Cucumber";
// import Protractor from "./components/NestedSubdomains/Protractor/Protractor";
// import Appium from "./components/NestedSubdomains/Appium/Appium";
// import WebDriver from "./components/NestedSubdomains/WebDriver/WebDriver";
// import PlayWrite from "./components/NestedSubdomains/PlayWrite/PlayWrite";



function App() {
  const [userFound, setUserFound] = useState(false);

  const loginPageCall = (userUniqueID)=>{
    // setUserFound(value);
    
    let lsData = localStorage.getItem("userDataList");
    let parseData;
      if(lsData){
          parseData = JSON.parse(lsData);
      }else{
          parseData = [];
      }

      for(let i=0; i<parseData.length; i++){
        if(parseData[i].uniqueId === userUniqueID){
          // console.log("Login Status "+ parseData[i].loginStatus);
          setUserFound(parseData[i].loginStatus);
          // console.log(userFound);
        }
      }
  }
  return (
    <>
       <div className="mainContainer">
        {/* <div className="flex flex-row justify-between">
          <div className="logoContainer" style={{width:"16%"}}>
            <img src={ideyaLabsLogo} alt="logo" className="logo  h-20 p-2 "/>
          </div>
          <div className="iStock flex justify-center items-center font-extrabold" style={{height:"70px",width:"90%", paddingRight:"10%"}}>
            <h1 className="text-5xl text-gray-500" style={{fontStyle:"font-family: 'Lato', sans-serif;", marginRight:"105%"}}> <span style={{color:"#eb7524",marginRight:"3%"}}>Quality</span><span style={{color:"#285d93"}}>Assurance</span></h1>
          </div>
        </div> */}
        <div className="flex flex-row justify-between">
          <div>
          <h1 className="text-5xl text-gray-500 font-bold p-2" style={{fontStyle:"font-family: 'Lato', sans-serif;"}}> <span style={{color:"#eb7524",marginRight:"3%"}}>Quality</span><span style={{color:"#285d93"}}>Assurance</span></h1>
          </div>
          <div>
            <img src={ideyaLabsLogo} alt="logo" className="h-20 p-2 "/>
          </div>

        </div>
        <Navbar/>
        {/* {userFound && userFound?<Home/> :<Login loginPageCall={loginPageCall}/>} */}
         
         <div className="footergap">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login loginPageCall={loginPageCall}/>} />
            <Route  path="/home" element={<Home/>} />

            {/* level 2 component import */}

            <Route  path="/home/requirementAnalysis" element={<Level1ReqAnalysis/>} />

            <Route  path="/home/mindmap" element={<Mindmap />} />
            <Route  path="/home/interlocking" element={<InterlockingDiagram />} />
            <Route  path="/home/flowchart" element={<FlowChart />} />

            <Route  path="/home/requestTracaebility" element={<ReqTraceability/>} />
            <Route  path="/home/testDesign" element={<TestDesign/>} />
            <Route  path="/home/buildDeployeeProcess" element={<BuildDeployment/>} />

            <Route  path="/home/apitesting" element={<ApiTesting/>} />
            <Route  path="/home/functionaltesting" element={<FunctionalTesting/>} />
            <Route  path="/home/perfomancetesting" element={<PerfomanceTesting/>} />
            <Route  path="/home/securitytesting" element={<SecurityTesting/>} />


            {/* level 3 component import */}
            <Route  path="/home/securitytesting/blockchain" element={<SecurityBlockchain/>} />
            <Route  path="/home/perfomancetesting/blockchain" element={<JmeterApi/>} />
            <Route  path="/home/functionaltesting/blockchain" element={<FunctionalBlockchain/>} />
            <Route  path="/home/apitesting/blockchain" element={<Blockchain/>} />
            <Route  path="/home/mindmap/blockchain" element={<MindmapBlockchain/>} />
            <Route  path="/home/interlocking/blockchain" element={<InterlockingBlockchain/>} />
            <Route  path="/home/flowchart/blockchain" element={<FlowChartBlockchain/>} />


           {/* level 4 component import */} 
           <Route  path="/home/mindmap/blockchain/doc" element={<MindmapDoc1/>} />
           <Route  path="/home/interlocking/blockchain/doc" element={<Interlocking_BC_Doc/>} />
           <Route  path="/home/flowchart/blockchain/doc" element={<Flowchart_BC_Doc/>} />

           

            

           
           <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            {/* <Route path="login" element={<Login loginPageCall={loginPageCall}/>} /> */}
            <Route path="/contact" element={<Contact/>} />
            <Route path="/thankyou" element={<ThankYou/>} />

           
          </Routes>
          </div>

          <div >
          <Footer />
          </div>
    </div>
    </>
  );
}

export default App;
