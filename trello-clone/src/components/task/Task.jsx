import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const Task = ({ task, taskList, setTaskList, index }) => {

	// 削除ボタンを押すと消える
	// taskListに割り振ったtaskのidでないものを取得する
	const handleDelete = (id) => {
		setTaskList(taskList.filter((task) => task.id !== id)); // filterはTrueのものだけ残す
	};
	return (
		// indexプロパティはドラッグ可能なアイテムの順序を示すために使用される
		// 並び替えをする際、indexが連番になっておらずかつ一意でない場合、エラーが表示される。
		<Draggable index={index} draggableId={task.draggableId}>
			{(provided) => (
				<div className="taskBox"
					key={task.id}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					
					<p className='taskText'>{task.text}</p>
					<button
				className='taskTrashButton'
			onClick={()=> handleDelete(task.id)}>
					<i className="fa-solid fa-trash-can"></i>
					</button>
				</div>
			)}
			
			</Draggable>
	)
}
