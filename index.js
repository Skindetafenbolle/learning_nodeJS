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

const PORT = 3000
const HOST = 'localhost'
let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.end
    (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>NodeJs</title>
        </head>
            <body>
            Hello Nodejs
            </body>
        </html>`
    )
})
server.listen(PORT, HOST, () => {
    console.log(`Connected to Server`)
})
