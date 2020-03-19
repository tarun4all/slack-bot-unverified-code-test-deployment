const app = require('express')()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
    print("request is  ?>>> ", req.body);
    res.setHeader('Content-Type', 'text/plain')
    res.status(200);
    res.send(req.body.challenge);
});

app.listen(3000, () => {
    console.log("serve starts...");
})