import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { loginWithEmail, logoutUser, registerWithEmail } from './auth';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Usuário autenticado detectado');
      } else {
        console.log('Usuário não autenticado');
      }

      setCurrentUser(user);
      setAuthChecking(false);
    });

    return unsubscribe;
  }, []);

  const handleAuthSubmit = async (email, password) => {
    setLoading(true);
    try {
      if (isRegisterMode) {
        await registerWithEmail(email, password);
      } else {
        await loginWithEmail(email, password);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logoutUser();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (authChecking) {
    return (
      <main className="container">
        <div className="card">
          <p>Carregando sessão...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      {currentUser ? (
        <Dashboard user={currentUser} onLogout={handleLogout} loading={loading} />
      ) : (
        <Login
          isRegisterMode={isRegisterMode}
          onToggleMode={() => setIsRegisterMode((prev) => !prev)}
          onSubmit={handleAuthSubmit}
          loading={loading}
        />
      )}
    </main>
  );
}

export default App;
