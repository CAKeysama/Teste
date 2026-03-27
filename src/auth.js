import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from './firebase';

export const loginWithEmail = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log('Login realizado');
  return response.user;
};

export const registerWithEmail = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log('Cadastro realizado');
  return response.user;
};

export const logoutUser = async () => {
  await signOut(auth);
  console.log('Logout realizado');
};
