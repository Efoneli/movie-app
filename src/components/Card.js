import React from 'react'

const Card = () => {
  return (
    <>
       <div className='movie'>
            <img src='images/AfterEverHappy.jpg' className='poster' />
            <div className='movie-details'>
              <div className="box">
                <h4 className="title">Movie Title</h4>
                <p className='rating'>9.7</p>
              </div>
              <div className="overview">
                <h1 className='font-bold text-2xl'>Overview</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi neque ab accusantiu
              </div>
            </div>
        </div> 
    </>
  )
}

export default Card