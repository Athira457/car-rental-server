// user repository file handles Queries into database

import pool from '../../../config/DBconnect/db.js';
import bcrypt from 'bcrypt';

class UserRepository {
  // Fetch all users from the database
  async getAllUsers() {
      const result = await pool.query('SELECT * FROM users');
      return result.rows;
  }

  // Insert a new user into the database
  async createUser(name, email, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, hashedPassword]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}

export default new UserRepository();
