import { home, getPeople, getTodayDate, getMonthsName, getPeopleFromDatabase, createPerson, updatePerson } from '../controllers/controller.js';
// set up the routing
const routes = (app) => {
    // home page
    app.route('/')
        .get(home)
    // GET home page.
    app.route('/home')
        .get(home)
    // Get today's date
    app.route('/today')
        .get(getTodayDate)
    // get list of month names
    app.route('/months')
        .get(getMonthsName)
    // get list of People
    app.route('/people')
        .get(getPeople)
    // get people from DB
    app.route('/peopleList')
        .get(getPeopleFromDatabase)
    // create a new person
    app.route('/createPerson')
        .get(createPerson)
    // update a person
    app.route('/updatePerson')
        .get(updatePerson)
}
// export the route
export default routes;