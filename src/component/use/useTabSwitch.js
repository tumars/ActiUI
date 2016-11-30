import React from 'react';
import TabSwitch from '../TabSwitch'

const useTabSwitch = () => {
	const c1 = (<div>我的标签一的内容</div>)
	const c2 = (<div>我的标签二的内容</div>)
	return (
		<TabSwitch 
			title1='标签一'
			title2='标签二'
			content1={c1}
			content2={c2}
		/>
	) 
}

export default useTabSwitch 