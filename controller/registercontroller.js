const register = require('../modals/student');
const db = require('../db');


const work = async(req,res,next)=>{
    try {
        const data = req.body;
        const student = await db.collection('students').doc().set(data);
        res.send('record saved successfull');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = work;