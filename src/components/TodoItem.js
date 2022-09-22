import React, {useState, useRef, createRef} from 'react'
import "../App.css"

function TodoItem(props) {

    const taskItemValueName = useRef(null)
    const updateInputRef = useRef(null)
    const [updatingTask, setUpdatingTask] = useState('')
    const [ isUpdateInputFieldShowing, setIsUpdateInputFieldShowing] = useState(false)

    const updateToTask = () => {
        taskItemValueName.current.textContent = updatingTask
        setUpdatingTask('')
        updateInputRef.current.value = ""
    }


  return (
    <div className='task-item-main-container' id={props.task.completed ? 'markedCompleted' : "markedUnCompleted"  }>
    
            <div className='task-item-name-contianer'>
                <p 
                key={props.index} 
                className={props.task.completed ? 'markedCompletedForP' : "markedUnCompletedForP"}  
                ref={taskItemValueName}
                > {props.task.task}    </p>
                
             </div>
            
              <div className='task-item-btn-container'>


                {isUpdateInputFieldShowing && <input
                    type="text"  
                    placeholder={'Write your updated Task'}
                    onChange={(e) =>setUpdatingTask(e.target.value)}
                    onKeyUp={(e) => {
                        if(e.key == 'Enter') {
                            updateToTask()
                            setIsUpdateInputFieldShowing(false)
                        }
                    }}
                    className="inputForUpdatingTask"
                    ref={updateInputRef}
                    
                 />}


                {props.task.completed && <p className='completed-text'> <i class="fa-solid fa-trophy"></i> (Completed) </p> }

                <i  
                onClick={() => props.task.completed ? props.markingUnCompleted(props.task.task) : props.markingCompleted(props.task.task)}
                className= { props.task.completed ? "fa-regular fa-square-check checkbox-ticked" : "fa-regular fa-square-check checkbox-unticked" }
                > </i>
                <i className="fa-regular fa-circle-xmark"   onClick={() => props.deleteTask(props.task) }></i>


                <i className={isUpdateInputFieldShowing ? "fa-regular fa-pen-to-square edit-btn-onfocus" : "fa-regular fa-pen-to-square"} onClick={() => isUpdateInputFieldShowing ?  setIsUpdateInputFieldShowing(false) : setIsUpdateInputFieldShowing(true)  }></i>

               

                {/* {updatingTask} */}
        
                



              </div>

    </div>
  )
}

export default TodoItem