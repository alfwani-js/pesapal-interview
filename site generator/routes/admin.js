import express from 'express';
import {v4 as uuidv4} from 'uuid';


const app = express();



const admin = [
    {
        name:"ian_alfwani",
        age:45,
        career:"manager"
    },
    {
        name:"kelvin",
        age:37,
        career:"technician"
    }
];

const router = express.Router();

router.use((req,res,next) =>{
    const start = Date.now();

    next();
    const delta = Date.now()-start;

    console.log(`${req.method} ${req.url} ${delta} ms from ian the developer`)
})



router.use((req, res, next) =>{
    const start = Date.now()
    next()
    const delta = Date.now() - start;
    console.log("i am the third one")
    next()
})


router.get('/',(req,res) => {
    res.send("ian you are doing this my Guy")
})

router.get('/admins',(req,res) =>{
    res.send(admin)
})
router.get('/:career', (req,res) =>{
    const {career} = req.params;
    const foundUser = admin.find((user) => user.career === career);
    res.send(foundUser)


})
router.get('/:name',(req,res)=>{
    const {name} =req.params;
    const foundUser = admin.find((user) => user.name === name);
    res.send(foundUser)
})


router.post('/',(req,res) =>{
    console.log('post Route Reached')
    const user = req.body;
    //const userId = uuidv4(); 
    const userWithId = { ...user, id:uuidv4()}
 
    users.push(userWithId)
    
    res.send(`user with the name ${user.firstname} has been added`) 

})


export default router;