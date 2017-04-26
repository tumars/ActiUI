import React from 'react';
import TabSwitch from '../TabSwitch'

const useTabSwitch = () => {
	const c1 = (<div>我的标签一的内容</div>)
	const c2 = (<div>我的标签二的内容</div>)
	const c3 = (<div>我的标签三的内容</div>)

	const panels = [
		{title: '列表一', content: c1}, 
		{title: '列表二', content: c2}, 
		{title: '列表三', content: c3}
	]
	return (
		<div>
			<TabSwitch
				panels={panels}
				activeIndex={1}
				onTabChange={(prev, now)=>console.log(`上一页是${prev}，下一页是${now}`)}
			/>
		</div>
	) 
}

export default useTabSwitch 