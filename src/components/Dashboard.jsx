import Profile from './Profile';
import ApiTable from './ApiTable';

export default function Dashboard({ user, apiData }) {
  const total = apiData.length;
  const success = apiData.filter((r) => r.status === 'Success').length;
  const avgResponse =
    total > 0
      ? Math.round(apiData.reduce((s, r) => s + r.responseTimeMs, 0) / total)
      : 0;
  const successRate = total > 0 ? Math.round((success / total) * 100) : 0;

  return (
    <div className="dashboard container">
      <h1>Welcome, {user.name.split(' ')[0]}!</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Calls</span>
          <span className="stat-value">{total}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Success Rate</span>
          <span className="stat-value">{successRate}%</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Avg Response</span>
          <span className="stat-value">{avgResponse} ms</span>
        </div>
      </div>

      <Profile user={user} />
      <h2>Recent API Usage</h2>
      <ApiTable data={apiData} />
    </div>
  );
}
