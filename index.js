const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./src/routes/user.routes");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.connect(
    `mongodb://${IP_SERVER}:${PORT_DB}/proyect_db`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log("Success connection to db");
            app.listen(PORT_SERVER, () => {
                console.log("####################");
                console.log("##### API REST #####");
                console.log("####################");
                console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/users/user`);
            });
        }
    }
);

app.use(express.json());

app.get('/home', (req, res)=> res.send("Welcome"));

app.use("/api/v1/users", userRoute);

app.get('/', (req, res)=> res.render('index'))


/* ======================= TWILIO ============================== */

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Prueba de Twilio por Juan Sebastián Martínez Molina',
     from: '+15136438380',
     to: '+573202085014'
   })
  .then(message => console.log(message.sid));

/* ======================= TWILIO ============================== */

