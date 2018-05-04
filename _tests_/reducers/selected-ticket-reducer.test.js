import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';

describe("selectedTicketReducer", () => {

  let newTicket1 = {
    type: null
  }

  test('Should return default state if no action type is recognized', () => {
    let newTicket = {
      type: null
    }
    expect(selectedTicketReducer({}, newTicket)).toEqual({});
  });

  test('Should record which ticket has been selected by user', () => {
    let newTicket = {
      type: 'SELECT_TICKET',
      ticketId: 1
    }
    expect(
      selectedTicketReducer({}, newTicket)).toEqual(1);
  });

});
