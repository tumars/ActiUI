import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import style from './tabswitch.less';

class TabSwitch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTab: 1
        }
    }

    handleClickLeft() {
        this.setState({
            showTab1: true
        })
    }

    handleClickRight() {
        this.setState({
            showTab1: false
        })
    }

    render() {
        const { title1, title2, content1, content2 } = this.props
        const box = this.state.showTab1 ? <div key={1} className={style.box}>{content1}</div> : <div key={2} className={style.box}>{content2}</div>

        return (
            <div className={style.content}>
                <ul className={style.head}>
                    <li className={ this.state.showTab1 ? style.active : null } onClick={()=>this.handleClickLeft()}>{title1}</li>
                    <li className={ !this.state.showTab1 ? style.active : null } onClick={()=>this.handleClickRight()}>{title2}</li>
                </ul>
                <div className={style.body}>
                    <ReactCSSTransitionGroup 
                        component='div'
                        transitionName={{
                            enter: style.enter,
                            enterActive: style.enterActive,
                            leave: style.leave,
                            leaveActive: style.leaveActive
                          }} 
                        transitionEnterTimeout={300} 
                        transitionLeaveTimeout={100}
                     >
                        {box}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

TabSwitch.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    content1: PropTypes.node.isRequired,
    content2: PropTypes.node.isRequired
}

TabSwitch.defaultProps = {
    title1: 'tab1',
    title2: 'tab2',
    content1: 'empty1',
    content2: 'empty2'
}

export default TabSwitch