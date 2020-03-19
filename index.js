const app = require('express')()
const bodyParser = require('body-parser')
const axios = require('axios').default;
const request = require("request");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//global elements of axio
// axios.defaults.headers.common['Authorization'] = 'xoxp-854617017029-854607499008-1013175850631-72ea9b22e6ea758941802f604652f341';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

app.post('/', (req, res) => {
    console.log("request is  ?>>> ", req.body);

    if(req.body.challenge) {
        //verification code
        res.setHeader('Content-Type', 'text/plain')
        res.status(200);
        res.send(req.body.challenge);
    } else {
        // axios({
        //     method: 'post',
        //     url: 'https://slack.com/api/chat.update',
        //     data: {
        //         token: 'xoxp-854617017029-854607499008-1011006921556-f78318cfa00fc179d774feaf2a1a85ad',
        //         channel: req.body.event.channel,
        //         ts: req.body.event.ts,
        //         text: 'Chat encrypted..'
        //     }
        //   }).then(function (response) {
        //     console.log(response);
        //   });
        request.post({url:'https://slack.com/api/chat.update', formData: {
            token: 'xoxp-854617017029-854607499008-1013698991174-ddf84b0ace301d7245f58bf770b2da5f',
            channel: req.body.event.channel,
            ts: req.body.event.ts,
            text: 'Chat encrypted..'
        }}, function optionalCallback(err, httpResponse, body) {
            console.log('Upload successful!  Server responded with:  ', err, httpResponse, body);
        });
    }
});

app.listen(3000, () => {
    console.log("serve starts...");
})