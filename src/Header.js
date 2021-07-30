import React from 'react'
import "./Header.css"
import HeaderOption from "./HeaderOption"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsPausedIcon from '@material-ui/icons/NotificationsPaused';

function Header() {
		{/*Random value for face*/}
		const face=Math.floor(Math.random()*10)+1;

	return (
		<div className="header">

		{/*This is the left section of image and search bar*/}
			<div className="header_left">
				<img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" /> 

				<div className="header_search">
					<SearchIcon />
					<input type="text"/> 

				</div>
			</div>

		{/*This is the right section for all the icons*/}
			<div className="header_right">
				<HeaderOption Icon={HomeIcon} title="Home"/>
				<HeaderOption Icon={SupervisorAccountIcon} title="Network"/>
				<HeaderOption Icon={WorkIcon} title="Jobs"/>
				<HeaderOption Icon={SmsIcon} title="Messages"/>
				<HeaderOption Icon={NotificationsPausedIcon} title="Notifications"/>
				<HeaderOption avatar={`https://avatars.dicebear.com/api/human/${face}.svg`} title="me"/>
			</div>
		</div>
	)
}

export default Header