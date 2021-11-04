import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017/rockitserver";

module.exports = new MongoClient(uri);