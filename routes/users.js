import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Rahul Rao",
        lastName: "Gonda",
        city: "Paisley",
        country: "United kingdom"
    }
];

router.get('/', (req,res) => {
    res.send(users);
});

export default router;