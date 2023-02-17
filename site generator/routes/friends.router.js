import express from 'express';
import { getFriends, postFriends, getFriend } from '../controllers/friends.controller.js';

export const friendsRouter = express.Router();

friendsRouter.use((req,res,next) =>{
    console.log(`ip address:`, req.ip);
    next()
})

friendsRouter.get('/', getFriends)

friendsRouter.get('/:friendId', getFriend)

friendsRouter.post('/', postFriends)

//module.exports = friendsRouter;