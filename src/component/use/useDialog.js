import React, { Component }from 'react'
import Dialog from '../Dialog'

const style = {
	box: {
		padding: '0 20px 20px'
	},
	btn: {
		width: '150px',
		height: '30px',
		lineHeight: '30px',
		textAlign: 'center',
		color: '#fff',
		background: '#108ee9',
		borderRadius: '4px'
	}
}


class UseDialog extends Component {

	constructor(props) {
		super(props)
        this.state ={
			showdiaolg: false
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleClick = this.handleClick.bind(this)
	}
	handleClose() {
		this.setState({
			showdiaolg: false
		})
	}
	handleClick() {
		this.setState({
			showdiaolg: true
		})
	}
	render() {
		const state = this.state 
		const pop = (
			<Dialog 
				onClose={this.handleClose}
				visible={state.showdiaolg}
			>
				<div style={style.box}>
					<h2>我是弹框</h2>
					<p>我是弹框的内容</p>
				</div>
			</Dialog>
		)
		return (
			<div>
				{pop}
				<div style={style.btn} onClick={this.handleClick}>点我出现弹框</div>
			</div>
			
		)
	}
}

export default UseDialog