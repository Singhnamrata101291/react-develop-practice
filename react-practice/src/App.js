
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransaction,
  updateTransaction,
  removeTransaction,
  clearAll,
  selectList,
  selectTotals,
} from './feature/statementSlice';
import EditRow from './Mywork/EditRow';
import './index.css';

export default function App() {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const totals = useSelector(selectTotals);

  const blankRow = {
    id: Date.now(),
    date: '',
    header: '',
    credit: 0,
    debit: 0,
  };

  const [newRow, setNewRow] = React.useState({ ...blankRow });
  // Tracks which amount field is enabled for the "Add" row: 'credit' | 'debit' | null
  const [addActiveField, setAddActiveField] = React.useState(null);
  const [editingId, setEditingId] = React.useState(null);

  const addRow = () => {
    if (!newRow.date.trim() || !newRow.header.trim()) return;
    dispatch(addTransaction(newRow));
    setNewRow({ ...blankRow, id: Date.now() });
    setAddActiveField(null);
  };

  const startEdit = (id) => setEditingId(id);

  const saveEdit = (updated) => {
    dispatch(updateTransaction(updated));
    setEditingId(null);
  };

  const removeRow = (id) => dispatch(removeTransaction(id));

  const clearAllRows = () => dispatch(clearAll());

  // Handlers for mutually exclusive Credit/Debit on Add row
  const onFocusCreditAdd = () => {
    setAddActiveField('credit');
    // clear the other field when switching
    setNewRow((r) => ({ ...r, debit: 0 }));
  };
  const onFocusDebitAdd = () => {
    setAddActiveField('debit');
    setNewRow((r) => ({ ...r, credit: 0 }));
  };

  const onChangeCreditAdd = (e) => {
    const val = Number(e.target.value || 0);
    setNewRow((r) => ({ ...r, credit: val, debit: 0 }));
    if (addActiveField !== 'credit') setAddActiveField('credit');
  };

  const onChangeDebitAdd = (e) => {
    const val = Number(e.target.value || 0);
    setNewRow((r) => ({ ...r, debit: val, credit: 0 }));
    if (addActiveField !== 'debit') setAddActiveField('debit');
  };

  return (
    <div className="container">
      <h2>Dynamic Statement Management — Redux Toolkit (CRA / JS)</h2>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 6 }}>
        <button className="secondary" onClick={clearAllRows} disabled={list.length === 0}>
          Clear All
        </button>
      </div>

      {/* Main Table */}
      <table>
        <thead>
          {/* Column headers */}
          <tr>
            <th style={{ width: '20%' }}>Date</th>
            <th style={{ width: '40%' }}>Header</th>
            <th style={{ width: '15%' }}>Credit</th>
            <th style={{ width: '15%' }}>Debit</th>
            <th style={{ width: '10%' }}>Action</th>
          </tr>

          {/* Add row INSIDE HEADERS */}
          <tr>
            <th>
              <input
                type="text"
                value={newRow.date}
                placeholder="Date"
                onChange={(e) => setNewRow({ ...newRow, date: e.target.value })}
              />
            </th>
            <th>
              <input
                type="text"
                value={newRow.header}
                placeholder="Header"
                onChange={(e) => setNewRow({ ...newRow, header: e.target.value })}
              />
            </th>
            <th>
              <input
                type="number"
                value={newRow.credit}
                onFocus={onFocusCreditAdd}
                onChange={onChangeCreditAdd}
                disabled={addActiveField === 'debit'}
              />
            </th>
            <th>
              <input
                type="number"
                value={newRow.debit}
                onFocus={onFocusDebitAdd}
                onChange={onChangeDebitAdd}
                disabled={addActiveField === 'credit'}
              />
            </th>
            <th>
              <button onClick={addRow} disabled={!newRow.date || !newRow.header}>
                ADD
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {list.map((row) =>
            editingId === row.id ? (
              <EditRow
                key={row.id}
                row={row}
                onSave={saveEdit}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <tr key={row.id}>
                <td>{row.date}</td>
                <td>{row.header}</td>
                <td>{row.credit}</td>
                <td>{row.debit}</td>
                <td className="row-actions">
                  <button className="secondary" onClick={() => startEdit(row.id)}>
                    EDIT
                  </button>
                  <button className="danger" onClick={() => removeRow(row.id)}>
                    REMOVE
                  </button>
                </td>
              </tr>
            )
          )}
          {list.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', color: '#666' }}>
                No records yet. Add your first row above.
              </td>
            </tr>
          )}
        </tbody>

        <tfoot>
          <tr>
            <th colSpan={2}>Totals</th>
            <th>{totals.credit}</th>
            <th>{totals.debit}</th>
            <th></th>
          </tr>
          <tr>
            <th colSpan={5} style={{ textAlign: 'center' }}>
              Balance: {totals.balance}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
