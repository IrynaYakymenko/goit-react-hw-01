import s from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
  return (
    <table className={s.table}>
        <thead>
            <tr className={s.tableTitle}>
            <th className={s.item}>Type</th>
            <th className={s.item}>Amount</th>
            <th className={s.item}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({id, type, amount,currency})=> {
                return(
                    <tr className={s.row} key={id}>
                <td className={s.item}>{type}</td>
                <td className={s.item}>{amount}</td>
                <td className={s.item}>{currency}</td>
                 </tr>
                )})}
        </tbody>
</table>
  )
}

export default TransactionHistory