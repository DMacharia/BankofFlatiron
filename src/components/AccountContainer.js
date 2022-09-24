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
			.then((data) => setTransactions(data))
			.catch((error) => console.log(error));
	}, []);

	function handleSubmissionUpdate(newSubmission) {
		//get newSubmission data and add to current transactions
		//post newSubmission data

		fetch("http://localhost:8001/transactions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newSubmission),
		})
			.then((res) => res.json())
			.then((newData) =>
				setTransactions((transactions) => [...transactions, newData])
			)
			.catch((error) => console.log(error));
	}

	console.log(transactions);

	function handleSearch(search) {
		const filterItem = transactions.filter((data) =>
			data.description.includes(search)
		);

		setTransactions(filterItem);
	}

	return (
		<div>
			<Search searchingFn={handleSearch} />
			<AddTransactionForm submission={handleSubmissionUpdate} />
			<TransactionsList transactions={transactions} />
		</div>
	);
}

export default AccountContainer;
