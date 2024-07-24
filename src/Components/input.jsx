import React, { useState } from 'react'

const Input = ({taskList,setTasklist}) => {

    const [input,setInput] = useState("")

    const handleAddTask =  (e) => {
        e.preventDefault()
        setTasklist([...taskList,input])
        setInput("")
    }

  return (
    <>
      <form className='flex flex-row items-center justify-center gap-3'>
        <input className='border rounded py-1.5 px-2.5 text-lg'
          type="text"
          placeholder='add a task'
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button className='bg-green-800  hover:bg-green-600 text-white py-2 px-3.5
         rounded-lg font-semibold'
         onClick={handleAddTask} >Add</button>
      </form>
    </>
  )
}

export default Input
