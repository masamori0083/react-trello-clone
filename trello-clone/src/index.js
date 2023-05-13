import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// React18の書き方にbeautiful-dndは対応していない。
// よって、バージョンを下げるかStrictModeを外すかどちらかしないと動かない。
// 開発を進める時には、StrictModeがあった方が便利なので、実務でドロップアンドドラッグ
// を使用したい場合、別のライブラリを検討する必要あり。
// 下の書き方だと、非推奨のエラーがコンソールで出る。

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
