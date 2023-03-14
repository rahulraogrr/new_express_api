import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

const users = [];

router.post('/',(req,res) => {
    const user = req.body;
    users.push({...user, id: uuidv4() });
    res.send(`User with first name ${req.body.firstName} added to database!!!`);
});

router.get('/', (req,res) => {
    res.send(users);
});

export default router;