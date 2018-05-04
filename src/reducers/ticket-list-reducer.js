export default (state = {}, action) => {
  let newState;
  const { name, location, issue, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
  case 'ADD_TICKET':
    newState = Object.assign({}, state, {
      [id]: {
        name: name,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;

  case 'UPDATE_TIME':
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: newTicket
    });
    return newState;

  default:
    return state;
  }
};
