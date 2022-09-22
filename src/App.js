import './App.css';
import React, {useState, useRef} from "react"
import TodoItem from './components/TodoItem';



function App() {

  const taskInput = useRef(null)
  const [currentTask, setCurrentTask ] = useState('')
  const [todoList, setTodoList] = useState([])

  const addTask = () => {
    setTodoList([...todoList, {task : currentTask, completed : false} ])
    taskInput.current.value = ""
    setCurrentTask("")
  }

  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter((task) => {
      return task != taskToDelete
    }))
  }

  const markingCompleted = (taskToMarkComplete) => {
    setTodoList(todoList.map((task)=> {
      return task.task == taskToMarkComplete ? {task : taskToMarkComplete, completed : true} : {task: task.task, completed : task.completed ? true : false}
    })) 
  }

  const markingUnCompleted = (taskToMarkComplete) => {
    setTodoList(todoList.map((task)=> {
      return task.task == taskToMarkComplete ? {task : taskToMarkComplete, completed : false} : {task: task.task, completed : task.completed ? true : false}
    })) 
  }


  return (
    <div className="container">

      <div className="input-container">
        <input
          ref={taskInput}
          type="text"
          placeholder = "Add a task...."
          onChange={(e) => setCurrentTask(e.target.value)}
          onKeyUp={(e) => { if(e.key == 'Enter' && currentTask.length != 0) addTask() }}
          />  
      </div>

      <div className='task-container' >
        {todoList.map((task, index) => {
          return (
                <TodoItem 
                  forwardedRef = {taskInput}
                  task = {task}
                  index = {index}
                  deleteTask = {() => deleteTask(task)}
                  markingUnCompleted = {() => markingUnCompleted(task.task)}
                  markingCompleted = {() => markingCompleted(task.task)}
                  
                  
                />


            
          )


        })}
      </div>
      
    </div>
  );
}

export default App;



// task-item-btn-container BACKUPP
// <div className='task-item-btn-container'>
                

//                 <i className="fa-regular fa-square-check" onClick={() => task.completed ? markingUnCompleted(task.task) : markingCompleted(task.task)  }></i>
//                 <i className="fa-regular fa-circle-xmark" onClick={() => deleteTask(task) }></i>
//                 {task.completed ? <p>Completed</p> : <p> pending </p>  }


//                 <TodoItem 
//                   task = {task}
//                   index = {index}
//                   deleteTask = {() => deleteTask(task)}
//                   markingUnCompleted = {() => markingUnCompleted(task.task)}
//                   markingCompleted = {() => markingCompleted(task.task)}
//                   />

//               </div>