import React from "react";
import './ReqTraceability.css'
import ReqTracabilityImg from './../../../../assets/images/version3Images/Level-2/ReqTracability.png'

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'


function ReqTraceability() {

  return (
    <>


      <div class="flex flex-row rounded flex-start gap-1 mt-10 mb-10 ml-4 " >

        <div class="rounded reqTcardShadowReq overflow-hidden shadow-lg m-9">
          <img src={ReqTracabilityImg} alt="Requirement Analysis" className="reqTAnalysisImg" />
        </div>

        <div className="ReqTcontectDiv pt-9" >

          <li className="ReqTtextContent">It maps the requirements to test cases </li>

          <li className="ReqTtextContent">It confirms 100% test coverage </li>

          <li className="ReqTtextContent"> It highlights any requirements missing or document inconsistencies </li>

          <li className="ReqTtextContent">It shows the overall defects or execution status with a focus on business requirements  </li>
          
          <li className="ReqTtextContent">It helps in analyzing or estimating the impact on the QA team's work with respect to revisiting or reworking on the test case  </li>

        </div>


      </div>
    </>
  )
}

export default ReqTraceability;