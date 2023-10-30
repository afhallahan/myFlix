const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8080;

//Use Morgan middleware to log requests
app.use(morgan('combined'));

app.use(express.static('public'));

let topMovies = [
    {
        title: 'Amelie',
        director: 'Jean-Pierre Jeunet',
        year: 2001
    },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        director: 'Michel Gondry',
        year: 2004
    },
    {
        title: 'Life is Beautiful',
        director: 'Robert Benigni',
        year: 1997
    },
    {
        title: "Pan's Labyrinth",
        director: 'Guillermo del Toro',
        year: 2006
    },
    {
        title: 'Fight Club',
        director: 'David Fincher',
        year: 1999
    },
    {
        title: 'Parasite',
        director: 'Bong Joon-ho',
        year: 2019
    },
    {
        title: 'Requim for a Dream',
        director: 'Darren Aronofsky',
        year: 2000
    },
    {
        title: 'Old Boy',
        director: 'Park Chan-wook',
        year: 2003
    },
    {
        title: 'There Will be Blood',
        director: 'Paul Thomas Anderson',
        year: 2007
    },
    {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008
    },
];

//Create the GET route for /
app.get('/', (req, res) => {
    res.send("Welcome to my movie API!");
});

app.get('/secreturl', (req, res) => {
    res.send('This is a secret url with super top-secret content.');
});

//Create the GET route for /movies
app.get('/movies', (req, res) => {
    res.json(topMovies);
});

//Return a list of ALL movies to the user
app.get('/movies', (req, res) => {
    res.send('Successful GET request returning data on all movies');
});

// Return data about a single movie by title to the user
app.get('/movies/:title', (req, res) => {
    res.send(`Successful GET request returning data about the movie with title: ${req.params.title}`);
});

// Return data about a genre by name/title
app.get('/genres/:name', (req, res) => {
    res.send(`Successful GET request returning data about the genre with name: ${req.params.name}`);
});


//READ
app.get('/movies/:title', (req, res) => {
    const { title } = req.params; 
    const movie = movies.find( movie => movie.Title == title );

    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(400).send('no such movie')
    }
    })


//Error-handling middleware function
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//Start server
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});