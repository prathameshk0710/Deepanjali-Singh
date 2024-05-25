import React from 'react'
import './Friend.css'
function Friend({friendPic}) {
  return (
    <>
        <div className='singleFriend'>
            <img src={friendPic} alt='friendPic' className='friendPic'/>
            <div className='friendDesc'>
                <div className='friendName'>
                    Parush
                </div>
                <div className='friendMessage'>
                    hello
                </div>
            </div>
        </div>
    </>
  )
}

export default Friend