import React from 'react';
import NewTicketForm from './NewTicketForm';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewTicketControl extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			formVisibleOnPage: false
		};
		//Ts = Troubleshooting
		this.handleTsConfirmation = this.handleTsConfirmation.bind(this);
	}
	handleTsConfirmation(){
		this.setState({formVisibleOnPage: true});
	} //try .bind(this)

	render(){
		let currentlyVisibleContent = null;
		if(this.state.formVisibleOnPage){
			currentlyVisibleContent = <NewTicketForm />;
		} else{
			currentlyVisibleContent = <ConfirmationQuestions onTsConfirmation={this.handleTsConfirmation}/>;
		}
		return(
			<div>
				{currentlyVisibleContent}
			</div>
		)
	}
}

export default NewTicketControl;
