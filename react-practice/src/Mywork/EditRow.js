
import React from 'react';

export default function EditRow({ row, onSave, onCancel }) {
  const [edit, setEdit] = React.useState(row);
  // Track which amount field is enabled for this edit row
  const [activeField, setActiveField] = React.useState(() => {
    if ((row.credit || 0) > 0) return 'credit';
    if ((row.debit || 0) > 0) return 'debit';
    return null;
  });

  const onFocusCredit = () => {
    setActiveField('credit');
    setEdit((r) => ({ ...r, debit: 0 }));
  };

  const onFocusDebit = () => {
    setActiveField('debit');
    setEdit((r) => ({ ...r, credit: 0 }));
  };

  const onChangeCredit = (e) => {
    const val = Number(e.target.value || 0);
    setEdit((r) => ({ ...r, credit: val, debit: 0 }));
    if (activeField !== 'credit') setActiveField('credit');
  };

  const onChangeDebit = (e) => {
    const val = Number(e.target.value || 0);
    setEdit((r) => ({ ...r, debit: val, credit: 0 }));
    if (activeField !== 'debit') setActiveField('debit');
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          value={edit.date}
          onChange={(e) => setEdit({ ...edit, date: e.target.value })}
        />
      </td>
      <td>
        <input
          type="text"
          value={edit.header}
          onChange={(e) => setEdit({ ...edit, header: e.target.value })}
        />
      </td>
      <td>
        <input
          type="number"
          value={edit.credit}
          onFocus={onFocusCredit}
          onChange={onChangeCredit}
          disabled={activeField === 'debit'}
        />
      </td>
      <td>
        <input
          type="number"
          value={edit.debit}
          onFocus={onFocusDebit}
          onChange={onChangeDebit}
          disabled={activeField === 'credit'}
        />
      </td>
      <td className="row-actions">
        <button onClick={() => onSave(edit)}>SAVE</button>
        <button className="secondary" onClick={onCancel}>
          CANCEL
        </button>
      </td>
    </tr>
  );
}
