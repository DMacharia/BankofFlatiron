import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
	//use useEffect hook to fetch data
	//create stateful transaction variables
	const [transactions, setTransactions] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8001/transactions")
			.then((res) => res.json())
			//get data and store it in a state
			.then((data) => setTransactions(data));
	}, []);
	console.log(transactions);
	return (
		<div>
			<Search />
			<AddTransactionForm />
			<TransactionsList transactions={transactions} />
		</div>
	);
}

export default AccountContainer;
