const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authRouter = require('./routes/auth');
const publicRoutes = require('./routes/public');

const app = express();

app.use(express.json());

const prisma = new PrismaClient();

app.get('/check', (req, res) => {
    const { email } = req.body;
    const user = prisma.user.create({
        data: {
            name: 'Ashish Singh',
            email,
            password: '123456',
        },
    })
    res.send(user);
});

app.use('/auth', authRouter);
app.use('/public', publicRoutes)

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
