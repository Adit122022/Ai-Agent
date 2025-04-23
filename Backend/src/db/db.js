 import mongoose from 'mongoose';
import config from '../config/config.js';

 
 const connect = () => {
     mongoose.connect(config.MONGO_URI) 
         .then(() => console.log('🐰🐼🐼MongoDB Connected...✅✅✅ ... 🐼🐼🐰'))
         .catch(err => console.log(err));
 }
 
 export default connect;