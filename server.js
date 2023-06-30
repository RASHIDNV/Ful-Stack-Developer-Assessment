const express = require("express");

// Initialize express
const app = express();
const PORT = 8080;
// parse JSON
app.use(express.json());
// parse URL encoded data
app.use(express.urlencoded({ extended: true }));
// create a server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`); 

let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);

console.log("7" > 7);
console.log("2">"21");
console.log("KL">"S");

function average(a, b) {
  return (a + b) / 2;
  }
var result = average(2, 1);
console.log(result);

});


// Code for Problem Statement 1
app.get("/1", (req, res) => {
  var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

function findDuplicates(arr1, arr2) {
  var duplicatesAndSameValues = [];

  arr1.forEach(word => {
    if (arr2.includes(word)) {
      duplicatesAndSameValues.push(word);
    }
  });

  return duplicatesAndSameValues;
}

var result = findDuplicates(fullWordList, wordsToRemove);
// console.log(result);

// console.log(longestChainLength);
return res.status(200).json({
  status: 200,
  message: result,
});
 });
 
// Code for Problem Statement 2
app.get("/2", (req, res) => {
  const word = '00000111110101001111100001001';
const wordArray = word.split('');

let currentChainLength = 0;
let longestChainLength = 0;

wordArray.forEach(char => {
  if (char === '1') {
    currentChainLength++;
    if (currentChainLength > longestChainLength) {
      longestChainLength = currentChainLength;
    }
  } else {
    currentChainLength = 0;
  }
});

// console.log(longestChainLength);
return res.status(200).json({
  status: 200,
  message: longestChainLength,
});
 });

 // Code for Problem Statement 3
 app.get("/3", (req, res) => {
  let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);
// return res.status(200).json({
//   status: 200,
//   message: obj1,
// });
 });

 // Code for Problem Statement 4
 app.get("/4", (req, res) => {
  console.log("7" > 7);
console.log("2">"21");
console.log("KL">"S");
// return res.status(200).json({
//   status: 200,
//   message: obj1,
// });
 });

 // Code for Problem Statement 5
 app.get("/5", (req, res) => {
  function average(a, b) {
    return (a + b) / 2;
    }
  var result = average(2, 1);
  console.log(result);
// return res.status(200).json({
//   status: 200,
//   message: result,
// });
 });
  
// Code for Problem Statement 6.1
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure Passport to use a local strategy
passport.use(
  new LocalStrategy((username, password, done) => {
    // Implement your own logic to authenticate the user
    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      if (!user.verifyPassword(password)) return done(null, false);

      return done(null, user);
    });
  })
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// In your routes, you can use the passport.authenticate() middleware
app.post('/login', passport.authenticate('local'), (req, res) => {
  // Handle successful authentication
});

// Code for Problem Statement 6.2
const jwt = require('jsonwebtoken');

// Middleware function to validate token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

// Usage of the middleware
app.get('/protected-route', authenticateToken, (req, res) => {
  // This route is protected and requires a valid token
});

// Code for Problem Statement 6.3
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2 rejected');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 1500);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Output: ['Promise 1 resolved', 'Promise 2 rejected', 'Promise 3 resolved']
  })
  .catch((error) => {
    console.error(error); // Output: 'Promise 2 rejected'
  });
  


  // Code for Problem Statement 6.6
  const http = require('http');
const socketIO = require('socket.io');
// const express = require('express');
const ap = express();

const server = http.createServer(ap);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.emit('message', 'Hello from the server');

  socket.on('clientMessage', (data) => {
    console.log('Received message from client:', data);
  });
});

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, index: true },
  createdAt: { type: Date, index: true }
});

const User = mongoose.model('User', userSchema);



 
  
  