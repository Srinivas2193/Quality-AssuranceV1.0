import React from "react";
import './BuildProcess.css'
import deployeeProcessImg from './../../../../assets/images/version3Images/Level-2/buildDeployment.png'

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'


function BuildDeployment() {

  return (
    <>


      <div class="flex flex-row rounded flex-start gap-1 mt-10 mb-10 ml-4 " >

        <div class="rounded BDcardShadowReq overflow-hidden shadow-lg m-9">
          <img src={deployeeProcessImg} alt="Requirement Analysis" className="BDImg" />
        </div>

        <div className="BDcontectDiv pt-9" >
            <h1 className="BDtextContent2"><b>Build Deployment Process:</b></h1>
          <li className="BDtextContent">
          QA team should be aware of the deployment process, they will understand the importance of completing their tasks within the planned time-frame. 
          </li>
          <ul className="BDtextContent"><b>Advantages:</b></ul>

          <li className="BDtextContent">Testers will get an idea if the issue is really a functionality bug or something caused during deployment.  
          </li>

          <li className="BDtextContent"> Many non-issues could be avoided if the testers really are aware of the list that got deployed. 
      </li>
      <h1 className="BDtextContent2"><b>Before Deployment :</b></h1>

          <li className="BDtextContent">The entire test design phase takes place before the code is actually moved to the environment.  
It’s the test execution that depends on the code availability in the QA environment while the 
Deployment team works on getting the code deployed in QA, the QA team should ensure to 
have completed below activities: 
</li>

<ul className="BDtextContent"> Ensure the test cases are reviewed and approved </ul>
<ul className="BDtextContent"> Ensure the test team is available and resource planning is completed </ul>
<ul className="BDtextContent"> Ensure the test data needs are identified After Deployment</ul>

<h1 className="BDtextContent2"><b>After Deployment :</b></h1>
<li className="BDtextContent">After deployment, QA team started with our Sanity test. But before we start our sanity 
test, we should ensure following has been taken care:
</li>

<ul className="BDtextContent"> The QA team should have received notification from the deployment team about 
successful deployment and ready for QA. 
</ul>

<ul className="BDtextContent"> The QA team should keep a track of the deployed build. 
</ul>

<ul className="BDtextContent">Make sure the QA team has the list of changes successfully deployed and also of 
items not deployed even if they were planned. It may happen that the deployment team 
couldn’t deploy due to missing details etc 
</ul>

<h1 className="BDtextContent2"><b>Build Versioning::</b></h1>

<ul className="BDtextContent">Build Versioning should be added on every build deployment on product to track the
how many builds are deployed in QA Instance. Build versioning is important as it will 
help QA team to Sign off on respective build. It there is fall back they can revert to 
previous build to continue testing. 
</ul>


        </div>


      </div>
    </>
  )
}

export default BuildDeployment;