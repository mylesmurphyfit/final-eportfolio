/**
 * Card table component for displaying a table in a card.
 * Includes the columns and rows.
 */
function CardTable({ columns = [], rows = [] }) {
  // Dynamically generate the table header and body
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.id ?? rowIndex}>
              {columns.map((column) => (
                <td key={`${row.id ?? rowIndex}-${column.key}`}>
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CardTable
