import React from 'react'
import Spin from '../Spin'

const style = {
	content: {
		position: 'relative',
		width: '260px',
		boxSizing: 'border-box'
	},
	btn: {
		width: '150px',
		height: '30px',
		lineHeight: '30px',
		textAlign: 'center',
		color: '#fff',
		background: '#108ee9',
		borderRadius: '4px'
	},
	bg: {
		boxSizing: 'border-box',
		padding: '10px',
		border: 'solid 1px #e9e9e9'
	}
}

const bg = (
	<div style={style.bg}>
		<h3>我是要被虚化的标题</h3>
		<p>我是要被虚化的内容，我是要被虚化的内容</p>
	</div>
)

const UseSpin = () => (
	<div>
		<div style={style.content}>
			<Spin />
			{bg}
		</div>
		<br/>
		<div style={style.content}>
			<Spin blur={bg} />
		</div>
	</div>
	
)

export default UseSpin