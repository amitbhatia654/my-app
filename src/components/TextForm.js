import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        //console.log("we clicked a button" + text)
        const newtext=text.toUpperCase();
        SetText1(newtext)             
    }
    const lowercase=()=>{
        //console.log("we clicked a button" + text)
        const newtext=text.toLowerCase();
        SetText1(newtext)             
    }

    const count=()=>{
        //console.log("we clicked a button" + text)
        const newtext=text.length;
        SetText1(newtext)             
    }


    const handleonchange=(event)=>{
        //console.log("on changed")
        SetText(event.target.value)
    }
    const [text ,SetText] = useState("Enter Text Here ")
    const [text1 ,SetText1] = useState("")

    //second converter code start from here

    //  const handleupclick2=()=>{
    //     //console.log("we clicked a button" + text)
    //     const newtext2=text2.toLowerCase();
    //     SetText2(newtext2)
        
    // }
    // const handleonchange2=(event)=>{
    //     //console.log("on changed")
    //     SetText2(event.target.value)
    // }
    // const [text2 ,SetText2] = useState("enter Text ")



    
  return (
    <div className='container my-3 '>
       <div className="mb-3">
           <h1>{props.heading} </h1>
        <textarea className="form-control" value={text}  onChange={handleonchange} id="exampleFormControlTextarea1" rows="5"></textarea>
        <textarea className="form-control" value={text1}   id="exampleFormControlTextarea1" rows="5"></textarea>
        <button className='btn btn-primary m-1' onClick={handleupclick} >For Upper Case </button>
        <button className='btn btn-primary m-1' onClick={lowercase} >For Lower Case</button>
        <button className='btn btn-primary m-1' onClick={count} >Count words</button>
       </div>

       {/* <div className="mb-3">
           <h1> Here we can Convert Our Text into Lower Case </h1>
        <textarea className="form-control" value={text2}  onChange={handleonchange2} id="exampleFormControlTextarea1" rows="5"></textarea>
        <button className='btn btn-primary' onClick={handleupclick2} >Click Here To Convert</button>
       </div> */}



    </div>
  )
}
