import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import data from '../component/data.js'

import style from './app.less'

const arr = Object.keys(data)
class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			i: -1
		}
	}
	handleClick(i, id) {
		this.setState({
			i: i
		})
		hashHistory.replace(id)
	}
	render() {
		return (
			<ul className={style.nav}>
				<li className={this.state.i == -1 ? style.active : null} onClick={()=> this.handleClick(-1, '/')}><span>简介</span></li>
				{
					arr.map((val, index)=>
						<li key={index} className={this.state.i == index ? style.active : null} onClick={()=> this.handleClick(index, data[val].id)}>
							<span>
								{data[val].name}<small>{data[val].id}</small>
							</span>
						</li>
					)
				}
			</ul>
		)
	}
}

export default Nav