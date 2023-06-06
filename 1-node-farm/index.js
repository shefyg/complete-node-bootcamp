const fs = require('fs'); // for working with filesystem
const http = require('http'); // for working with http

//////////////////////////////////////////////
// FILES


// // Blocking, synchronous way
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about Avocado: ${textIn}\n Creation Date: ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', textOut);

// Non-blocking, asynchronous way
// fs.readFile('./starter/txt/startError.txt', 'utf-8', (err, data) => {
//     if(err) return console.log('ERROR! 💥');


//     console.log('\ndata from start.txt:\n '+data);
//     fs.readFile(`./starter/txt/${data}.txt`, 'utf-8', (err, data2) => {
//         console.log('\ndata from '+data+'.txt:\n '+data2);
//         fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log('\ndata from append.txt:\n '+data3);
//             fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('\nYour file has been written! :)\n');
//             });

//         });


//     });

// });
// console.log('Will read file!'); // wukk show first - because it is non-blocking

//////////////////////////
// SERVER

// Creating a server instance
const server = http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World! from server');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
} ); // port number and local host
