// All this scope is the action creator which returns an action
export const selectUser = (user) => {
  console.log('You clicked on user: ', user.first);
  // What is being returned is the action
  return {
    type: "USER_SELECTED",
    payload: user
  }
};