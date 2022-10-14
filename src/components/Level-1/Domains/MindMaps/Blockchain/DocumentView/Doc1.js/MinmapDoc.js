import React from "react";
import { Document, Page } from 'react-pdf';

import Pdf from './../../../../../../../assets/files/mindmap-1.pdf';

function MindmapDoc(){

    const onResumeClick=()=> {
        alert()
        window.open(Pdf);
      }

    return(
        <>
        
       
					
<div >
 <object data={Pdf} type="application/pdf"  style={{height:"838px", width:"1920px"}} >
      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
  </object>

  </div>
				
        </>
    )
}

export default MindmapDoc;