import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { TaskCard } from './TaskCard';
import { AddTaskCardButton } from './button/AddTaskCardButton';

export const TaskCards = () => {
	const [taskCardsList, setTaskCardsList] = useState([
		{
			id: "0",
			draggableId:"item0"
		}
	]);

	const reorder = (taskCardsList, startIndex, endIndex) => {
		// タスクカードを並び替える関数。
	
		// result.source.indexは移動元のitemのインデックス。1は消す要素の数
		// removeは移動もとのitemを消す操作(splice関数)
		const remove = taskCardsList.splice(startIndex, 1);
	
		// result.destination.index(endIndex)は移動先のitemのインデックス。
		// removeで消したtaskCardsListをresult.destination.index(endIndex)先で復活させる
		taskCardsList.splice(endIndex, 0, remove[0]);
	} 

	const handleDragEnd = (result) => {
		reorder(taskCardsList, result.source.index, result.destination.index);
		setTaskCardsList(taskCardsList);
	}
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable
				droppableId="droppable" direction="horizontal">
				{(provided) => (
					<div
						className="taskCardsArea"
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						
						{taskCardsList.map((taskCard, index) => (
							<TaskCard
								taskCardsList={taskCardsList}
								index={index}
								setTaskCardsList={setTaskCardsList}
								taskCard={taskCard}
								key={taskCard.id} />
						))}
						{provided.placeholder}
						<AddTaskCardButton
							taskCardsList={taskCardsList}
							setTaskCardsList={setTaskCardsList} />
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
}
