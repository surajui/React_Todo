import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function Todolist(props) {
	const [data, setData] = useState(props.userNewValues);

	React.useEffect(() => {
		setData(props.userNewValues);
	}, [props.userNewValues]);

	const clearListItem = () => {
		const emptydata = props.userNewValues;
		if (emptydata.length > 0) {
			setData([]);
			props.clearDataList([]);
		}
	};

	const deleteItem = async (id) => {
		const filterItem = await data.filter((item) => item.id !== id);
		setData(filterItem);
		props.removeData(filterItem);
	};
	const editItem = (id) => {
		// console.log(id);
		const findEditItem = data.find((resp) => resp.id === id);
		props.editDataFromParent(findEditItem.item);
	};

	return (
		<>
			<div>
				<ul className="list-group my-5">
					<h5 className="text-capitalize text-center">todolist</h5>
					{data &&
						data.map((item) => {
							return (
								<TodoItem
									key={item.id}
									title={item.item}
									changeDelete={() => deleteItem(item.id)}
									editableData={() => editItem(item.id)}
								/>
							);
						})}

					<button className="btn btn-danger btn-block" onClick={clearListItem}>
						ClearList
					</button>
				</ul>
			</div>
		</>
	);
}
