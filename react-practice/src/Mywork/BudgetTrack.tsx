import React from 'react';
type Transaction = {
  id: number;
  date: string;
  header: string;
  credit: number;
  debit: number;
};

const BudgetTrack = () => {
  const [list, setList] = React.useState<Transaction[]>([]);
  const [editingId, setEditingId] = React.useState<number | null>(null);

  const blankRow: Transaction = {
    id: Date.now(),
    date: '',
    header: "",
    credit: 0,
    debit: 0,
  };

  const [newRow, setNewRow] =
    React.useState<Transaction>(blankRow);

  // Load from localStorage
  React.useEffect(() => {
    const data = localStorage.getItem("data-budget");
    if (data) setList(JSON.parse(data));
  }, []);

  // Save to localStorage whenever list changes
  React.useEffect(() => {
    localStorage.setItem("data-budget", JSON.stringify(list));
  }, [list]);

  const addRow = () => {
    if (!newRow.date || !newRow.header) return;
    setList([...list, newRow]);
    setNewRow({ ...blankRow, id: Date.now() });
  };

  const startEdit = (id: number) => {
    setEditingId(id);
  };

  const saveEdit = (updated: Transaction) => {
    const updatedList = list.map((row:any) =>
      row.id === updated.id ? updated : row
    );
    setList(updatedList);
    setEditingId(null);
  };

  const removeRow = (id: number) => {
    setList(list.filter((item:any) => item.id !== id));
  };

  const totalCredit = list.reduce((s:any, x:any) => s + x.credit, 0);
  const totalDebit = list.reduce((s:any, x:any) => s + x.debit, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Budget Tracker</h2>
      <table>
        <tbody>
          <tr>
            <td><input
              value={newRow.date}
              placeholder="Date"
              onChange={(e) =>
                setNewRow({ ...newRow, date: e.target.value })
              }
            /></td>

            <td><input
              value={newRow.header}
              placeholder="Header"
              onChange={(e) =>
                setNewRow({ ...newRow, header: e.target.value })
              }
            /></td>

            <td><input
              type="number"
              value={newRow.credit}
              onChange={(e) =>
                setNewRow({ ...newRow, credit: Number(e.target.value), debit: 0 })
              }
            /></td>

            <td><input
              type="number"
              value={newRow.debit}
              onChange={(e) =>
                setNewRow({ ...newRow, debit: Number(e.target.value), credit: 0 })
              }
            /></td>

            <td>
              <button onClick={addRow}>ADD</button>
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      {/* Display Rows */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Header</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map((row) =>
            editingId === row.id ? (
              <EditRow key={row.id} row={row} saveEdit={saveEdit} cancel={() => setEditingId(null)} />
            ) : (
              <tr key={row.id}>
                <td>{row.date}</td>
                <td>{row.header}</td>
                <td>{row.credit}</td>
                <td>{row.debit}</td>
                <td>
                  <button onClick={() => startEdit(row.id)}>EDIT</button>
                  <button onClick={() => removeRow(row.id)}>REMOVE</button>
                </td>
              </tr>
            )
          )}
        </tbody>

        <tfoot>
          <tr>
            <th colSpan={2}>Totals</th>
            <th>{totalCredit}</th>
            <th>{totalDebit}</th>
            <th></th>
          </tr>

          <tr>
            <th colSpan={5} style={{ textAlign: "center" }}>
              Balance: {totalCredit - totalDebit}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const EditRow = ({
  row,
  saveEdit,
  cancel,
}: {
  row: Transaction;
  saveEdit: (r: Transaction) => void;
  cancel: () => void;
}) => {
  const [edit, setEdit] = React.useState<Transaction>(row);

  return (
    <tr>
      <td><input value={edit.date} onChange={(e) => setEdit({ ...edit, date: e.target.value })} /></td>
      <td><input value={edit.header} onChange={(e) => setEdit({ ...edit, header: e.target.value })} /></td>
      <td><input type="number" value={edit.credit} onChange={(e) => setEdit({ ...edit, credit: Number(e.target.value), debit: 0 })} /></td>
      <td><input type="number" value={edit.debit} onChange={(e) => setEdit({ ...edit, debit: Number(e.target.value), credit: 0 })} /></td>

      <td>
        <button onClick={() => saveEdit(edit)}>SAVE</button>
        <button onClick={cancel}>CANCEL</button>
      </td>
    </tr>
  );
};

export default BudgetTrack;
