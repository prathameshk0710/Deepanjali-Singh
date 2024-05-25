import React from 'react'
import './MainBody.css'
import Friend from '../Friend/Friend'
import parushPic from './../../images/DeepasPic.jpg'
function MainBody() {
  return (
    <>
        <div className='OtherPeople'>
            <div className='otherTitle'>Let's see what people say about you...</div>
            <div className='allFriends'>
                <Friend friendPic={parushPic}/>
            </div>
        </div>
    </>
  )
}

export default MainBody