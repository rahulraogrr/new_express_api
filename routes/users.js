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

router.patch('/:id', (req,res) => {
    const {id} = req.params;
    const {firstName,lastName,city,country} = req.body;
    const userToBeUpdated = users.find((user) => user.id === id);

    if(firstName){
        userToBeUpdated.firstName = firstName;
    }

    if(lastName){
        userToBeUpdated.lastName = lastName;
    }

    if(city){
        userToBeUpdated.city = city;
    }

    if(country){
        userToBeUpdated.country = country;
    }
    
    res.send(`User with id ${id} modified from database!!!`);
});

export default router;