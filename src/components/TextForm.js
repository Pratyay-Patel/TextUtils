import React,{useState} from 'react' //We can get this boiler plate code by simply typing rfc (thanks to es7 snippets)
//{useState} is a react hook: Hooks let you use state and other React features without writing a class.



export default function TextForm(props) {
  
  const handleUpClick=()=>{
    console.log("Uppercase was clicked.");
    let newText=text.toUpperCase();
    setText(newText); //Changes the value of the state variable text to newText and hence it gets converted to uppercase
    props.showAlert("Converted to uppercase!","success"); //This is a custom alert function that we created in App.js, which will show an alert when the text is converted to uppercase
  }

    const handleLowClick=()=>{
    console.log("Uppercase was clicked.");
    let newText=text.toLowerCase();
    setText(newText); //Changes the value of the state variable text to newText and hence it gets converted to uppercase
    props.showAlert("Converted to lowercase!","success"); //This is a custom alert function that we created in App.js, which will show an alert when the text is converted to lowercase
  }

   const handleClearClick=()=>{
    console.log("Uppercase was clicked.");
    let newText=""
    setText(newText); //Changes the value of the state variable text to newText and hence it gets converted to uppercase
    props.showAlert("Text cleared!","success"); //This is a custom alert function that we created in App.js, which will show an alert when the text is cleared
  }

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value); //Changes the value of text as per the value entered by the user, thus allowing us to update the content in the textarea
  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!","success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);//This is a JS reject here we are removing all spaces between the text and storing all the words in an array
    setText(newText.join(" ")) //Here we are joining all the words in the array separated by a single space, hence all extra spaces will be removed
    props.showAlert("Removed extra spaces!","success");
  }
  const [text, setText] = useState(""); //So now wherever we use the variable text, and update it at one place, it'll be updated at all places, without reloading the page. That's the magic of React!
  // text="Enter The Text"; //Wrong way to change the state
  //setText("Enter text here"); //Correct way to change the state
  return (//Make sure you replace for with htmlFor and class with className everywhere
    
  <>
  {console.log("Current mode:", props.mode)}
<div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>{/*Here the outer curly braces indicate we're writing JS code and the inner braces indicate we're writing a JS object literal*/}
        <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#36454F':'white',color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
    </div> {/*onChange event is used becuase it allows us to type inside the textarea, without it we cannot change the text inside the textarea.*/}
    <button className="btnprimary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button> {/*button.btn.btnprimary*/}
    <button className="btnprimary my-2 mx-1" onClick={handleLowClick}>Convert to Lowercase</button> {/*button.btn.btnprimary*/}
    <button className="btnprimary my-2 mx-1" onClick={handleClearClick}>Clear Text</button> {/*button.btn.btnprimary*/}
    <button className="btnprimary my-2 mx-1" onClick={handleCopy}>Copy Text</button> {/*button.btn.btnprimary*/}
    <button className="btnprimary my-2 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> {/*button.btn.btnprimary*/}

</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}> {/*my-3 is a bootstrap class used to set a margin of 2 along the y axis from the element just above this div*/}
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>{/*We don't have to implement any backend for this functionality because it is completely client-side and updates without reloading the page*/}
  <p>{0.008*text.split(" ").length} Minutes required to read this text</p>{/*We are assuming it takes on an avg 1 minute to read 125 words*/}
  <h2>Preview</h2> 
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
</>
  )
}
