import React from 'react'
import './Dashboard.css'
import deepaPic from './../images/DeepasPic.jpg'

const Dashboard = () => {
  return (
    <>
        <div className='mainBoard'>
            <div className='intro'>
                <div className='name'>Deepanjali Singh</div>
                <div className='desc-image'>
                    <div className='description'>
                        "Deepanjali" meaning an offering made with lamps, representing reverence, purity, and the dispelling of darkness. She is a soul with a pure heart, gifted with the power to embrace others with warmth and kindness. Her presence illuminates the lives of those around her, bringing light and positivity wherever she goes. Deepanjali's genuine compassion and unwavering support make her a cherished friend, a beacon of hope and love in every situation. Like an angelic guardian, she watches over her loved ones, offering solace in times of need and uplifting spirits with her boundless positivity.
                    </div>
                    <img src={deepaPic} alt='deepas pic' className='DeepaPic'></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard