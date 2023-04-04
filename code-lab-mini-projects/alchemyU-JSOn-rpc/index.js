const axios= require('axios');

// replace below variable with https string of alchemy
const ALCHEMY_URL = 'ALCHEMY_HTTPS_URL_API_KEY';

axios.post(ALCHEMY_URL,{
    jsonrpc:'2.0',
    id :'1',
    method :'eth_getBlock_ByNumber',
    params : [
        0xb44432,
        false
    ]
}).then((response)=>
    console.log(response)
)