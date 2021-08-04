import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Sidebar.css";

function Sidebar() {

/*Function for the items on the left side like the hashtags*/
	const recentItem = (Item)=>(
		<div className="sidebar_recentItem">
			<span className="sidebar_hash">#</span>
			<p>{Item}</p>
		</div>
		);

	return (
		<div className="sidebar">
			<div className="sidebar_top">
				<img src="https://freedesignfile.com/upload/2019/02/Pink-watercolor-texture-background-vectors-03.jpg" alt="" />
				<Avatar className="sidebar_avatar"/>
				<h2>Priyanshu suman</h2>
				<h4>Baisonbeast@gmail.com</h4>
			</div>

			<div className="sidebar_stats">
				<div className="sidebar_stat">
					<p>Who viewed you</p>
					<p className="sidebar_value">21</p>
				</div>
				<div className="sidebar_stat">
					<p>Who viewed your post</p>
					<p className="sidebar_value">29</p>
				</div>
			</div>

			<div className="sidebar_bottom">
				{recentItem("Programming")}
				{recentItem("Coding")}
				{recentItem("Developer")}
				{recentItem("DSA")}
				{recentItem("Software")}
			</div>
		</div>
	)
}

export default Sidebar
