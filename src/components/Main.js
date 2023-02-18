import {useState, useEffect} from 'react'
import Card from './Card'

// import './style.css'
let API_keys = '&api_key=1189e19e4888756b7edb9a1346371528'
let base_url = 'https://api.themoviedb.org/3'
let url=base_url+'/discover/movie?sort_by=popularity.desc'+API_keys;


const Main = () => {
    const [movieData, SetData] = useState([]);
    const [url_set, setUrl] = useState(url);

    useEffect(() => {
        fetch(url_set).then(res=>res.json()).then(data=> {
            // console.log(data.results)
            SetData(data.results)
        });
    }, [url_set])
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

export default Main;