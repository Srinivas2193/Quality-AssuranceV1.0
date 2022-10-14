import React from "react";
import './TestDesign.css'
import ReqAnalysisImg from './../../../../assets/images/version3Images/Level-2/testDesign.png'


function TestDesign() {

  return (
    <>


      <div class="flex flex-row rounded flex-start gap-1 mt-10 mb-10 ml-4 " >

        <div class="rounded TDcardShadowReq overflow-hidden shadow-lg m-9">
          <img src={ReqAnalysisImg} alt="Requirement Analysis" className="reqAnalysisImg" />
        </div>

        <div className="TDcontectDiv drop-shadow-md pt-9" >
          <li className="TestDesigntextContent">Basically, test design is the act of creating and writing test suites for testing a product.  </li>

          <li className="TestDesigntextContent"><b>Test Design Techniques: </b> There are two techniques to write the test cases </li>

          <ul className="TestDesigntextContent">  Boundary Value Analysis </ul>

          <ul className="TestDesigntextContent"> Equivalent Class Partition  </ul>

          <ul className="TestDesigntextContent"><b>Test Case:</b> Test case contains below list of items</ul>
          <ul className="TestDesigntextContent"><b> 1. Positive:</b> Includes test cases related to valid input data. </ul>
          <ul className="TestDesigntextContent"><b>2. Negative: </b> Includes test cases related to invalid input or unexpected user behaviour </ul>
          <ul className="TestDesigntextContent"><b>3. Validational :</b> Verifying the rules for various fields in respective screens </ul>
          <ul className="TestDesigntextContent"><b> 4. User Interface :</b> Includes test cases related to Alignment, Font Size, Colors, Spelling etc</ul>

        </div>


      </div>
    </>
  )
}

export default TestDesign;