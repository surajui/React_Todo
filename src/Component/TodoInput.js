import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todolist from './Todolist';
export default function TodoInput() {
	const intialValue = {
		items: [],
		id: uuid(),
		item: '',
		isEdit: false,
	};

	const [userValue, setUserValue] = useState(intialValue);
	const [userData, setuserData] = useState([]);

	const userChangeValues = (e) => {
		const { name, value } = e.target;
		setUserValue({ ...userValue, [name]: value });
	};
	const userFormDetails = (e) => {
		e.preventDefault();
		const newData = {
			id: userValue.id,
			item: userValue.item,
		};

		const updateValue = [...userValue.items, newData];
		setuserData(updateValue);
		setUserValue({
			items: updateValue,
			item: '',
			id: uuid(),
			isEdit: false,
		});
	};

	///updateUserData
	const updateUserData = (e) => {
		e.preventDefault();
		const newData = {
			id: userValue.id,
			item: userValue.item,
		};
		console.log(newData);
	};

	const perfectData = (data) => {
		setUserValue({
			items: data,
			item: '',
			id: uuid(),
			isEdit: false,
		});
	};
	const clearAllList = (ditem) => {
		setUserValue({
			items: ditem,
			item: '',
			id: uuid(),
			isEdit: false,
		});
	};
	const editableDataValue = (edit) => {
		setUserValue({
			item: edit,
			id: edit,
			isEdit: true,
		});
	};

	return (
		<>
			<h5>TodoInput component</h5>
			<div className="card">
				<div className="card-body my-3">
					<form autoComplete="off">
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								value={userValue.item}
								name="item"
								onChange={userChangeValues}
							/>
						</div>
					</form>
					<div>
						{userValue.isEdit === false ? (
							<button
								className="btn btn-block btn-success mt-2"
								onClick={userFormDetails}
							>
								Submit
							</button>
						) : (
							<button
								className="btn btn-block btn-info mt-2"
								onClick={updateUserData}
							>
								update
							</button>
						)}
					</div>
				</div>
			</div>
			<Todolist
				userNewValues={userData}
				removeData={perfectData}
				clearDataList={clearAllList}
				editDataFromParent={editableDataValue}
			/>
		</>
	);
}
