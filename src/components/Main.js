import React from 'react'
import Card from './Card'
// import './style.css'

const Main = () => {
  return (
    <>
       <div className='header'>
            <nav>
                <ul>
                    <li><a href='#'>Popular</a></li>
                    <li><a href='#'>Theater</a></li>
                    <li><a href='#'>Kids</a></li>
                    <li><a href='#'>Drama</a></li>
                    <li><a href='#'>Comedy</a></li>
                </ul>
            </nav>
            <form>
                <div className='search-btn'>
                    <input type='text' placeholder='Enter Movie Name' className='inputText' />
                    <button type='submit'><i class='fas fa-search'></i></button>
                </div>
            </form>
        </div> 
        <div className="container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    </>
  )
}

export default Main