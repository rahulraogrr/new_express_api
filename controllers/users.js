import {v4 as uuidv4} from 'uuid';

let users = [];

export const createUser = (req,res) => {
    const user = req.body;
    users.push({...user, id: uuidv4() });
    res.send(`User with first name ${user.firstName} added to database!!!`);
};

export const getUsers = (req,res) => {
    res.send(users);
};

export const getUserById = (req,res) => {
    const {id} = req.params;
    const userByID = users.find((user) => user.id === id);
    res.send(userByID);
};

export const deleteUserById = (req,res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} deleted from database!!!`);
};

export const modifyUserById = (req,res) => {
    const {id} = req.params;
    const {firstName,lastName,city,country} = req.body;
    const userToBeUpdated = users.find((user) => user.id === id);

    if(firstName) userToBeUpdated.firstName = firstName;
    if(lastName) userToBeUpdated.lastName = lastName;
    if(city) userToBeUpdated.city = city;
    if(country) userToBeUpdated.country = country;
    
    res.send(`User with id ${id} modified from database!!!`);
};