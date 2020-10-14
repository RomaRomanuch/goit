import React from "react";
import styles from "./Transaction.module.css";

export default function Transaction({ items }) {
  return (
    <table className={styles.transaction}>
      <thead>
        <tr className={styles.t_title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.t_body}>
        {items.map((item) => (
          <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
