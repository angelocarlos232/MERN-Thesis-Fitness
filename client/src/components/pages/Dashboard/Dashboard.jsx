import React, { useState } from 'react'
import './Dashboard.css'
import { useEffect } from 'react'
import DashRoutine from './DashRoutine'


const Dashboard = () => {
    const mealsData = "4/6 meals done"
    const sleepData = "5hrs sleep"

  return (
    <div className='mx-3 my-3'>
        <div>
        <div className="minor-details">
            <div className="column">
                <div className='ml-3'>
                        <h2 className='font-bold'>Exercises:</h2>
                            <p>Welcome</p> 
                </div>     
            </div>
                <div className="column">
                    <div className='ml-3'>
                        <h2 className='font-bold'>Meals:</h2>
                        <p>{mealsData}</p>
                    </div>
                </div>
                <div className="column">
                    <div className='ml-3'>
                        <h2 className='font-bold'>Sleep:</h2>
                        <p>{sleepData}</p>
                    </div>
                </div>
            <div className='column-button ml-3'>
                <button>START</button>
            </div>
        </div>

        <div>
            <DashRoutine />
        </div>
        
        
        
        </div>
    </div>
  )
}

export default Dashboard
