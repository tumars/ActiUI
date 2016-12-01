import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import style from './tabswitch.less';

class TabSwitch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTab: this.props.showTab - 1
        }
    }

    handleTabClick(i) {
        this.setState({
            showTab: i
        })
    }

    render() {
        const { title, content } = this.props
        // const box = this.state.showTab1 ? <div key={1} className={style.box}>{content1}</div> : <div key={2} className={style.box}>{content2}</div>
        const box = <div key={this.state.showTab} className={style.box}>{content[this.state.showTab]}</div>

        return (
            <div className={style.content}>
                <ul className={style.head}>
                {title.map((val,i) => 
                    <li key={i} className={ this.state.showTab == i ? style.active : null } onClick={()=>this.handleTabClick(i)}>{val}</li>
                )}
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
    showTab: PropTypes.number,
    title: PropTypes.array,
    content: PropTypes.array
}

TabSwitch.defaultProps = {
    showTab: 1,
    title: ['tab1','tab2'],
    content: ['empty1','empty2']
}

export default TabSwitch