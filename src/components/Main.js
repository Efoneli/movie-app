import React from 'react'

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
                <div>
                    <input type='text' placeholder='Enter Movie Name' className='inputText' />
                    <button type='submit'></button>
                </div>
            </form>
        </div> 
    </>
  )
}

export default Main