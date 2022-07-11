const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const config = require('./config');
const register = require('./modals/student');
//const firebase = require('firebase/firestore');
//const firestore = firebase.getFirestore();
//const work1 = require('./controller/registercontroller');
const path = require('path');

// const register = require('../modals/student');
const db = require('./db');
const main_path =path.join(__dirname,'/html');
console.log(main_path);

const app = express();
const http = require('http').createServer(app)
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());




//app.listen(config.port, () => console.log('App is listening on url local host :' +config.port));
//---------------------------port local host--------------------
const PORT = process.env.PORT || 4000;
//---------------------------

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/html/index.html'))
});

app.post('/register', async(req,res)=>{
    try {
        const data =  req.body;
        var test = req.body.id;
        console.log(test);
         console.log(data);
         const student = await db.collection('students').doc('register').set(data);
         res.send('record saved successfull');
     } catch (error) {
         res.status(400).send(error.message);
     }
});
