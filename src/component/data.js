import React  from 'react'
import ListLoading from './ListLoading'
import useTabSwitch from './TabSwitch/demo.js'
import useRollNotice from './RollNotice/demo.js'
import UseMarquee from './Marquee/demo.js'
import UseDialog from './Dialog/demo.js'
import UseSpin from './Spin/demo.js'
import UseVerify from './Verify/demo.js'


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
			'activeIndex|默认显示的标签|number|1',
			'panels|标签页的名字及内容|array，[ReactNode]|[{title: "tab1",content: "empty1"}]',
			'onTabChange|标签切换时的事件|function|null'
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
			'onStart|点击开始执行的事件|function|()=>alert("网络异常！")',
			'onResult|旋转结束执行的事件|function|()=>alert("网络异常！")'
		]
	},
	'Dialog': {
		id: 'Dialog',
		name: '弹框',
		demo: <UseDialog />,
		instru: '普通弹框，未设置过多功能，只有个关闭事件。支持使用 Dialog.showMsg(content) 的方式直接调用弹框，content 参数为 string 或 react node。',
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
	},
	'Verify': {
		id: 'Verify',
		name: '手机验证',
		demo: <UseVerify />,
		instru: '完整的手机号码验证组件，常配合 Dialog 弹框一块使用',
		code: require("raw-loader!./use/UseVerify.de"),
		api: [
			'verifyTip|外部控制的提示|string|null',
			'onSendSms|申请验证码回调事件|function|null',
			'onConfirm|确认回调事件|function|null'
		]
	}
}

export default data


