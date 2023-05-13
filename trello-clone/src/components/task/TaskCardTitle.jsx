import React, { useState } from 'react';

export const TaskCardTitle = () => {

	// フック
	const [isClick, setIsClick] = useState(false); // クリックされたかどうかのフラッグ
	const [inputCardTitle, setInputCardTitle] = useState("Today") // 入力されたテキスト情報


	// 指定したdiv要素をクリックするとisClickがTrueになる
	// クリックすると、タイトル入力ボックスを出現させるためのフラッグ
	const handleClick = () => {
		setIsClick(true);
		console.log(isClick);
	};
	
	// インプットのテキストを保持するための関数
	// eの中(inputに渡される要素)のtarget.valueから入力情報を取り出して保持する関数
	const handleChange = (e) => {
		console.log(inputCardTitle);
		setInputCardTitle(e.target.value);
	}

	// formタグの挙動を制御するための関数
	// formの性質上、入力が確定されると自動的にページ遷移が行われてしまうのでそれを制御する
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsClick(false);
	}
	
	// フォーカスがinput要素から外れたときに発生するイベント
	// inputタグ以外の場所をクリックしたときの挙動を制御する
	const handleBlur = () => {
		setIsClick(false);
	}

	return (
		<div onClick={handleClick} className="taskCardTitleInputArea">
			{isClick ? (
				<form onSubmit={handleSubmit}>
					<input
						className='taskCardTitleInput'
						type="text"
						autoFocus // クリックしたときに、もう一度クリックしなくても文字が打てる状態にする
						onChange={handleChange}
						onBlur={handleBlur}
						value={inputCardTitle}
					maxLength="10"/>
				</form>) : (
					<h3>{inputCardTitle}</h3>
			)}
		</div>
	)
}
