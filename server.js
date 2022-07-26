
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const shows = {

    'cars 2': {
        'type': "Movies",
        'streamingService': 'Disney+',
        'star': 'Lightning McQueen',
        'likes': ''
    },

    'cars': {
        'type': "Movies",
        'streamingService': 'Disney+',
        'star': 'Lightning McQueen',
        'likes': ''
    },

    'masha and mishka': {
        'type': "series",
        'streamingService': 'Netflix',
        'star': 'Masha, Mishka',
        'likes': ''
    },

    'unknown': {
        'type': "unknown",
        'streamingService': 'unknown',
        'star': 'unknown',
        'likes': ''
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

// app.get('/api', (request, response) => {
//     response.json(shows)
// })



app.get('/api/:name', (request, response) => {
    const showsName = request.params.name.toLowerCase()
    console.log(shows[showsName])

    if (shows[showsName]) {
        response.json(shows[showsName])
    } else {
        response.json(shows['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})



