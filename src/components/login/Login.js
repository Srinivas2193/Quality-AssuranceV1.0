import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

export const Login = (props) => {
  const [userName,setUserName] = useState("");
  const [userPassword,setUserPassword] = useState("");

  let navigate= useNavigate();

// onSubmit localStorage Part
const onSubmit = (event) => {
  event.preventDefault();


  let lsData = localStorage.getItem("userDataList");
  let parseData;
    if(lsData){
        parseData = JSON.parse(lsData);
    }else{
        parseData = [];
    }
    if(parseData!== null && !parseData.length>0){
    }else{
      let i = 0;
      let userUniqueID = "";
        try{
          while(i <= parseData.length){
            // console.log(parseData[i].email);
              if(parseData[i].email === userName && parseData[i].password === userPassword){
                parseData[i].loginStatus = true;
                userUniqueID = parseData[i].uniqueId;
                localStorage.setItem("userDataList",JSON.stringify(parseData));
    
                // props.history.push('/home');
                  navigate('/home');
                  document.getElementById("navBar").style.display = "flex";
                  props.loginPageCall(userUniqueID);
                break;
              }else{
                document.getElementById("navBar").style.display = "none";
              }
            i += 1;
          }
        }catch(err){
          // console.log("error occured: ",err);
          document.getElementsByClassName("errMessage")[0].style.visibility ="visible";
          setTimeout(()=>{
              document.getElementsByClassName("errMessage")[0].style.visibility ="hidden";
          },2500);
        }
    }
};

  return (<>
  {/* <img className="logimIng" src="https://wallpapercave.com/wp/wp8749429.png" /> */}

    {/* <div className="login container ml-20 pt-10 shadow-2xl">
      
      
      <br />
      <div className="errMessage">
        <p>Incorrect credentials, Please check and try again!</p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col justify-center items-center">
      <h2 className="mb-5 text-3xl text-orange-500 font-bold">Login</h2>
      <br></br>
        <label className="block textColor" htmlFor="userName">Username :</label>
        <br />
        <input type="text" name="userName" id="userName" className="textSize border-2 border-blue-400 rounded-full bottom-2" onChange={(e)=>{setUserName(e.target.value)}} placeholder="enter your name"/>
        <div className="text-red-500">
        </div>
        <br />
        <label className="block passtextColor">Password :</label>
        <br />
        <input type="password" className="textSize border-2 rounded-full form-input outline-blue-400" placeholder="Enter Your Password" onChange={(e)=>setUserPassword(e.target.value)} /> <br/> <br/>
        <button type="submit" className="logIn text-2 font-bold text-white duration-300 bg-white text-slate-900 rounded-md hover:bg-orange-600">Login</button>
        <p className="forgotPass"><Link className="hover:text-orange-600 hover:underline" to="/"><b>Forgot Password</b></Link></p>

      </form>

      <br />
      <p style={{marginLeft:"9rem"}} className="text-1xl textColor2 ml-25">If You Don't Have An Account&nbsp; &nbsp;<Link className="text-white-500 hover:text-orange-600 hover:underline" to="/signup"><b>Signup</b></Link></p>
    </div> */}




    {/* <div className="flex flex-row">
<div className="flex justify-start">
<img className="logimIng" src="https://wallpapercave.com/wp/wp8749429.png" />
</div>     
      <form onSubmit={onSubmit} className="flex flex-col justify-center items-center login justify-end container pt-10 shadow-2xl">
      <h2 className="mb-9 loginHeading text-3xl text-orange-500 font-bold">Login</h2>
      <br></br>
        <label className="block textColor" htmlFor="userName">Username :</label>
        <br />
        <input type="text" name="userName" id="userName" className="textSize p-9 border-2 border-blue-400 rounded-full bottom-2" onChange={(e)=>{setUserName(e.target.value)}} placeholder="enter your name"/>
        <div className="text-red-500">
        </div>
        <br />
        <label className="block passtextColor">Password :</label>
        <br />
        <input type="password" className="textSize border-2 rounded-full form-input outline-blue-400" placeholder="Enter Your Password" onChange={(e)=>setUserPassword(e.target.value)} /> <br/> <br/>
        <button type="submit" className="logIn text-2 font-bold text-white duration-300 bg-white text-slate-900 rounded-md hover:bg-orange-600">Login</button>
        <p className="forgotPass"><Link className="hover:text-orange-600 hover:underline" to="/forgotpassword"><b>Forgot Password</b></Link></p>
        <span className="text-1xl textColor2 mt-6">If You Don't Have An Account&nbsp; &nbsp;<Link className="text-white-500 hover:text-orange-600 hover:underline" to="/signup"><b>Signup</b></Link></span>

      </form>

      
    </div> */}



<div className="flex flex-row pb-16 bg-gradient-to-r from-orange-300 to-blue-300">
      <form onSubmit={onSubmit} className="flex flex-col  bg-gradient-to-r from-blue-300 to-orange-300 login justify-end container pt-10 shadow-2xl">
      <h2 className="mb-9 loginHeading text-3xl text-black font-bold">Login</h2>
      <br></br>
        <label className="block textColor " htmlFor="userName">Username :</label>
        <br />
        <input type="text" name="userName" id="userName"  className="textSize border-2 rounded-full form-input outline-blue-400" onChange={(e)=>{setUserName(e.target.value)}} placeholder="enter your name"/>
        <div className="text-red-500">
        </div>
        <br />
        <label className="block passtextColor">Password :</label>
        <br />
        <input type="password" className="textSize border-2 rounded-full form-input outline-blue-400" placeholder="Enter Your Password" onChange={(e)=>setUserPassword(e.target.value)} /> <br/> <br/>
        <button type="submit" className="logIn text-2 font-bold text-white duration-300 bg-black text-white rounded-md hover:bg-orange-600">Login</button>
        <p className="forgotPass"><Link className="hover:text-orange-600 hover:underline" to="/forgotpassword"><b>Forgot Password</b></Link></p>
        <span className="text-1xl textColor2 mt-6">If You Don't Have An Account&nbsp; &nbsp;<Link className="text-white-500 hover:text-orange-600 hover:underline" to="/signup"><b>Signup</b></Link></span>

      </form>

      {/* <br /> */}
    </div>

    </>
  );
};
export default Login;
