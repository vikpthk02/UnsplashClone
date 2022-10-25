import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const Access_Key = 'R1V2oOYTU3GoladfRiEeIAd5qOVVJXI1xSKCbkKWCcQ';
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [randomResults, setRandomResults] = useState([]);

  const fetchData = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=${Access_Key}&per_page=50&query=${value}&orientation=squarish&show_on_profile`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results)
      });
  }
  const fetchRendomData = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=${Access_Key}&per_page=500&query=trending&orientation=squarish`)
      .then(res => res.json())
      .then(data => {
        setRandomResults(data.results)
      });
  }

  useEffect(() => {
    fetchRendomData();
  }, [])

  return (
    <>
      <header className="header-section">
        <div className="header-content">
          <h5 className="logo">Unsplash Clone</h5>
          <p className="slogan">The internet’s source for visuals. Powered by creators everywhere.</p>

          <form>
            <input type="text"
              name="Search"
              className="search-box"
              placeholder="Search free hight-resolution photos"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onSubmit={fetchData()}
            />
            {/* <button className="search-btn"
              onClick={fetchData()} type="submit"
            >Search</button> */}
          </form>
        </div>
      </header>

      <div className="lists">
        {
          results.map((users) => {
            return <img className="item" key={users.id} src={users.urls.regular} />
          })
        }
      </div>
      <div className="lists">
        {
          randomResults.map((users) => {
            return <img className="item" key={users.id} src={users.urls.regular} subtitle={<span>by: Author</span>} />
          })
        }
      </div>

    </>
  );
}

export default App;

{/* <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        <button onClick={fetchData()} type="submit">Search</button>
      </div> */}
