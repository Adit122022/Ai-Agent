 import mongoose from 'mongoose';
import config from '../config/config.js';

 
 const connect = () => {
     mongoose.connect(config.MONGO_URI) // 0.0.0.0 for localhost, DatabaseName is the name of the database
         .then(() => console.log('🐰🐼🐼MongoDB Connected...✅✅✅ ... 🐼🐼🐰'))
         .catch(err => console.log(err));
 }
 
 export default connect;