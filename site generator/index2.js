import express from 'express';
import path from 'path'





import { friendsRouter }  from './routes/friends.router.js'

import {messagesRouter} from './routes/messages.router.js'

const app = express();
const PORT = 3000;

export const friends = [
    {
        id:0,
        name:"Developer Ian Alfwani"
    },
    {
        id:1,
        name:"software geek makale"
    }
]

app.use((req, res, next)=>{
    const start = Date.now();
    
    next();
    //actions go here ...
    const delta = Date.now()-start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} ms`)
})

app.use(express.json());
//app.use('/site',express.static(path.join(__filename,'public'))); 
app.use('/site',express.static('public')); 

//const friendsRouter = express.Router();


//friendsRouter.post('/', postFriends)

app.get('/' , (req,res)=>{
    res.send('heeeeellllooo')

})
//friendsRouter.get('/', getFriends)

//friendsRouter.get('/:friendId', getFriend)




app.use('/friends',friendsRouter)
app.use('/messages',messagesRouter)
app.listen(PORT, () =>{
    console.log(`i the server am listening on port ${PORT}...`)
})

