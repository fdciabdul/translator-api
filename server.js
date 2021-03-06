const express = require('express')
const _ = require('lodash');
const request = require('request-promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json())
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/api/translate', (req,res) => {
    

    console.log(req.body);
    const url = "https://translate.google.com/translate_a/single"
    + "?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=" + req.body.out + "&ie=UTF-8"
    + "&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e";

    const data = {
        'sl': req.body.in,
        'tl': req.body.out,
        'q': req.body.text,
    };

    request({
        method: 'POST',
        uri: url,
        encoding: 'UTF-8',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'User-Agent': 'AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1',
        },
        form: data,
        json: true,
    })
    .then((data) => {
        console.log(data);
      return res.json({translation: data.sentences[0].trans})
    })

})
app.listen(port, () => {
  console.log(`Translation app listening on port ${port}`)
})
