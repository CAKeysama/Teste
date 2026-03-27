function Dashboard({ user, onLogout, loading }) {
  return (
    <div className="card">
      <h1>Área Privada</h1>
      <p>Usuário logado: {user?.email}</p>
      <button type="button" onClick={onLogout} disabled={loading}>
        {loading ? 'Saindo...' : 'Logout'}
      </button>
    </div>
  );
}

export default Dashboard;
