/*

  showView

  accepts the class name of a view you wish to show
  hides all views, and then shows the view you passed it

  Example use:

  showView('.view-checkin');
*/

function showView(viewName) {
  $('.view').hide();
  $(viewName).show();
}

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
