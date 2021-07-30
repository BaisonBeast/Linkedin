import React from 'react'
import "./HeaderOption.css"
import Avatar from '@material-ui/core/Avatar';

function HeaderOption({avatar, title, Icon}) {
	return (
		<div className="headerOption">
			{avatar && <Avatar src={avatar} className="headerOption_image"/>}
			{Icon && <Icon className="headerOption_icon"/>}
			<h3 className="headerOption_title">{title}</h3>
		</div>
	)
}

export default HeaderOption