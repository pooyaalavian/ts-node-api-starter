import { compare, hash } from 'bcrypt';

export async function hashPassword(password: string) {
  return hash(password, 10);
}

export async function comparePasswords(plainPassword: string, passwordHash: string) {
  return compare(plainPassword, passwordHash);
}
