const {Client} = require("pg")
const client = new Client({
    user:'postgres',
    password:'admin',
    host:'labenu', 
    port:'5432',
    database:'cacilhas'
})

async function execute() {
    await client.connect()
    console.log("Connected")
    const results =  await client.query('select * from clients')
    console.table(results.rows)

    await client.end()
    console.log("disconnected")

}

execute()