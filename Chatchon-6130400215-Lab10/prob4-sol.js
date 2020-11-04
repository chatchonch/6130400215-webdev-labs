var output =''
var request = require('request');
request.get("https://krunapon.github.io/google/call-kk-restaurants.json", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    var result = JSON.parse(body)
    for (var i = 0; i <= 19 ;i++) {
        output += '<li>' + result.results[i].name + '</li>';  
    }
})

const http = require('http')
const port = 8000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.write('<h1>Restaurants in Khon Kaen.</h1>')
    res.write('<ol>' + output + '</ol>')
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

