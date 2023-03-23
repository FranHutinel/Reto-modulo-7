import pkg from 'pg';
const {Pool} = pkg;

const pool = new Pool({
    host: 'aassaas',
    database: 'nombrebd',
    port: 5432,
    user: 'usuario',
    password: 'contrasena1',
    max: 5,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 2000,
  })
export default pool;