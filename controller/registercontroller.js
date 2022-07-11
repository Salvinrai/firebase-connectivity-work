const register = require('../modals/student');
const db = require('../db');


const work = async(req,res,next)=>{
    try {
       const data =  class Student {
            constructor(id , firstName , lastName){
                this.id=id;
                this.firstName = firstName;
                this.lastName = lastName;
            };
        };

        
        console.log(data);
        const student = await db.collection('students').doc('register').set(data);
        res.send('record saved successfull');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = work;