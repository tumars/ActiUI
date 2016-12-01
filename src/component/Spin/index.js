import React, { PropTypes } from 'react';
import style from './spin.less';


const spin = ({blur, isFixed}) => (
    <div className={style.content}>
		{blur == null ? null :
			<div className={style.blur}>{blur}</div>
		}
        {!isFixed ? null:
			<div className={style.dyy}></div>
        }
        <div className={style.laballspin} style={isFixed ? {position: 'fixed'} : null}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
    </div>
)

spin.propTypes = {
	isFixed: PropTypes.bool,
    blur: PropTypes.node
}

spin.defaultProps = {
	isFixed: false,
    blur: null
}

export default spin


