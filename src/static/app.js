
import Dashboard from './views/dashboard/dashboard.js';
import Profile from './views/profile/profile.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {

    // Router Configs. Specify All your routes here. 
    const routes = [ 
        { path: '/', view: Dashboard },
        { path: '/profile', view: Profile },
    ];

    // Map all routes to routeFinder to get currentRoute.
    const routeFinder = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    // Find the current route.
    let currentRoute = routeFinder.find( res => res.isMatch);

    // Fallback in case no route is found. Default to first route in the router config array.
    if(!currentRoute) {
        currentRoute = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new currentRoute.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

// Listens to popstate, to route through history.
window.addEventListener("popstate", router);

// For navigation add all routes to use date-link. Routes to url without reloading. 
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});