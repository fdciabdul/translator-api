const express = require('express');
const axios = require('axios');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Free REST API - Google Translator');
});


app.post('/api/translate', (req,res)=> {
    
    
        let l_in = req.body.in // language in
        if (l_in === undefined){
            l_in = "en" // default language in: English
            //console.log("English ",l_in)
        }

        let l_out = req.body.out // language out
        if (l_out === undefined){
            l_out = "es" // default language out: Spanish
            //console.log("Spanish ",l_out)
        }
   
        let text = (req.body.text)
        //console.log(text)
        if (text === undefined){
            text = 'Error sending request, please check out the documentation' // Error Message
            //console.log('texto', text)
        }else{
            
            text = text.replace(' ','%20').replace('.','@').replace('!','$')
            //console.log(text)
        }
        
    
    const data = 'f.req=%5B%5B%5B%22MkEWBc%22%2C%22%5B%5B%5C%22' + text +'%5C%22%2C%5C%22' + l_in + '%5C%22%2C%5C%22' + l_out + '%5C%22%2Ctrue%5D%2C%5Bnull%5D%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&at=AD08yZlZKMrRdOYeS-X0SSzR0JRG%3A1646398415914&';
    //console.log(data)
    const config = {
        method: 'post',
        url: 'https://translate.google.com/_/TranslateWebserverUi/data/batchexecute?rpcids=MkEWBc&source-path=%2F&f.sid=3391631967104580791&bl=boq_translate-webserver_20220302.14_p1&hl=en&soc-app=1&soc-platform=1&soc-device=1&_reqid=628417&rt=c',
        headers: { 
          'authority': 'translate.google.com', 
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"', 
          'x-goog-batchexecute-bgr': '[";wN643pPQAAbXXix7115fY5UdExmzSSkmACkAIwj8RsTGoCVlrR6g3zFbIKt-bjLLjOczM_PUEd-R63vuBYDjsgciQB8AAACoTwAAAAR1AQcXASKtVCy3SHVM86arH3ca4DeosLejOhPvnhgI8USjI8qdRCmndAfA-YcE3FmoU0Y-tsSbyLLt8FvlBY4EQsgrpLTPEzWi2RO9eI75JLyBrYIqmsKRXjaNInlBrQHRcySeIbpxTd4xViSe0Hgb4L-4SDjR1X7-4W8S1gxufCjhD87sGjRyKFGKWhhq76Et_IbZ0EGxI1hQ9DWxFv3HvM5sbWc-NQSO_XkSZbPJN2eTpLFDy9-uFAfNhuNLb5E2VrqTxB1FVbYcQhaN4CGRBionHBxxHztFk1eXFYMoMkbeM7_LHGnbYFvG6KhgMpOgNZfisN1e0pMu31Mzv2qaL5_QM3GGWaTM1aqFF0p_xG3DjU93O_X8YwWyoV5R2hYTO9o7oDC6LoQCahctz9j6hpt0afOJHI6Z4w0ttNVulsrKqp1kT6518VJjT_kDgRNU4QoFxLRjhJS_mJVOO9LjbouMOdrzp_D4Nxay-HNNu7uRPXMT8TPv0eNQYlb9D6A72Tr_wOugIeStO1ter_LCOrUp_Ov73IpUud1Vl4MFwGhkt7sc0i_rTN7pc4xcqSSMxNprfc0pCF1I1okF0CaL4pQZMb5WE6b2l-oAF0ZyGBmAgLYKt-G0AwKoFm2w-A7KtiK2h2G203iO35CYvAMhoZdcFkAtD0uE7zjebId2E2m0ikAnt9zLcAKnMxO3OwEvJGNuI1Vj7Fmqa8Mlmmph9eFU0edY8l7spUjkcAw37UJPFr2dfxdslKCWgoWNcAvdK8Pq2ztKtQYU9ctoE6E488MPxzPIem7H8qDkjrvKPnZqm4apqXENwiM3nfZhVaWmQwLQm5VDiSAMjS21_jXGfa9IWjePtpJqvA3nHs-O4tFJTuISPJtsDFDZcN2EHgG-XOOiJegQ2cZ7TGv84fb3Zuut81Jr5dBbOvm_QYMUcZcAahBT94-_qVvhPpdKdQrezl93FmgCZYZbknKdPEmqD_7S1x1Totve1VHKYtZ2D2wCiikYn2cbKtJSPfgAscJeY7BkOlbK1PlF9WIIkij9iZUDU8uxgZns65PJZUTCIHQI6izYIBUvYucXa8iL1B8_2cObXMC5aAUDLygwj_2GFpq_uWKuOqMa8f0mbx-kSnaWdSZ9Kx5_SSz8cMne2q1ITN2oaW8sTB8L710GTm29smdyW0sn36c19_WoWD6Wf9YVea-vwIhm71P-4R4xBOFZplxWow",null,null,17,null,null,null,0,"2"]', 
          'x-same-domain': '1', 
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8', 
          'sec-ch-ua-mobile': '?0', 
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36', 
          'sec-ch-ua-platform': '"Windows"', 
          'accept': '*/*', 
          'origin': 'https://translate.google.com', 
          'x-client-data': 'CIe2yQEIo7bJAQjBtskBCKmdygEI4uDKAQjq8ssBCJ75ywEI54TMAQiolcwBCM+bzAEImpzMAQjbncwBGKypygE=', 
          'sec-fetch-site': 'same-origin', 
          'sec-fetch-mode': 'cors', 
          'sec-fetch-dest': 'empty', 
          'referer': 'https://translate.google.com/', 
          'accept-language': 'es-419,es;q=0.9,fr;q=0.8', 
          'cookie': '__Secure-1PSIDCC=AJi4QfFBKlrONPcpSwVQkZ2WVlqpf4AciQ5SkAVUNHybjhmUyL9reLCTUELJcfG3t5yx0gPs7ZM; SEARCH_SAMESITE=CgQI6JQB; SID=Hgg1G9pRFayBCLy8DXPv12nOXyfd4y_l1lCdeovaLu3Oebu2aJUB4BY5mn0Y7ppybr3KzQ.; __Secure-1PSID=Hgg1G9pRFayBCLy8DXPv12nOXyfd4y_l1lCdeovaLu3Oebu2fak9nrKTHPGQ5cZC5bOPUw.; __Secure-3PSID=Hgg1G9pRFayBCLy8DXPv12nOXyfd4y_l1lCdeovaLu3Oebu2GMWLNSpqvo6eDtAcGOwgDA.; HSID=AL5mRTyaFxP15nATd; SSID=AtdW8t9wr4x1SE7P_; APISID=_FOxQ2mBnG90ezZ_/AT9d-lEurmBiPTNwS; SAPISID=xW0tukSnrwM8YiVK/AnppLe1UZCWHVd9EQ; __Secure-1PAPISID=xW0tukSnrwM8YiVK/AnppLe1UZCWHVd9EQ; __Secure-3PAPISID=xW0tukSnrwM8YiVK/AnppLe1UZCWHVd9EQ; S=billing-ui-v3=dQFuecadK3zlSWUcPYVo5DlnyYDM6Cd5:billing-ui-v3-efe=dQFuecadK3zlSWUcPYVo5DlnyYDM6Cd5; _ga=GA1.3.1877374043.1646357688; _gid=GA1.3.919847817.1646357688; OTZ=6400895_76_76__76_; NID=511=kfEzXzM-L978BkXPLqYuh49iUSkj_P7N8FvqmDLwrYAeVoITN5EqRnKTjzQYFmi4lqWtIiVkQBKkHBttY5ztmKFETL1sQbMM6Bt6nO5JoR7AAIPLDANgJtU6yicDGHsVzwEie5rtqI2pLE0RwzKLRWZyTXXDBI5FGHkIq6LvTKb0vwgxHyZZnWnulJZ1QasEMNWLIWdek_7pgp4kOL6QyF3q1Z8F_nX7bz3mwbP4OCKXc6LvmobVdQ0pqTMOm-Q7KppKU8EH5RPvGe7NxJRe8cp3qzboBIVNZhvZT9b1o0aBXCEPGC5eIKdUjEEyRIjBicRcGzTcfG44pWIbQSzsgcSBognAJv4DUoMaoV2wc5sqjupC7tvBXVCNRM8L_aQZ8doXC5_QBmTnlG-DOQ; 1P_JAR=2022-03-04-12; SIDCC=AJi4QfFHxDSqmHPfI5PcbG7JErN9kktcOeoToSSwOQ51ki11hbfamdSvLbY0U6BBeW6u1NGm0W4; __Secure-3PSIDCC=AJi4QfFc9_IhQOPzxWGD9h-749TRyWLZ0_3-W09xVSVeaDWORIJy77iT1T83lCOfAlffeOW8lUmD; SIDCC=AJi4QfGpzz_WLLwgFxeze0Dz17zCFbvBqei5exGSES39VvDS5-4-Myji4SAsSj-HcAkSOVo9mAE; __Secure-3PSIDCC=AJi4QfEcw-Wl9exzcJQBW9KD1CsdAvFkbsgS0STqtRT_IUtAxj8Nj_NFZRrDkv86u9CxOV-Z'
        },
        data : data
    };
    
    axios(config)
    .then(function (response) {
        //console.log(JSON.stringify(response.data));
        const translation = response.data.split('\"')
        //console.log(translation[10].replace('\\','').replace(',,','.'))
        const resultado = {
            'translation' : translation[10].replace('\\','').replace('@','.').replace('$','!')
        }
        res.send(resultado)
    })
    .catch(function (error) {
        console.log(error);
        const resultado = {
            'translation' : error
        }
        res.send(resultado)
    });   

    
});

const port = process.env.port || 8000;
app.listen(port,()=>console.log(`Listening in port: ${port}`))
