const {Client} = require("pg")
const client = new Client({
    user:'postgres',
    password:'admin',
    host:'labenu', 
    port:'5432',
    database:'cacilhas'
})

client.connect()
.then(  ()  => {
    console.log('Connected')
})
.then(  ()  =>{
    client.query('insert into clients values ($1,$2)',[101,'John']) 
})
.then(  ()  =>  {
    client.query('select * from clients')
})
.then(  (results)   =>  {
    console.table(results.rows)
})
.catch( (e)  =>  {
    console.log("Error:", e)
})
.finally(() =>  {
    client.end()
})