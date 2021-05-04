const projects = [
    {
        deployedURL: "https://goal-tracker-kscc.herokuapp.com/",
        image: "/assets/images/goal-tracker-homepage.png",
        alt: "",
        title: "Goal Tracker",
        description: "Application allows user to signup/login where they can Create/Read/Update/Delete goals and milestones within beautiful UI/UX. Information stored in JawsDB database with Express server routing.",
        technologies: ["HTML", "CSS3", "Javascript", "Materialize", "JQuery", "Node.js", "NPM", "Express", "Handlebars.js", "MySQL", "Sequelize", "ApexCharts"],
        github: "https://github.com/koltondecker/goal-tracker",
        icon: "far fa-calendar-check fa-3x"
    },
    {
        deployedURL: "https://koltondecker.github.io/quarantinis/",
        image: "/assets/images/quarantinis-landing-page.jpg",
        alt: "",
        title: "quarantinis: A Cocktail Recipe Generator",
        description: "Utilizes jQuery ajax calls to cocktailsDB API and dynamically generates cards with cocktail recipes to the webpage for the user to view and interact with. MapQuest API implemented to display breweries based on searched city. Local storage stores saved recipes.",
        technologies: ["HTML", "CSS3", "Javascript", "Materialize", "JQuery", "Ajax Api Calls"],
        github: "https://github.com/koltondecker/quarantinis",
        icon: "fas fa-glass-cheers fa-3x"
    },
    {
        deployedURL: "https://koltondecker.github.io/Weather-Dashboard/",
        image: "/assets/images/weather-dashboard-project.png",
        alt: "",
        title: "Weather Dashboard",
        description: "A simple one-page dashboard that displays current and 5 day forecast weather for the location user searches (user may use current location). Open Weather Map API is used to ajax call for data based on city name. Last 10 searched cities are stored in list on dashboard for quick search.",
        technologies: ["HTML", "CSS3", "Javascript", "JQuery", "Ajax Api Calls", "Bootstrap"],
        github: "https://github.com/koltondecker/Weather-Dashboard",
        icon: "fas fa-cloud-sun fa-3x"
    },
    {
        deployedURL: "https://burger-logger-kolton-decker.herokuapp.com/",
        image: "/assets/images/burger-logger.png",
        alt: "",
        title: "Eat Da Burger: Burger Logger",
        description: "A stylistically fun and interactive logger built to allow the user to add burgers to a list called 'Ready to Be Eaten' where they are prompted with buttons to 'devour' the burger moving it to a separate list. The user can then delete any burgers that have been devoured. This is an NPM project and all data is processed and stored in a MySQL database.",
        technologies: ["HTML", "CSS3", "Javascript", "Materialize", "JQuery", "Node.js", "NPM", "Express", "MySQL"],
        github: "https://github.com/koltondecker/burger-logger",
        icon: "fas fa-hamburger fa-3x"
    }
];

export default projects;