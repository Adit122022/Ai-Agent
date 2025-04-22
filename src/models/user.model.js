import mongoose from "mongoose";
import cryptoJs from "crypto-js";
import config from "../config/config";


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
    token: {
        type: String,
        default: null
    }
})


userSchema.post('save', async function (next) {
    if (this.token && this.token.isModified()) {
        this.token = cryptoJs.AES.encrypt(this.token, config.SECRET_KEY).toString();
        await this.save();
    }
    next();
})

const userModel = mongoose.model('user', userSchema);

export default userModel;