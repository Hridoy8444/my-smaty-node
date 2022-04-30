const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3300;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello i am in  Here');
});
const users =[
    {id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01788888888'},
    {id: 2, name: 'suconda', email: 'suconda@gmail.com', phone: '01788888888'},
    {id: 3, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01788888888'},
    {id: 4, name: 'sucorita', email: 'sucorita@gmail.com', phone: '01788888888'},
    {id: 5, name: 'sabila', email: 'sabila@gmail.com', phone: '01788888888'},
    {id: 6, name: 'srabonti', email: 'srabonti@gmail.com', phone: '01788888888'},
    {id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '01788888888'},
]

app.get('/users', (req, res) => {
    console.log('Query', req.query)
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
} );

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.listen(port, () => {
    console.log('Listing to port', port);
});