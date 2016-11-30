import React, { PropTypes, Component } from 'react';
import style from './tabswitch.less';

class TabSwitch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTab1: true
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
        const box = this.state.showTab1 ? content1 : content2

        return (
            <div className={style.tabbox}>
                <ul className={style.head}>
                    <li className={ this.state.showTab1 ? style.active : null } onClick={()=>this.handleClickLeft()}>{title1}</li>
                    <li className={ !this.state.showTab1 ? style.active : null } onClick={()=>this.handleClickRight()}>{title2}</li>
                </ul>
                <div className={style.body}>
                    {box}
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