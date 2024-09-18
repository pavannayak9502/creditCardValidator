import React, { useState } from "react";
import validator from "validator";
import "../src/App.css";

let App=()=>{
  let[name, setName]=useState("");
  let[number, setNumber]=useState("");
  let[valid, setValid]=useState("");
  let[month, setMonth]=useState("");
  let[year, setYear]=useState("");
  let[cvv, setCvv]=useState("");

  let handleCheck=(e)=>{
      const Value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
      const formattedValue = Value.replace(/(.{4})/g, '$1 ').trim(); // Format with spaces
      setNumber(formattedValue);

      if(validator.isCreditCard(formattedValue)){
        setValid("Valid Card Number");
      }
      else{
        setValid("Invalid Card Number");
      }

  };

  let handleMonth=(e)=>{
    let Value = e.target.value.replace(/\D/g, '');  // Remove non-digit characters
    setMonth(Value);
  };

  let handleYear=(e)=>{
    let Value = e.target.value.replace(/\D/g, '');  // Remove non-digit characters
    setYear(Value);
  };

  let handleCvv=(e)=>{
    let Value = e.target.value.replace(/\D/g, '');  // Remove non-digit characters
    setCvv(Value);
  };


  let handleSubmit=(data)=>{
    data.preventDefault();
      alert(`Card Details: \nNAME : ${name}\nNUMBER : ${number} \nMONTH : ${month} \nYEAR : ${year} \nCVV : ${cvv}`);
  };

  let handleReset=()=>{
    setName("");
    setNumber("");
    setMonth("");
    setYear("");
    setCvv("");
  };

  return(
    <>
    <div className="forSpace" style={{marginTop: "45px", boxSizing: "border-box"}}></div>
    <div className="creditCard">
      <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -70 512 512" width="32px" height="30px" fill="red"><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> Fake Bank Of Bank</h2>
      <pre> {/* Preformatted Text*/}
        <div className="details">
        <label>Enter Name : 
        &nbsp;<input type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter User Name" id="userName" autoComplete="off" required/>
        </label>

        <label>Card Number : 
        &nbsp;<input type="text" value={number} onChange={handleCheck}  placeholder="1234 5678 9101 2345" size="19" maxLength="19" id="cardNumber" autoComplete="off" required/>
        <br></br>
        <span style={{color:"red", marginRight:"-60px"}}>{valid}</span>
        <br></br>
        </label>

        <label>Month :
        &nbsp; <input type="text" value={month} onChange={handleMonth} placeholder="01" size="2" maxLength="2" id="cardMonth" autoComplete="off" required />
        </label>

        <label>Year :
        &nbsp; <input type="text" value={year} onChange={handleYear} placeholder="1975" size="4" maxLength="4" id="cardYear" autoComplete="off" required />
        </label>

        <label>Cvv :
        &nbsp; <input type="text" value={cvv} onChange={handleCvv} placeholder="143" size="3" maxLength="3" id="cardCvv" autoComplete="off" required />
        </label>
        </div>

        <div className="button"></div>
        <button onClick={handleSubmit} id="button1">Submit</button>
        <button onClick={handleReset}>Reset</button>
      </pre>
    </div>
    </>
  );

};

export default App;