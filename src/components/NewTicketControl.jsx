import React from 'react';

function NewTicketControl extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			formVisibleOnPage: false
		};
	}
	render(){
		return(
			<div>
				<p>New ticket control works</p>
			</div>
		)
	}
}

export default NewTicketControl;
