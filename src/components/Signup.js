import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navigation from './Navigation';

function Signup() {

    let ageInputRef=useRef();
    let ageResultRef=useRef();
    let regEx = /^\d{1,3}$/;
                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
let validateAge=(ageStr)=>{
let result=regEx.test(ageStr)

if(ageInputRef.current.value >=0 
    && ageInputRef.current.value<=130){
        if(result){
        ageResultRef.current.innerHTML="Valid";
        ageResultRef.current.style.color="green";
        }else{
        ageResultRef.current.innerHTML="Baby Age";
        ageResultRef.current.style.backgroundcolor="red";
        }
    }else{
        ageResultRef.current.innerHTML="Invalid";
        ageResultRef.current.style.color="red";
    }

}
let firstNameInputRef=useRef();
let firstNameResultRef=useRef();
let firstNameRegex = /^[A-Z][a-z]{1,19}(?:\s[A-Z][a-z]{1,19})*$/;
let validateFirstName=(nameStr)=>{
let result=firstNameRegex.test(nameStr);

if(result){
firstNameResultRef.current.innerHTML="Valid";
firstNameResultRef.current.style.color="green";
}else{
firstNameResultRef.current.innerHTML="Invalid";
firstNameResultRef.current.style.color="red";
}
}

let loc=useLocation();
console.log(loc)
  return (
    <div className='App'>
        <Navigation></Navigation>
<h1>{loc&&loc.state&&loc.state.msg ? loc.state.msg:"No Message to Display here"}</h1>
        
        <form className='form'>
            <div>
                <label className='label'>FirstName</label>
                <input type='text' ref={firstNameInputRef}
                onChange={()=>{
                
                    validateFirstName(firstNameInputRef.current.value,firstNameResultRef);
                }}
                minLength="2" maxLength="20"></input>
                <span ref={firstNameResultRef}></span>
            </div>
            <div>
                <label className='label'>LastName</label>
                <input type='text'></input>
            </div>
            <div>
                <label className='label'>Age</label>
                <input type="number"  minlength="1" maxlength="3" ref={ageInputRef}
                onChange={()=>{
                    validateAge(ageInputRef.current.value,ageResultRef);
                }}></input>
                <span ref={ageResultRef}></span>
            </div>
            <div>
                <label className='label'>Address</label>
                <input type='text'></input>
            </div>
            <div>
                <label className='label'>Postal Code</label>
                <input type="number"></input>
                <br></br>
                <br></br>
                <Link to="/home">Desktop</Link>
            </div>
        </form>
    </div>
  )
}

export default Signup;
