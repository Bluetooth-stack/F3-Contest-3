# F3-Contest-3
Authentication using local storage

* Handled authentication using local storage.
* Created ui, 2 pages - signup and profile
* On clicking signup, used local storage to create the state of the user.
* The state of the user saved in localstorage contains all the properties of the user, also consist of an access token.
* Once there is the state of user in the localstorage, redirected the user to a page called /profile. Displayed user’s details there
* On clicking of the logout button, set all the states back to null and also get rid of the access token.
* When a user manually tries to go to /profile, if the local storage does not contain the accesstoken the user is redirected to the signup page.
* Similarly if the localstorage has an accesstoken and tries to go to the signup page, the user can't do so and is redirected to the profile page.
* Showed success and errors for all input fields via ui and used alert for other.
