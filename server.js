const express = require('express');
const app = express();
// library is included with Express
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'Successfully retrieved users',
        users: mockUserData
    })
})

app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'Retrieved one user',
        user: req.params.id
    })
})

// login endpoint
app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'Valid username and password',
            token: 'Encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'Password and username do not match'
        })
    }
})

app.listen(8000, function(){
    console.log("Server is running")
})