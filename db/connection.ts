import { createConnection, ConnectionOptions } from 'typeorm';

const dbConfig: ConnectionOptions = {
  type: 'postgres', // or whatever database you are using
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database',
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  synchronize: true, // set to false in production
};

export const connectToDatabase = async () => {
  try {
    await createConnection(dbConfig);
    console.log('Database connection established');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the application if the database connection fails
  }
};
