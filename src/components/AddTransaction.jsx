import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export default function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const submit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()* 100000000),
            text,
            amount : parseInt(amount)
        }
        addTransaction(newTransaction)

    }

  return (
    <>
        <h3>Ajouter une nouvelle transaction</h3>
        <form onSubmit={submit}>
            <div className="form-control">
                <label htmlFor="text">Libellé</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Entrer un libellé ...'/>
            </div>

            <div className="form-control">
                <label htmlFor="amout">Montant <br/> (Négatif: dépense, Positif: Revenu)</label>

                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Entrer un montant ...' />
            </div>
            <button className="btn">Ajouter une transaction</button>
        </form>
    </>
  )
}
