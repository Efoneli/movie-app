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
                <h1>Overview</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi neque ab accusantium molestiae id odio, sequi deserunt magnam blanditiis rem ut vitae recusandae laboriosam quas reprehenderit earum. Reprehenderit aspernatur veritatis expedita eligendi ratione iusto magni, quasi nisi in, possimus, ea reiciendis quos eius. Doloremque aliquam minima repellat, deserunt corporis molestias.
              </div>
            </div>
        </div> 
    </>
  )
}

export default Card