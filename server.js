const app = require('./src/app');
// const connect = require('./src/db/db');

// connect();

app.listen(PORT, () => {
    console.log('Server is running on port' , PORT);  // Server is listening on port 3000
});