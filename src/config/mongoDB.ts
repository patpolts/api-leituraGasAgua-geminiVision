import mongoose from 'mongoose';
import { enviroments } from './enviroments';

const connection =  mongoose.connect(enviroments.mongoURI, {})

export { connection }