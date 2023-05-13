import React from 'react';
import { Header } from './components/header/Header';
import { TaskCards } from './components/task/TaskCards';

function App() {
	return (
		<div className="App">
			<Header />
			<TaskCards />
    </div>
  );
}

export default App;
