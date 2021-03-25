import React,{useState} from 'react';
import Tasklist from '../TaskList/tasklist';
import './Main.css';

const Main = () =>{
    const [task,setTask] = useState([])
    const [currentValue , setCurrentValue] = useState("")
    
    const onAddHandler = () =>{
        if(currentValue!==''){
            const temp = [...task];
            temp.push({id:Math.random()*2579,name:currentValue})
            setTask(temp)
            document.getElementById('input').value = ''
            setCurrentValue('')
        }else{
            alert("Please enter task")
        }
    }

    const deleteTaskHandler = (index) =>{
        const temp = [...task];
        temp.splice(index,1)
        setTask(temp)
    }

    const submmitHandler = (index ,editval) =>{
        console.log("called"+editval)
        const temp = [...task]
        temp[index].name = editval
        setTask(temp)
    }

    let currTask = task!==null?task.map((elem,index)=>{
        return (
            <Tasklist 
            key={elem.id} 
            name={elem.name}
            delete={()=>deleteTaskHandler(index)}
            submit = {(editVal)=>(submmitHandler(index,editVal))}>
            </Tasklist>
        )
    }):null
    
    return(
        <div className="containerDiv">
            <div className = "header">
                <input type = "text" id="input" className="addtext" placeholder="Add Task" onChange={(event)=>{setCurrentValue(event.target.value)}}></input>
                <button className="addbutton" onClick={onAddHandler}>+</button>
            </div>
            <div className="taksarea">
                {currTask}
            </div>
            <p className="note">Please click on added task to edit</p>
        </div>
    )
}

export default Main;