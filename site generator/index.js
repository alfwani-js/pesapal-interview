import express from 'express';

import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';
import adminRoutes from './routes/admin.js';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.use('/admin', adminRoutes);

app.get('/', (req,res) =>{
    console.log('[TEST]!')
    res.send('Hello from Homepage');
})
app.get('/ian', (req,res)=>{
    console.log("my trial developer")
    res.send('halelluhya ')
})

app.listen(PORT, () => console.log(`server Running on port : http://localhost:${PORT}`))
 