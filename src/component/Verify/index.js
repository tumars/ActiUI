import React, { PropTypes, Component } from 'react'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import style from './verify.less'

class Verify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTiming: false,
            time: 60,
            tip: null
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentWillReceiveProps(nextProps) {
        nextProps.verifyTip && this.setTip(nextProps.verifyTip)
    }

    clearTip() {
        this.setTip(null)
    }

    verifyTel(mobile) {
        const reg = /^[1]+[3,4,5,7,8]+\d{9}$/
        return mobile && mobile.length == 11 && reg.test(mobile)
    }

    verifyValid(valid) {
        const reg = /^\d{4}$/
        return valid && reg.test(valid)
    }

    startTime() {
        const prop =  this.props

        this.setState({
            isTiming: true
        })

        let t = prop.time
        this.timer = setInterval(()=>{
            t = t-1
            this.setState({
                time: t
            })

            if (t<=0) {
                clearInterval(this.timer)
                this.setState({
                    isTiming: false,
                    time: this.props.time
                })
            }
        }, 1000)
    }

    setTip(text) {
        this.setState({
            tip: text
        })
    }

    renderDot() {
        return (
            <span className={style.dotting}></span>
        )
    }

    sendClick() {
        const prop =  this.props
        const mobile = this.refs.PhoneInput.value

        this.clearTip()

        if(!this.verifyTel(mobile)){
            this.setTip('请输入正确手机号')
            return
        }
        this.startTime()

        this.setTip(<span>发送中{this.renderDot()}</span>)
        prop.onSendSms(mobile)
    }

    confirmClick() {
        const prop =  this.props
        const mobile = this.refs.PhoneInput.value
        const valid = this.refs.ValidInput.value

        this.clearTip()

        if(!this.verifyTel(mobile) || !this.verifyValid(valid)){
            this.setTip('请输入正确手机号及验证码')
            return
        }

        this.setTip(<span>验证中{this.renderDot()}</span>)
        prop.onConfirm(mobile, valid)
    }

    render() {
        return (
            <div className={style.content}>
                <input type="tel" className={style.mobile_input} ref="PhoneInput" onFocus={() => this.clearTip()}  name="mobile" maxLength="11" placeholder="请输入手机号码" />
                <div className={style.validbox} id="Codes">
                    <div className={style.section}>
                        <input type="text" ref="ValidInput" onFocus={() => this.clearTip()} maxLength="4" placeholder="输入验证码" />
                    </div>
                    <div className={style.section}>
                        {this.state.isTiming ? (<span className={style.time}>{this.state.time}s后重试</span>) : (<span onClick={() => this.sendClick()}>获取</span>)}
                    </div>
                </div>
                <div className={this.state.tip ? style.tip_show : style.tip_hide}>
                    <ReactCSSTransitionGroup 
                        component='div'
                        transitionName={{
                            enter: style.enter,
                            enterActive: style.enterActive,
                            leave: style.leave,
                            leaveActive: style.leaveActive
                        }} 
                        transitionEnterTimeout={150} 
                        transitionLeaveTimeout={150}
                    >
                        <span key={this.state.tip}>{this.state.tip}</span>
                    </ReactCSSTransitionGroup>
                </div>
                <span className={style.btn} onClick={() => this.confirmClick()}>确定</span>
            </div>
        )
    }
}

Verify.propTypes = {
    verifyTip: PropTypes.string,
    time: PropTypes.string,
    onSendSms: PropTypes.func.isRequired,
    onConfirm:  PropTypes.func.isRequired
}

Verify.defaultProps = {
    time: '60',
    verifyTip: ''
}

export default Verify