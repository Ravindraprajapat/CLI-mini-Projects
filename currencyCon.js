import https from 'https'
import  readline  from 'readline'
import chalk from 'chalk'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const apiKey = '1eccfb59edc61c8c944107e'; // Replace with a real API key
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency = (amount,rate) =>{
     return (amount*rate).toFixed(2);
}
https.get(url,(response)=>{
    let data =""
    response.on('data' ,(chunk) =>{
      data+=chunk;
    })

    response.on('end' , () =>{
         const rates = JSON.parse(data).conversion_rates;

         rl.question('Enter the amount in USD: ', (amount)=>{
            rl.question('Enter the target currency (eg .INR, EUR, NPR): ' , (curr)=>{
               const rate = rates[curr.toUpperCase()];
               if(rate){
                console.log(`${amount} USD is approximately ${convertCurrency(amount,rate)} ${curr}`)
               }
               else{
                console.log(`Invalid currency code `)
               }
               rl.close();

            })
         })
    })
})
