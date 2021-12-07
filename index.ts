import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

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
.catch( ()  =>  {
    console.log("Error")
})
.finally(() =>  {
    client.end()
})