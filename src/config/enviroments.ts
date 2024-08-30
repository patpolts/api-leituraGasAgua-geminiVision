require('dotenv').config({
    allowEmptyValues: true
});

const enviroments:any = {
    port: process.env.PORT,
    mongoURI: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mongodb:27017/mydatabase?authSource=admin`,
    appURI: process.env.APP_URI,
    apiKey: process.env.API_KEY
}

export {enviroments};