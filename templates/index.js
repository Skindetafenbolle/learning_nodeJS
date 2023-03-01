// import os from 'os'
// console.log(os.platform());

//lesson 4 - modules
// import { add,minus } from './math.js'
// let res1 = add(4,5)
// let res2 = minus(6,2)
// console.log(res1,res2)

//lesson 5 - files
// import fs from 'fs'
// fs.readFile('some.sh','utf-8', (err,data)=>{
//     fs.writeFile('some.sh',data + 'Hello World from NodeJS', (err,data) =>{
//         console.log('congrats');
//     })
// })

//lesson 6 - directory's
// import fs from 'fs'
// fs.mkdir('text-files', ()=>{
//     fs.writeFile('./text-files/some.sh','Hello', ()=>{
//
//     })
// })
//
// fs.unlink('./text-files/some.sh', ()=>{
//     fs.rmdir('./text-files', ()=>{})
// })

// lesson 7 - created server
import http from "http"
import fs from 'fs'

const PORT = 3000
const HOST = 'localhost'
let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

    if(req.url === '/'){
        fs.createReadStream(
            './templates/index.html'
        ).pipe(res)
    }
    else if (req.url === '/about')
        fs.createReadStream(
            './templates/about.html'
        ).pipe(res)
    else
        fs.createReadStream(
            './templates/error.html'
        ).pipe(res)

    // const stream = fs.createReadStream('./templates/index.html')
    // stream.pipe(res)
})
server.listen(PORT, HOST, () => {
    console.log(`Connected to Server`)
})

