import express from 'express';
import { createUser, getUsers, 
    getUserById, deleteUserById, modifyUserById } from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);
router.patch('/:id', modifyUserById);

export default router;