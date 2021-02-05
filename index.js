const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
const port = 3000;
 
app.use(bodyParser.urlencoded({extended:true}));

const userList = [
 {
 id: 1,
 name: 'user1',
 ssn: 1234,
 address: 'b12, akg nagar',
 hobbies: 'football, cricket',
 },
 {
 id: 2,
 name: 'user2',
 ssn: 1235,
 address: 'b13, akg nagar',
 hobbies: 'football, cricket',
 },
 {
 id: 3,
 name: 'user3',
 ssn: 1236,
 address: 'b14, akg nagar',
 hobbies: 'football, cricket',
 },
 {
 id: 4,
 name: 'user4',
 ssn: 1237,
 address: 'b15, akg nagar',
 hobbies: 'football, cricket',
 },
];
 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
 
app.get('/users', (req, res) => {
    res.json(userList);
});

app.get('/users/:id', (req, res) => {
    res.json(userList.find((item) => item.id == req.params.id));
});

app.post('/users', (req, res) => {
    const userData = req.body;

    console.log(userData);
    userList.push(userData);

    res.send('User is added');
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    userList.pop(id);
    res.send('User is deleted');
});

app.post('/users/update', (req, res) => {
    let user = userList.find((item) => item.id == req.body.id);
    userList[userList.indexOf(user)] = req.body;
    res.send("User Data Updated");
});
 
app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
});