import React from 'react';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from './Task';


const reorder = (taskList, startIndex, endIndex) => {
	// タスクを並び替える関数。

	// result.source.indexは移動元のitemのインデックス。1は消す要素の数
	// removeは移動もとのitemを消す操作(splice関数)
	const remove = taskList.splice(startIndex, 1);

	// result.destination.index(endIndex)は移動先のitemのインデックス。
	// removeで消したtaskListをresult.destination.index(endIndex)先で復活させる
	taskList.splice(endIndex, 0, remove[0]);
} 

export const Tasks = ({ taskList, setTaskList }) => {
	const handleDragEnd = (result) => {
		
		// resultはDragDropContextコンポーネントが用意しているプロパティ
		// result.source.indexは、itemのインデックスが格納されている
		reorder(taskList, result.source.index, result.destination.index);
		console.log(taskList);
		setTaskList(taskList);
	}

	return (
		<div>
			
			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId="droppable">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{taskList.map((task,index) => ( // indexはtaskListの配列番号
								<div key={task.id}>
									<Task index={index} task={task} setTaskList={setTaskList} taskList={taskList} />
								</div>
							))}
							{provided.placeholder}
						</div>
					)}
					</Droppable>
			</DragDropContext>
		</div>
	)
};
