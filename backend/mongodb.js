import { createConnection } from 'mongoose';
import 'dotenv/config';

const db = createConnection(process.env.MONGO_URI, {
  maxPoolSize: 10,
  dbName: 'fakeproductstorage',
});

db.on('connected', () => {
  console.log('Database connection established');
});

db.on('error', (err) => {
  console.error('Database connection error:', err);
});

export default db;