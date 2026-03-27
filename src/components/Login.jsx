import { useState } from 'react';

function Login({ isRegisterMode, onToggleMode, onSubmit, loading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <div className="card">
      <h1>{isRegisterMode ? 'Cadastro' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Processando...' : isRegisterMode ? 'Cadastrar' : 'Entrar'}
        </button>
      </form>

      <button type="button" className="link-button" onClick={onToggleMode} disabled={loading}>
        {isRegisterMode ? 'Já tem conta? Faça login' : 'Não tem conta? Cadastre-se'}
      </button>
    </div>
  );
}

export default Login;
