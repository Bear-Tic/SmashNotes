
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const serviceAccount = require("./permissions.json");
const app = express();

app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to Smash API!');
});

// API CRUD

// create character

// app.post('/api/create', (req, res) => {
//   (async () => {
//       try {
//         await db.collection('characters').doc('/' + req.body.id + '/')
//             .create({name: req.body.name});
//         return res.status(200).send();
//       } catch (error) {
//         console.log(error);
//         return res.status(500).send(error);
//       }
//     })();
// });

// read characters
app.get('/api/characters', (req, res) => {
  (async () => {
      try {
          let query = db.collection('characters');
          let response = [];
          await query.get().then(querySnapshot => {
          let docs = querySnapshot.docs;
          for (let doc of docs) {
              console.log(doc.data());
              const selectedCharacter = {
                  id: doc.id,
                  data: doc.data()
              };
              response.push(selectedCharacter);
          }
          return;
          });
          return res.status(200).send(response);
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
      })();
});

// read character
app.get('/api/characters/:character_id', (req, res) => {
  (async () => {
      try {
          const document = db.collection('characters').doc(req.params.character_id);
          let character = await document.get();
          let response = character.data();
          return res.status(200).send(response);
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
      })();
});

// update character
app.put('/api/update/:character_id', (req, res) => {
(async () => {
  try {
      const document = db.collection('characters').doc(req.params.character_id);
      await document.update({
          character: req.body.character
      });
      return res.status(200).send();
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
  }
  })();
});

// delete character
app.delete('/api/delete/:character_id', (req, res) => {
(async () => {
  try {
      const document = db.collection('characters').doc(req.params.character_id);
      await document.delete();
      return res.status(200).send();
  } catch (error) {
      console.log(error);
      return res.status(500).send(error);
  }
  })();
});

// USERS
// TODO ALL

// read users
app.get('/api/users', (req, res) => {
  (async () => {
      try {
          let query = db.collection('users');
          let response = [];
          await query.get().then(querySnapshot => {
          let docs = querySnapshot.docs;
          for (let doc of docs) {
              console.log(doc.data());
              const selectedUser = {
                  id: doc.id,
                  data: doc.data()
              };
              response.push(selectedUser);
          }
          return;
          });
          return res.status(200).send(response);
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
      })();
});


// read user
app.get('/api/users/:user_id', (req, res) => {
  (async () => {
      try {
          const document = db.collection('users').doc(req.params.user_id);
          let user = await document.get();
          let response = user.data();
          return res.status(200).send(response);
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
      })();
});

// Create user

app.post('/api/create/user', (req, res) => {
  (async () => {
      try {
        await db.collection('users').doc('/' + req.body.id + '/')
            .create({
              id: req.body.id,
              mail: req.body.mail,
            });
        return res.status(200).send();
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
});


exports.app = functions.https.onRequest(app);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://smashnotes-b07e9.firebaseio.com"
});

const db = admin.firestore();
