import React, { useContext } from "react";
import CashContext from "../Context/CashContext";

export default function NotesField() {
  const { handleNotes, notes, deleteNotes, setRadioCheck } =
    useContext(CashContext);

  return (
    <>
      <form className="notes">
        <label>
          {"Valor: "}
          <input
            type="text"
            placeholder="0.00"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleNotes(e.target.value.replace(/,/g, '.'));
                e.target.value = "";
              }
            }}
          />
        </label>
        <div className="radios-in">
          <label htmlFor="Pix">
            <input
              type="radio"
              name="PayType"
              value="Pix"
              onChange={({ target }) => setRadioCheck(target.value)}
            />
            Pix
          </label>
          <label htmlFor="PicPay">
            <input
              type="radio"
              name="PayType"
              value="PicPay"
              onChange={({ target }) => setRadioCheck(target.value)}
            />
            PicPay
          </label>
          <label htmlFor="Other">
            <input
              defaultChecked
              type="radio"
              name="PayType"
              value="Other"
              onChange={({ target }) => setRadioCheck(target.value)}
            />
            Other
          </label>
        </div>
        <div className="notesContainer">
          <ol>
            {notes.map((payValue, index) => (
              <li key={notes.indexOf(payValue)} className={index % 2 === 0 ? 'white' : 'grey'}>
                <span style={{width: '100px'}}>{`Forma: ${payValue[0]}`}</span>
                <span>{`Valor: $${Number(payValue[1]).toFixed(2)}`}</span>
                <button
                  type="button"
                  onClick={() => deleteNotes(notes.indexOf(payValue))}
                >
                  X
                </button>
              </li>
            ))}
          </ol>
        </div>
      </form>
    </>
  );
}
