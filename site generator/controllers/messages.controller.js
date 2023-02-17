//const path = require('path')
import path from 'path';
 // /folder/files.jpg 

export const getMessages = (req,res) =>{
    console.log('ian is my developer')
    //res.send('it is what it is')
    const pic = path.resolve('./public', 'skimountain.jpg');
    res.sendFile(pic)

}

export const postMessages =(req,res) =>{
    console.log('updating messages .....')
    res.send('updating messages')
    
}

