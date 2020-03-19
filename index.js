const app = require('express')()

app.get('/', (req, res) => {
    console.log("done");
    res.send('Hello World !! Golsinc');
});

app.listen(443, () => {
    console.log("serve starts...");
})