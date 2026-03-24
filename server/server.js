const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
    {
      Title: "Titanic",
      Released: "1997-12-19",
      Runtime: 194,
      Genres: ["Drama", "Romance"],
      Directors: ["James Cameron"],
      Writers: ["James Cameron"],
      Actors: ["Leonardo DiCaprio", "Kate Winslet"],
      Plot: "A young woman and a struggling artist fall in love aboard the Titanic just before the ship's tragic fate changes everything.",
      Poster: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2024/02/IMG_8085-scaled.jpeg",
      Metascore: 75,
      imdbRating: 7.9
    },
    {
      Title: "Interstellar",
      Released: "2014-11-07",
      Runtime: 169,
      Genres: ["Adventure", "Drama", "Sci-Fi"],
      Directors: ["Christopher Nolan"],
      Writers: ["Jonathan Nolan", "Christopher Nolan"],
      Actors: ["Matthew McConaughey", "Anne Hathaway"],
      Plot: "A group of explorers travel through space in search of a new home as Earth slowly becomes unlivable.",
      Poster: "https://static.wikia.nocookie.net/interstellarfilm/images/9/99/Interstellar-Poster-655x1024.jpg/revision/latest?cb=20141003183245",
      Metascore: 74,
      imdbRating: 8.7
    },
    {
      Title: "Inception",
      Released: "2010-07-30",
      Runtime: 148,
      Genres: ["Action", "Sci-Fi", "Thriller"],
      Directors: ["Christopher Nolan"],
      Writers: ["Christopher Nolan"],
      Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      Plot: "A skilled thief enters people’s dreams to steal secrets but is given a risky mission to plant an idea instead.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      Metascore: 74,
      imdbRating: 8.8
    }
  ];

  res.json(movies);
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

