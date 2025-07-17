// The http library is an inbuilt library.
// Dvelopers have come up with another library called "express" express.JS. it is more complex because of the different features and functionality it offer
// Research the differences between libraries and framework

// Import the http package  -Creating a server using the http method 
const http = require('http')

// Create a server                    -Route 1
// const server = http.createServer( (request, response) => {
//     response.statusCode = 200; // Signifies a successful response
//     response.setHeader('Content-Type', 'text/plain')
//     response.end('Welcome to Back-End Development with Node.JS')
// })

// Changing the Route                  -Route 2 
const server = http.createServer( (request, response) => {
    if(request.url === '/'){           // -The Default Route
        response.writeHead(200, {'Content-Type': 'text-plain'})
        response.end('Welcome to the Homepage')
    } else if(request.url === '/contact-us'){  // -otherwise Route
        response.writeHead(200, {'Content-Type' : 'type-plain'})
        response.end('Contact us page')
    }else {response.writeHead(404, {'Content-Type': 'text-plain'})
           response.end('Page not found')}                         // Ctrl + C -to stop further execution of codes
})


// Declare port variable
const port = 5500

// Start server
server.listen(port, () => {
    console.log('Server is running successfully.'); // To visualise or Debug
})

