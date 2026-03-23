import React, { useState } from 'react'

export default function TextForm({heading="Enter the text to analyze below", mode, showAlert}) {

  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText("You have clicked on handleUpClick");
    if(newText === "")
    {
      showAlert("Nothing to convert", "success");
    }
    else 
    {
      setText(newText);
      showAlert("Converted to UpperCase", "success");
    }
    
  }

  const handleloClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    // setText("You have clicked on handleUpClick");
    showAlert("Converted to LowerCase", "success");
  }

  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    showAlert("Cleared Text", "success")
  }

  // const textareaRef = useRef(null);  // For copy text

    // const handleCopyToKeybd = async () => {
    //   const text = textareaRef.current.value;

    //   try {
    //     await navigator.clipboard.writeText(text); // ⭐ THIS does the real copy
    //     console.log("Copied:", text);
    //   } catch (err) {
    //     console.error("Copy failed", err);
    //   }
    // };
   
  const handleCopyToKeybd = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    // showAlert("Text Copied to keyboard", "success")

    // Another way
    navigator.clipboard.writeText(text);
    showAlert("Text Copied to keyboard", "success")
  }

  const handleRmExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra space has been removed", "success");
  }

  const handleOnChange = (event) => 
  {
    // console.log("On Change");
    setText(event.target.value);
  }

  const[text, setText] = useState('');
  // const[text, setText] = useState('Enter Text Here');
  // text = "Enter New Text";  // Wrong way to change the state
  // setText("Enter Text Here"); // Correct Way to change the state

  const [count, setCount] = useState(0);
 
  return (
    <>
      <div className='container'>
          <h1 className={`text-${mode==='light'?'dark':'light'}`}>{heading}</h1>
          <div className="mb-3">
              {/* <textarea className="form-control"  ref={textareaRef} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
              {/* <textarea className="form-control" style={{backgroundColor : mode==='light'? 'white':'rgb(15, 53, 84)', color : mode==='light'? 'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className={`btn btn-${mode==='primary'?'light':'primary'} mx-1 my-1`} onClick={handleUpClick}>Convert To Uppercase</button>
          <button disabled={text.length===0} className={`btn btn-${mode==='primary'?'light':'primary'} mx-1 my-1`} onClick={handleloClick}>Convert To Lowercase</button>
          <button disabled={text.length===0} className={`btn btn-${mode==='primary'?'light':'primary'} mx-1 my-1`} onClick={handleClearClick}>Text Clear</button>
          <button disabled={text.length===0} className={`btn btn-${mode==='primary'?'light':'primary'} mx-1 my-1`} onClick={handleCopyToKeybd}>Copy To Keyboard</button>
          <button disabled={text.length===0} className={`btn btn-${mode==='primary'?'light':'primary'} mx-1 my-1`} onClick={handleRmExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className='container my-3'>
        <h2 className={`text-${mode==='light'?'dark':'light'}`}>Your Text Summary</h2>
        {/* <p>{text.split(' ').length} Words, {text.length} characters</p> */}
        {/* <p className={`text-${mode==='light'?'dark':'light'}`}>{text.trim().split(/\s+/).filter(Boolean).length} Words, {text.length} characters</p>  */}
        <p className={`text-${mode==='light'?'dark':'light'}`}>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words, {text.length} characters</p>
        <p className={`text-${mode==='light'?'dark':'light'}`}>{ 0.008 * text.split(' ').filter((element) => {return element.length!==0}).length} Minutes Read</p>
        <h2 className={`text-${mode==='light'?'dark':'light'}`}>Preview</h2>
        <p className={`text-${mode==='light'?'dark':'light'}`}>{text.length>0? text: 'Enter something in the textbox above to preview it here'}</p>
        <hr />
        <p className={`text-${mode==='light'?'dark':'light'}`}>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
    </>

  )
}
