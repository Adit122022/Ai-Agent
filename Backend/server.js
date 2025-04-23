
import app from './src/app.js'
import config from "./src/config/config.js";
import connect from './src/db/db.js';
const PORT =config.PORT
connect();
import client from './src/MCP/client.mcp.js'

app.listen(PORT, () => {
    console.log('Server is running on port -->' , PORT  ,"✅✅✅");  // Server is listening on port 3000
});