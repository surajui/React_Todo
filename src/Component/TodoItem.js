import React from 'react';

export default function TodoItem(props) {
	return (
		<>
			<div>
				<li className="list-group-item d-flex justify-content-between my-2">
					<h5>{props.title}</h5>
					<div className="todo-item">
						<span className="mx-2 text-success">
							<i className="fa fa-pencil" onClick={props.editableData}></i>
						</span>
						<span className="mx-2 text-danger">
							<i className="fa fa-trash" onClick={props.changeDelete}></i>
						</span>
					</div>
				</li>
			</div>
		</>
	);
}
