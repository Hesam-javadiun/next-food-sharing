import db from './../db';

export function getUserByEmail(email : string) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email)
}