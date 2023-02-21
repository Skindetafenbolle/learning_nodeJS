// import os from 'os'
// console.log(os.platform());

//lesson 4 - modules
// import { add,minus } from './math.js'
// let res1 = add(4,5)
// let res2 = minus(6,2)
// console.log(res1,res2)

//lesson 5 - files
import fs from 'fs'
fs.readFile('some.sh','utf-8', (err,data)=>{
    fs.writeFile('some.sh',data + 'Hello World from NodeJS', (err,data) =>{
        console.log('congrats');
    })
})