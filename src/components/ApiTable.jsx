export default function ApiTable({ data }) {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>API Name</th>
            <th>Time</th>
            <th>Status</th>
            <th>Response Time (ms)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.apiName}</td>
              <td>{row.time}</td>
              <td className={row.status === 'Success' ? 'status-success' : 'status-fail'}>
                {row.status}
              </td>
              <td>{row.responseTimeMs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
