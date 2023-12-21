// DEPENDENCIES
const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)
// const sequelize = new Sequelize('music_tour', 'postgres', 'admin', {
//     host: 'localhost',
//     port: 5432,
//     dialect: 'postgres',
//  });

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     if (err instanceof sequelizeErrors.HostNotFoundError) {
//       console.error('Host not found:', err);
//       // Handle the HostNotFoundError or reject with it
//       // For example, you might want to reject a Promise with this error
//       return Promise.reject(new sequelizeErrors.HostNotFoundError(err));
//     } else {
//       console.error('Unable to connect to the database:', err);
//     }
// }

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})