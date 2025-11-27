import React, {useState} from 'react'

export default function Textform(props) { //react component name should start with capital letter
  const [text,setText]= useState('enter text here');
 
 const handleUPclick =()=>{
    // console.log("uppercase was clicked" + text);
    let newtext=text.toUpperCase();
    setText(newtext);

 }
 const handleonChange =(event)=>{
    console.log("handle on change");
    setText(event.target.value)
 }

const handlelwclick =()=>{
    let newtext=text.toLowerCase();
    setText(newtext);

}


 return (
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleonChange} id="textbox" rows="8"></textarea>
<button className="btn btn-primary my-3 " onClick={handleUPclick}>convert to uppercase</button>
<button className="btn btn-primary mx-3" onClick={handlelwclick}>convert to lowercase</button>
</div>
  )
}
//button.btn.btn-primary for bootstrap button & it add button styling
//useState is a hook
//mb-3 margin bottom 3
//onChange is used to change the text area value when we type something
//value={text} is used to set the value of text area to text variable
//rows="8" is used to set the number of rows in text area
//props.heading is used to get the heading from App.js file 
//setText is used to update the value of text variable
//for margin on left and right use mx-3
