import mongoose from "mongoose";
// import cryptoJs from "crypto-js";
// import config from "../config/config";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    refreshToken: {
        type: String,
        default: null
    }
})


// userSchema.post('save', async function (next) {
//     if (this.refreshToken && this.refreshToken.isModified()) {
//         this.refreshToken = cryptoJs.AES.encrypt(this.refreshToken, config.SECRET_KEY).toString();
//         await this.save();
//     }
//     next();
// })

const userModel = mongoose.model('user', userSchema);

export default userModel;