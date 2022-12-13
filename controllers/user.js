import { conn } from "../db.js"

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";
    
    conn.query(q, (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            return res.status(200).json(data)
        }
    })
}