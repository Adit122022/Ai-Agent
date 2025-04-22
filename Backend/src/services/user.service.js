import userModel from "../models/user.model";

class _UserService {

    userModel;

    constructor() {
        this.userModel = userModel;
    }

    /**
     * @description Create a new user
     * @param {string} name
     * @param {string} email
     * @param {string} token
     * @returns {Promise<userModel>}
     * 
     * @throws {Error} If any of the required fields are missing
     * @description If the user already exists, it will return the existing user
     * @description If the user does not exist, it will create a new user
     */
    async createUser({ name, email, token }) {

        if (!name || !email || !token) {
            throw new Error("Missing required fields");
        }

        const isUserExists = await this.userModel.findOne({ email });

        if (isUserExists) {
            return isUserExists
        }

        const user = new this.userModel({ name, email, token });
        await user.save();
        return user;
    }
}


const userService = new _UserService();
export default userService;