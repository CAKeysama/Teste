import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC157tDEGXEau7_3zlmBiYFyrvFN5RxuXc',
  authDomain: 'bd1todolist2.firebaseapp.com',
  projectId: 'bd1todolist2',
  storageBucket: 'bd1todolist2.firebasestorage.app',
  messagingSenderId: '772126284296',
  appId: '1:772126284296:web:396d7555b336fb4af14fbd'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error('Erro ao configurar persistência:', error);
});

export { auth };
