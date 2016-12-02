import React  from 'react'
import ListLoading from './ListLoading'
import useTabSwitch from './TabSwitch/demo.js'
import useRollNotice from './RollNotice/demo.js'
import UseMarquee from './Marquee/demo.js'
import UseDialog from './Dialog/demo.js'
import UseSpin from './Spin/demo.js'


const data = {
	'Loading': {
		id: 'Loading',
		name: '带文本框样式的加载',
		demo: <ListLoading />,
		instru: '适用于在卡片列表等元素加载完成前显示，表示列表正在加载中',
		code: require("raw-loader!./use/listLoading"),
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

export default data


