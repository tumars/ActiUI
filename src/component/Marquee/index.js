import React, { PropTypes, Component } from 'react'
// import co from '../../methed/Common'
import style from './marquee.less'

class Marquee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index:-1,   //当前转动到哪个位置，起点位置
            count:7,    //总共有多少个位置
            speed:240,  //初始转动速度
            times:0,    //格子切换次数
            cycle:40,   //转动基本次数：即至少需要转动多少次再进入抽奖环节
            prize:this.props.prize,    //中奖位置,默认-1
            isScolling:false    //是否在旋转中
        }
        this.roll = this.roll.bind(this)
        this.controlRoll = this.controlRoll.bind(this)
        this.getResult = this.getResult.bind(this)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }
    componentWillReceiveProps(nextProps) {
        const _that = this
        nextProps.isStart == false ? null :
        nextProps.prize == -1 ? null :  
        nextProps.prize > -1  && nextProps.prize < _that.state.count ? 
            _that.getResult(nextProps.prize) : alert('网络异常！')
    }
    roll() {
        const _that = this
        let i = _that.state.index
        let count = _that.state.count
        i = i > count - 1 ? 0 : i + 1
        _that.setState({index: i})
    }
    controlRoll(position) {
        const _that = this
        _that.setState({times: _that.state.times + 1, isScolling: true})
        _that.roll()
        if (_that.state.times > _that.state.cycle+10 && _that.state.prize ==_that.state.index) {
            clearTimeout(_that.timer)
            _that.setState({
                isScolling: false,
                isTiming: false,
                prize: -1,
                times: 0,
                speed: 240
            })
            setTimeout(function () {
                _that.props.onResult()
            },100);
        } else {
            _that.setState({
                isTiming: true
            })
            if(this.state.times < this.state.cycle) {
                _that.setState({ speed: this.state.speed - 10})
            } else if (this.state.times == this.state.cycle) {
                _that.setState({prize: position})
            } else {
                if (_that.state.times > _that.state.cycle+10 && ((_that.state.prize==0 && _that.state.index==7) || _that.state.prize==_that.state.index+1)) {
                    _that.setState({speed: this.state.speed + 110})
                }else{
                    _that.setState({speed: this.state.speed + 20 })
                }
            }
            if (_that.state.speed<40) {
                _that.setState({
                    speed: 40
                })
            }
            _that.timer = setTimeout(function(){
                _that.controlRoll(position)
            },_that.state.speed);
        }
        return false
    }

    getResult(position) {
        const _that = this
        _that.setState({
            isTiming: false
        })
        var countInterval = setInterval(function () {
            loopQueryRaffleResult(position)
        }, 800);

        function loopQueryRaffleResult(position){
            clearInterval(countInterval);
            if(_that.state.isTiming == false){
                _that.controlRoll(position);
            }
        }
    }


    render() {
        const { onStart } = this.props
        const content = []
        for (var i = 0; i < 8; i++) {
             content.push(<li key={i} className={this.state.index == i ? style.active : null}>{i}</li>)
        }
        return (
            <div className={style.content}>
                <div className={style.box}>
                    <div className={this.state.isScolling ? style.start_disable : style.start} onClick={(e) => this.state.isScolling ? false : onStart(e)}>开始</div>
                    <ul>
                        {content}
                    </ul>
                </div>
            </div>
        )
    }
}

Marquee.propTypes = {
    isStart: PropTypes.bool,
    prize: PropTypes.number,
    onStart: PropTypes.func,
    onResult: PropTypes.func
}

Marquee.defaultProps = {
    isStart: false,
    prize: -1,
    onStart: () => {
        alert('网络异常！')
    },
    onResult: () => {
        alert('网络异常！')
    }
}

export default Marquee