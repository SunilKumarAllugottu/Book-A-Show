import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import ShowSummary from './ShowSummary';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setShows(data)})
      .catch(error => console.log(error));
  }, []);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/summary/:id" element={<ShowSummary shows={shows} />} />
        </Routes>
    </Router>
  );
}

function ShowList({ shows }) {
  return (
    <div className="container">
        
      {shows.map(({ show }) => (
        <div className="show-item" key={show.id}>
            <img src={show.image.medium}/>
          <h3>{show.name}</h3>
          <p>Language: {show.language}</p>
          <p>Premiered: {show.premiered}</p>
          <Link to={`/summary/${show.id}`}>
            <button className="btn btn-primary">View Summary</button>
          </Link>
          <hr />
        </div>
      ))}
       
    </div>
  );
}
export default App;
