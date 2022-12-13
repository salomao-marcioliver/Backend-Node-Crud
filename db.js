import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

export const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASS_DB,
    database: process.env.NAME_DB
})

