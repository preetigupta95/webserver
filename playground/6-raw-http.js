const https = require('https')

const url ='https://api.darksky.net/forecast/42b67f429c64f25877ec780825adf9ca/40,-75';


const request = https.request(url,(response)=>{
  let data='';

  response.on('data',(chunk) =>{

    data = data +chunk.toString();
    console.log(chunk);
  })

  response.on('end',()=>{
    const body =JSON.parse(data)
    console.log(body);

  })
})

request.on('error',(error)=>{
  console.log('An Error',error)
})

request.end();
