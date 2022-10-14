import React from "react";
import './ReqAnalysis.css'
import ReqAnalysisImg from './../../../../assets/images/version3Images/Level-2/Req-Analysis.png'

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'


function ReqAnalysis() {

  return (
    <>


      <div class="flex flex-row rounded flex-start gap-1 mt-10 mb-10 ml-4 " >

        <div class="rounded ReAcardShadowReq overflow-hidden shadow-lg m-9">
          <img src={ReqAnalysisImg} alt="Requirement Analysis" className="reqAnalysisImg" />
        </div>

        <div className="ReAcontectDiv pt-9" >
          <li className="ReAtextContent">
            QA team needs Updated/Approved requirement documents and required information in user stories to test the given functionality
          </li>

          <li className="ReAtextContent">QA team will analyze the requirement and identify the impact analysis if there are any change request added
          </li>

          <li className="ReAtextContent"> We will maintain all the Queries related to product in Query tracker and once review is done by QA Manager <br></br>will update in respective project management tool
          </li>

          <li className="ReAtextContent">QA team will not only test as per requirement but also give Improvements, Idea’s how to improve the product
          </li>

        </div>


      </div>
    </>
  )
}

export default ReqAnalysis;