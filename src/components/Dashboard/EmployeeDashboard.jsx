import React from 'react'
import Header from '../other/Header'
import TaskListnumber from '../other/TaskListnumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header/>
        <TaskListnumber/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard