import { useState } from 'react';
import './App.css';
import Input from './Components/input'
import Board from './Components/Board'

function App() {

  const [taskList,setTasklist] = useState([])

  return (
    <div className='px-12'>
      <div className='flex flex-col items-center justify-center py-8 gap-4'>
        <h1 className='text-xl font-semibold'>Todo Board</h1>
        <Input taskList={taskList} setTasklist={setTasklist} />
        <div className='flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10
         lg:px-12'>
          {taskList.map((task, index) => (
            <Board 
            task={task} 
            key={index}
            index={index}
            taskList={taskList}
            setTasklist={setTasklist} />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
