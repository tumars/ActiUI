import React from 'react';
import RollNotice from '../RollNotice'

const useRollNotice = () => {
	const data = [
		'手机尾号1234的用户获得三等奖',
		'手机尾号7788的用户获得三等奖',
		'手机尾号3428的用户获得四等奖'
	]
	return (
		<div>
			<RollNotice 
				data={data}
				color='#404040'
			/>
			<br/>
			<RollNotice 
				data={data}
				color='#51BAE3'
			/>
		</div>
	) 
}

export default useRollNotice 