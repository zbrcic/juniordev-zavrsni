
function Sidebar1({ filters, handleFilterChange }) {
  return (
    <div className="sidebar1">
      <h3>Radionice:</h3>
      <label>
        <input type="checkbox" name="react" checked={filters.react} onChange={handleFilterChange} />
        React
      </label>
      <label>
        <input type="checkbox" name="express" checked={filters.express} onChange={handleFilterChange} />
        Express
      </label>
      <label>
        <input type="checkbox" name="php" checked={filters.php} onChange={handleFilterChange} />
        PHP
      </label>
      <label>
        <input type="checkbox" name="net" checked={filters.net} onChange={handleFilterChange} />
        .NET
      </label>
    </div>
  );
}
export default Sidebar1;