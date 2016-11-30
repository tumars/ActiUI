import React, { PropTypes,Component } from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import style from './dialog.less';


class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false
        };
    }

    componentDidMount() {
        if (this.props.visible) {
            this.enter();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.state.visible && nextProps.visible) {
            this.enter();
        } else if (this.state.visible && !nextProps.visible) {
            this.leave();
        }
    }

    enter() {
        this.setState({
            isShow: true
        })
    }

    leave() {
        this.setState({
            isShow: false
        });
        this.props.onClose()
    }

    render() {
        const mask = this.state.isShow ? <div className={style.dyy} onClick={()=>this.leave()}> </div> : null
        const InnerContent = this.state.isShow ? (
                <div className={style.default}>
                    <div className={style.close} onClick={()=>this.leave()}></div>
                    <div className={style.inner}>{this.props.children}</div>
                </div>
            ) : 
            null
        
        return (
            <div>
                <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {mask}
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup transitionName="slideTop" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    {InnerContent}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Dialog.propTypes = {
    onClose: PropTypes.func,
    visible: PropTypes.bool,
    children:PropTypes.node
};

Dialog.defaultProps = {
    onClose: ()=>null,
    visible: false
};

export default Dialog;