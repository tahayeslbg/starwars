import './App.css';
import React from 'react';


import axios from 'axios';

class App extends React.Component {
  state = {
    movies:[],
    parts: [],
  }


  async componentDidMount() {
    const response = await axios.get("https://api.themoviedb.org/3/collection/10?api_key=5d9bcb79850b217fe0b7912ee7f8831a");
    this.setState({movies: [response.data], parts: response.data.parts })
  }


  render() {
    return (
      <div className='App'>

        <div className='NavbarContainer'>
            <h4>TAHAFLIX</h4>

            <div className='NavbarInner'>
              <div className='NavbarLinks'>
                <span>Movies</span>
                <span>Series</span>
              </div>

              <div className='NavbarButtons'>
                <button>Sign In</button>
                <button>Sign Up</button>
              </div>
            </div>
        </div>

        {this.state.movies.map((movie) => (
          <div className='MovieContainer' key={movie.id}>
            <h2>{movie.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
            <p> {movie.overview} </p>
            <p> {movie.parts.title} </p>
            
          </div>
        ) )}

        

        <div className='PartsContainer'>
                {this.state.parts.map((part, index) => (
                  
                    <div className='PartsInner' key={index}>
                      
                        <div className='PartsCard'>
                            <img src={`https://image.tmdb.org/t/p/w500${part.poster_path}`}/>
                            <h3> {part.title} </h3>
                            <p> {part.overview} </p>
                        </div>
                      
                    </div>
                  
                ))}
        </div>
      </div>
    )
  }
}

export default App;
