const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//global elements of axio
axios.defaults.headers.common['Authorization'] = 'xoxp-854617017029-854607499008-1013175850631-72ea9b22e6ea758941802f604652f341';
axios.defaults.headers.post['Content-Type'] = 'application/json';

app.post('/', (req, res) => {
    console.log("request is  ?>>> ", req.body);

    if(req.body.challenge) {
        //verification code
        res.setHeader('Content-Type', 'text/plain')
        res.status(200);
        res.send(req.body.challenge);
    } else {
        axios({
            method: 'post',
            url: 'https://slack.com/api/chat.delete',
            data: {
                channel: req.body.event.channel,
                ts: req.body.event.ts
            }
          }).then(function (response) {
            console.log(response);
          });
        // request.post({url:'http://service.com/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
        //     if (err) {
        //         return console.error('upload failed:', err);
        //     }
        //     console.log('Upload successful!  Server responded with:', body);
        // });
    }
});

app.listen(3000, () => {
    console.log("serve starts...");
})