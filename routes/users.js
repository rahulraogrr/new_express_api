import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

const users = [];

router.post('/',(req,res) => {
    const user = req.body;
    users.push({...user, id: uuidv4() });
    res.send(`User with first name ${user.firstName} added to database!!!`);
});

router.get('/', (req,res) => {
    res.send(users);
});

/**
 * Get user by id
 */
router.get('/:id', (req,res) => {
    console.log(req.params);
    const {id} = req.params;
    const userByID = users.find((user) => user.id === id);
    res.send(userByID);
});

export default router;