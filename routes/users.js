import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

let users = [];

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
    const {id} = req.params;
    const userByID = users.find((user) => user.id === id);
    res.send(userByID);
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} deleted from database!!!`);
});



export default router;