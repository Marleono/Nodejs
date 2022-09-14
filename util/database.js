const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://User1:yWNbjRzpF3ANbCv4@cluster0.oplkx8p.mongodb.net/?retryWrites=true&w=majority')
    .then(client => {
        console.log('connected!')
        callback(client)
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = mongoConnect;
