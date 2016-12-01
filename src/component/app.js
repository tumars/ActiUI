import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { arduinoLight } from 'react-syntax-highlighter/dist/styles'
import ListErr from './ListErr'
import useTabSwitch from './use/useTabSwitch.js'
import useRollNotice from './use/useRollNotice.js'
import UseMarquee from './use/useMarquee.js'
import UseDialog from './use/UseDialog.js'
import UseSpin from './use/UseSpin.js'

import style from './app.less'


const data = {
	'Loading': {
		id: 'Loading',
		name: '带文本框样式的加载',
		demo: <ListErr />,
		instru: '适用于在卡片列表等元素加载完成前显示，表示列表正在加载中',
		code: require("raw-loader!./use/listerr"),
		api: null
	},
	'TabSwitch': {
		id:'TabSwitch',
		name: '标签切换',
		demo: useTabSwitch(),
		instru: '多标签页切换，可渲染两个及以上标签页，接收每个标签页的标题名与内容',
		code: require("raw-loader!./use/useTabSwitch.de"),
		api: [
			'showTab|默认显示的标签|number|1',
			'title|标签页的名字|array，[ReactNode]|["标签一","标签二"]',
			'content|标签页的内容|array，[ReactNode]|null'
		]
	},
	'RollNotice': {
		id: 'RollNotice',
		name: '滚动公告',
		demo: useRollNotice(),
		instru: '滚动公告，常用于用户获奖公告',
		code: require("raw-loader!./use/useRollNotice.de"),
		api: [
			'data|要滚动显示的数据组|array|null',
			'color|喇叭与文字颜色|string|#000'
		]
	},
	'Marquee': {
		id: 'Marquee',
		name: '跑马灯抽奖',
		demo: <UseMarquee />,
		instru: '用于用户抽奖活动，点击开始执行开始事件，接口获取到奖励后跑马灯开始旋转，定位到奖励后执行结束事件',
		code: require("raw-loader!./use/UseMarquee.de"),
		api: [
			'isStart|是否开始游戏|bool|false',
			'prize|获得的奖励位置|number|-1',
			'handleStart|点击开始执行的事件|function|()=>alert("网络异常！")',
			'handleResult|旋转结束执行的事件|function|()=>alert("网络异常！")'
		]
	},
	'Dialog': {
		id: 'Dialog',
		name: '弹框',
		demo: <UseDialog />,
		instru: '普通弹框，未设置过多功能，只有个关闭事件',
		code: require("raw-loader!./use/UseDialog.de"),
		api: [
			'onClose|关闭弹窗时执行的事件|function|null',
			'visible|弹框是否可见|bool|fasle'
		]
	},
	'Spin': {
		id: 'Spin',
		name: '菊花图',
		demo: <UseSpin />,
		instru: '用于表示加载中，可以覆盖组件或整个屏幕，可将需要虚化的内容当做参数传入进行虚化',
		code: require("raw-loader!./use/UseSpin.de"),
		api: [
			'isFixed|是否覆盖全屏|bool|false',
			'blur|传入要虚化的内容|ReactNode|null'
		]
	}
}

class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { value } = this.props
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
				<h2 className={style.h2}>{ value.name + ' ' + value.id }</h2>
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
	value:  PropTypes.object
}

Card.defaultProps = {
    value: {
		name: null,
		demo: null,
		instru: null,
		code: null,
		api: null
    }
}

const Loading = () => (<Card value={data.Loading} />)
const TabSwitch = () => (<Card value={data.TabSwitch} />)
const RollNotice = () => (<Card value={data.RollNotice} />)
const Marquee = () => (<Card value={data.Marquee} />)
const Dialog = () => (<Card value={data.Dialog} />)
const Spin = () => (<Card value={data.Spin} />)

const Hello = React.createClass({
  render() {
    return (
		<div className={style.hello}>
			<h2>Welcome to the app!</h2>
		</div>
    )
  }
})

const Nav = () => (
	<ul className={style.nav}>
		<li onClick={()=> hashHistory.replace('/')}><span>简介</span></li>
		<li onClick={()=> hashHistory.replace('Loading')}><span>{data.Loading.name}<small>{data.Loading.id}</small></span></li>
		<li onClick={()=> hashHistory.replace('TabSwitch')}><span>{data.TabSwitch.name}<small>{data.TabSwitch.id}</small></span></li>
		<li onClick={()=> hashHistory.replace('RollNotice')}><span>{data.RollNotice.name}<small>{data.RollNotice.id}</small></span></li>
		<li onClick={()=> hashHistory.replace('Marquee')}><span>{data.Marquee.name}<small>{data.Marquee.id}</small></span></li>
		<li onClick={()=> hashHistory.replace('Dialog')}><span>{data.Dialog.name}<small>{data.Dialog.id}</small></span></li>
		<li onClick={()=> hashHistory.replace('Spin')}><span>{data.Spin.name}<small>{data.Spin.id}</small></span></li>
	</ul>
)





export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.content}>
				<div className={style.head}>
					<h1>Acti UI</h1>
				</div>
				<div className={style.main}>
					<div className={style.left_box}>
						<Nav/>
					</div>
					<div className={style.right_box}>
						<Router history={ hashHistory} >
							<Route path="/">
								<IndexRoute component={Hello} />
								<Route path={'Loading'} component={Loading} />
								<Route path={'TabSwitch'} component={TabSwitch} />
								<Route path={'RollNotice'} component={RollNotice} />
								<Route path={'Marquee'} component={Marquee} />
								<Route path={'Dialog'} component={Dialog} />
								<Route path={'Spin'} component={Spin} />
							</Route>
						</Router>
					</div>
				</div>
			</div>
		);
	}
}


// const App = (
// 	<Router history={ hashHistory} >
// 		{data.map((value, index) =>
// 			<Route path={value.id} component={<Card
// 				key={index}
// 				index={index}
// 				value={value}
// 			/>} />
// 		)}
// 	</Router>
// ）


