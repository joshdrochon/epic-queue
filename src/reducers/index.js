//module index
import selectedTickeReducer from './selected-ticket-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedTicket: selectedTickeReducer,
  masterTicketList: ticketListReducer
});
export default rootReducer;
