import React, { useState } from "react";

function AddTransactionForm({ submission }) {
	const [formData, setFormData] = useState({
		date: "",
		description: "",
		category: "",
		amount: 0,
	});

	function handleSubmit(e) {
		e.preventDefault();
		submission(formData);
	}

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<div className="ui segment">
			<form onChange={handleChange} onSubmit={handleSubmit} className="ui form">
				<div className="inline fields">
					<input defaultValue={formData.date} type="date" name="date" />
					<input
						defaultValue={formData.description}
						type="text"
						name="description"
						placeholder="Description"
					/>
					<input
						defaultValue={formData.category}
						type="text"
						name="category"
						placeholder="Category"
					/>
					<input
						defaultValue={formData.amount}
						type="number"
						name="amount"
						placeholder="Amount"
						step="0.01"
					/>
				</div>
				<button className="ui button" type="submit">
					Add Transaction
				</button>
			</form>
		</div>
	);
}

export default AddTransactionForm;
