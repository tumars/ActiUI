import React, { Component, PropTypes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/dist/styles';
import ListErr from './ListErr'
import useTabSwitch from './use/useTabSwitch.js'
import useRollNotice from './use/useRollNotice.js'

import style from './app.less'


const data = [
	{
		name: '带文本框样式的 Loading',
		demo: <ListErr />,
		instru: '适用于在卡片列表等元素加载完成前显示，表示列表正在加载中',
		code: require("raw-loader!./use/listerr"),
		api: null
	},
	{
		name: '标签切换 TabSwitch',
		demo: useTabSwitch(),
		instru: '双标签页切换，接收标题名与内容，样式可在less文件中修改，如需要更多标签可在js中修改',
		code: require("raw-loader!./use/useTabSwitch.de"),
		api: [
			'title1|第一个标签页的名字|string、ReactNode|标签一',
			'title2|第二个标签页的名字|string、ReactNode|标签二',
			'content1|第一个标签页的内容|string、ReactNode|null',
			'content2|第二个标签页的内容|string、ReactNode|null'
		]
	},
	{
		name: '滚动公告 RollNotice',
		demo: useRollNotice(),
		instru: '滚动公告，常用于用户获奖公告',
		code: require("raw-loader!./use/useRollNotice.de"),
		api: [
			'data|要滚动显示的数据组|array|null',
			'color|喇叭与文字颜色|string|#000'
		]
	}
]

class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { value, index } = this.props
		const apilist = value.api == null ? <p>没有接口，直接使用</p> : (
			<div className={style.apilist}>
				<ul>
					<li>参数</li>
					<li>说明</li>
					<li>类型</li>
					<li>默认值</li>
				</ul>
				{value.api.map((val,i) => 
					<ul key={i}>
						<li>{val.split('|')[0]}</li>
						<li>{val.split('|')[1]}</li>
						<li>{val.split('|')[2]}</li>
						<li>{val.split('|')[3]}</li>
					</ul>
				)}
				
			</div>
		)
		return (
			<div className={style.card}>
			<section>
				<h2>{ index+1 }.{ value.name }</h2>
				<div className={style.box}>
					<div className={style.demo}>
						{ value.demo }
					</div>
					<div className={style.meta}>
						<h3>使用说明</h3>
						<p>{ value.instru }</p>
					</div>
					<div className={style.meta}>
						<h3>代码示例</h3>
						<SyntaxHighlighter language='javascript' style={arduinoLight}>{ value.code }</SyntaxHighlighter>
					</div>
					<div className={style.meta}>
						<h3>接口参数</h3>
						{ apilist }
					</div>
				</div>
			</section>
		</div>
		)
	}
}


Card.propTypes = {
	index: PropTypes.number,
	value:  PropTypes.object
}

Card.defaultProps = {
	index: -1,
    value: {
		name: null,
		demo: null,
		instru: null,
		code: null,
		api: null
    }
}



export default class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.content}>
				{data.map((value, index) =>
					<Card
						key={index}
						index={index}
						value={value}
					/>
				)}
			</div>
		);
	}
}


