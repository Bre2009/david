/*

  finishedCurrentView

  redirects the app to the holding page

  should be used when a user has finished with a particular view

  see /app/checkin/checkin.js for an example of this in action
*/

function finishedCurrentView() {
  window.location.href = '/app/holding';
}


/*

  startLoadingAnimation

  displays a universal loadingAnimation

*/

function startLoadingAnimation() {

}

/*

  stopLoadingAnimation

  removes the universal loadingAnimation

*/

function stopLoadingAnimation() {

}
// This is a function that will allow us to store each decision with the username of each user
//for this we will need to use this line: var username = getUsername(); on each decision function.
function getUsername() {
	var username = localStorage.getItem('username');
	return username;
}