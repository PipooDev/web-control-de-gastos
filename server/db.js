import { createPool } from 'mysql2/promise'

export const pool = new createPool({
    host: '162.241.2.163',
    port: 3306,
    user: 'plataf81_root',
    password: 'Caramelos369',
    database: 'plataf81_palaciodb'
})