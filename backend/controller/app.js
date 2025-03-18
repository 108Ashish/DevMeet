const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');

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

http://localhost:3000/check

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
