import React, { useContext } from "react";
import sign from "../util/sign";
import GlobalContext from "../context/global/GloabalContext";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {`${sign(transaction.amount)}$${Math.abs(transaction.amount)}`}{" "}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
