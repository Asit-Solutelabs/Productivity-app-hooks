import React, { useState } from 'react';
import Timer from '../timer/timer'
import './tasklist.css'

const Tasklist = (props) =>{
    const [editVal , setEditVal] = useState(props.name)
    const [complete , setComplete] = useState(false)

    const editHandler = (event) =>{
        setEditVal(event.target.value)
        setComplete(true)
    }

    return(
        <div className="listDiv">
            <div className="control">
                <div className="textsubmitarea">
                    <input type = "text" className="namep" value={editVal}  onChange={(event)=>{editHandler(event)}} />
                    {complete?<button className="complete" onClick={()=>(props.submit(editVal) ,setComplete(false))}>Submit</button>:null}
                </div>
                <button className="delete" onClick={props.delete}>X</button>
            </div>
            <div className="timer">
                <Timer/>
                <p className = "time">{props.time}</p>
            </div>
        </div>
    )
}

export default Tasklist;