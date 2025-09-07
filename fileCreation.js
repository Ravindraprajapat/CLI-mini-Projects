import readline from 'readline';
import fs from 'fs';
import { stdin, stdout } from 'process';

const rl  = readline.createInterface({
    input:stdin,
    output:stdout
})

 const fileCreation = () =>{
    rl.question('Enter your file name: ',(fileName)=>{
       rl.question('enter the content for a file: ' , (content)=>{
        fs.writeFile(`${fileName}.txt`,content,(err)=>{
           if(err){
             console.error(`Error will writing the file ${err.message}`)
           }
           else{
            console.log(`File ${fileName}.txt created Success fully!`)
           }
           rl.close();
        })
       })
    })
}
fileCreation();