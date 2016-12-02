import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { arduinoLight } from 'react-syntax-highlighter/dist/styles'
import data from './data.js'
import Nav from './nav.js'
import Hello from './Hello.js'

import style from './app.less'

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
					<a className={style.git} href="https://github.com/tumars/ActiUI">
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><style type="text/css"></style></defs><path d="M1.3 525.3c0 223 142.9 412.6 342.1 482.2 26.8 6.8 22.7-12.4 22.7-25.4l0-88.5C211.2 911.8 205 809.2 194.5 792.1c-21.1-35.9-70.7-45-55.9-62.1 35.3-18.2 71.2 4.6 112.9 66.1 30.2 44.6 88.8 37.1 118.7 29.6 6.5-26.8 20.5-50.7 39.6-69.4-160.3-28.5-227.3-126.5-227.3-243 0-56.4 18.6-108.4 55.2-150.3-23.2-69.2 2.2-128.2 5.6-137 66.3-6 135.1 47.4 140.5 51.6 37.7-10.1 80.7-15.6 128.8-15.6 48.4 0 91.6 5.6 129.5 15.8 12.9-9.8 76.8-55.6 138.4-50 3.3 8.8 28.1 66.5 6.3 134.7 37 42 55.8 94.3 55.8 151 0 116.7-67.3 214.8-228.2 243.1 26.9 26.5 43.5 63.3 43.5 104l0 128.4c0.9 10.2 0 20.5 17.2 20.5 202.1-68.1 347.6-259.1 347.6-484.1 0-282.1-228.7-510.7-510.7-510.7C229.9 14.6 1.3 243.2 1.3 525.3z"></path></svg>
						查看该组件源码
					</a>
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

// const wid = document.body.clientWidth
const arr = Object.keys(data)
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
								{
									arr.map((val, index)=>
										<Route key={index} path={val} component={() => (<Card value={data[val]} />)} />
									)
								}
							</Route>
						</Router>
					</div>
				</div>
			</div>
		);
	}
}
