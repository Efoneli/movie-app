import { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

// import './style.css'
let API_keys = "&api_key=1189e19e4888756b7edb9a1346371528";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_keys;

const Main = () => {
  const [movieData, SetData] = useState([]);
  const [url_set, setUrl] = useState(url);
  // const [scrolled, setScrolled] = useState(false);

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 200) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // });

  // let navbarClasses = ["navbar"];
  // if (scrolled) {
  //   navbarClasses.push("scrolled");
  // }

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results)
        SetData(data.results);
      });
  }, [url_set]);

  const getData = (movieType) => {
    if (movieType === "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_keys;
    }
    if (movieType === "Theater") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_keys;
    }
    if (movieType === "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_keys;
    }
    if (movieType === "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10" +
        API_keys;
    }
    if (movieType === "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_keys;
    }
    setUrl(url);
  };

  const searchMovie = (evt) => {
    if (evt.key === "Enter") {
      // console.log('hello')
      url =
        base_url +
        "/search/movie?api_key=1189e19e4888756b7edb9a1346371528&query=" +
        search;
      setUrl(url);
      setSearch(" ");
    }
  };
  return (
    <>
      {/* <div className={navbarClasses.join(" ")}> */}
       <Navbar />
      {/* </div> */}
      <div className="container">
        {movieData.length == 0 ? (
          <p className="text-2xl font-bold text-red-900">Opps!!! Not found☹️</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </>
  );
};

export default Main;
