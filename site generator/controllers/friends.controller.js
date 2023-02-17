import {friends} from '../index2.js'


 export const postFriends =(req,res) =>{
    if(!req.body.name){
        return res.status(400).json({
            error:'Missing friend name'
        });
    }

    const newFriend = {
        name:req.body.name,
        id: friends.length
    };
    friends.push(newFriend)

    res.json(newFriend);
}

export const getFriends = (req,res) =>{
    res.json(friends)
}

export const getFriend =(req,res) =>{
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId]
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error:"Friend does not exist"
        });
    }
}