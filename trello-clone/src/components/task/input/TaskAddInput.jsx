import React from 'react';
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({
	inputText,
	setInputText,
	taskList,
	setTaskList
}) => {

	const handleSubmit = (e) => {
		// 一意のidを生成
		const taskId = uuid()
		e.preventDefault();

		if (inputText === "") {
			return
		};
		// カードを追加する
		// taskListから要素を取り出して、inputTextを追加する
		setTaskList([...taskList,
			{
				id: taskId,
				text: inputText,
				draggableId:`task-${taskId}`,
			},
		]);
		// input内の情報をsubmitしたら、inputboxの中を空にする
		setInputText("")
		// console.log(...taskList);
		// console.log(inputText);
	};

	const handleChange = (e) => {
		setInputText(e.target.value);
		console.log(e.target.value);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='add a task'
					className='taskAddInput'
					onChange={handleChange}
				value={inputText}></input>
			</form>
		</div>
	)
}
