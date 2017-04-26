import React, { Component }from 'react'
import Verify from "../Verify";

class UseVerify extends Component {
    constructor(props) {
        super(props);
        this.state = {
			isShowV: false,
			verifyTip: null
        }
    }

    setTip(text) {
		this.setState({verifyTip: text})
    }

    handleSendSms(mobile) {
		alert(`手机号：${mobile}`)
		setTimeout(()=>
			this.setTip('已发送，请注意查收')
		,3000)
		
    }

    handleComfirm(mobile, valid) {
		alert(`手机：${mobile}，验证码：${valid}`)
		setTimeout(()=>
			this.setTip('验证码已过期，请重新发送')
		,3000)
    }

    render() {
        const { verifyTip } = this.state
		return (
			<div>
				<Verify
					verifyTip={verifyTip}
					onSendSms={(mobile)=>this.handleSendSms(mobile)}
					onConfirm={(mobile, valid)=>this.handleComfirm(mobile, valid)}
				/>
			</div>
		)
    }
}

export default UseVerify