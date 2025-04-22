import app from './src/app.js'
import config from "./src/config/config.js";
const PORT =config.PORT

app.listen(PORT, () => {
    console.log('Server is running on port' , PORT);  // Server is listening on port 3000
});