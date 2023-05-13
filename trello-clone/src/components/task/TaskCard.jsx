import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { TaskCardTitle } from './TaskCardTitle'
import { Tasks } from './Tasks'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './input/TaskAddInput'

export const TaskCard = ({ taskCardsList, setTaskCardsList, taskCard, index }) => {
	// フック
	// 入力されたテキスト情報を保持する
	const [inputText, setInputText] = useState("");
	// 入力された情報を配列に保持する
	const [taskList, setTaskList] = useState([]);
	return (
		<Draggable draggableId={taskCard.id} index={index} >
			{(provided) => (
				<div
					className="taskCard"
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					
					<div
						className='taskCardTitleAndTaskCardDeleteButtonArea'
						{...provided.dragHandleProps}
					>
						<TaskCardTitle />
						<TaskCardDeleteButton
							taskCardsList={taskCardsList}
							setTaskCardsList={setTaskCardsList}
							taskCard={taskCard} />
					</div>
					<TaskAddInput
						inputText={inputText}
						setInputText={setInputText}
						taskList={taskList}
						setTaskList={setTaskList}
					/>
					<Tasks
						inputText={inputText}
						taskList={taskList}
						setTaskList={setTaskList}
					/>
				</div>
			)}
		</Draggable>
	)
}
