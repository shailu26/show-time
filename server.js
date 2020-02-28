const app = require('./application');
const port = process.env.NODE_ENV === 'development' ? 5002 : 4000;
const server = app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
module.exports = server