import React from 'react';
import NewTicketForm from './NewTicketForm';
import ConfirmationQuestions from './ConfirmationQuestions';
import PropTypes from 'prop-types';

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
	}

	render(){
		let currentlyVisibleContent = null;
		if (this.state.formVisibleOnPage){
          currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>;
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

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;
