import express from 'express';


import {postMessages,getMessages} from '../controllers/messages.controller.js';


export const messagesRouter =express.Router();

messagesRouter.get('/', getMessages)

messagesRouter.post('/', postMessages)