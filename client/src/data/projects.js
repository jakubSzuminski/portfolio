//todo: add features for headers!
const projects = 
[
    {
        title: 'Remindii',
        link: 'https://www.remindii.pl',
        github: 'https://github.com/jakubSzuminski/remindii',
        description: `
        SaaS application that sends phone messages notifying clients about arranged visits.+n
        Remindii currently has 5 subscribers, helping them remind their patients about visits.+n
        `,
        more: `
        #h2How it works+n
        Not being reminded of arranged appointments is a pain all patients have (especially
        in smaller towns and in small/medium-sized doctor's offices)+n
        Not everyone is willing to hire a full-time receptionist. Doctors could sit on their phones
        and send the phone messages themselves, but it would be a highly time-consuming, low ROI activity
        for them.+n
        Our application sends reminders a day before a visit, asking the patient to confirm the visit and giving
        him information about the exact location of the place and the time of the appointment.+n
        The only thing the doctor has to do is fill his Google Calendar with appointments and patients' phone numbers.+n

        #h2Technologies+n
        You can check the code on the project's GitHub.+n

        #h2Stages of development+n
        #h3Design+n
        - designed the landing page in Figma+s+n
        - created the design with HTML & SCSS+n
        #h3Development+n
        #h4APIs+n
        - used Google Calendar API to access clients' calendar events+s+n
        - used Twilio API to send phone messages+s+n
        - used Stripe API to accept payments (subscription-mode) [reading webhooks]+n
        #h4Database+n
        - stored user data in a serverless instance of MongoDB (MDB Atlas)+s+n
        - used mongoose for database operations+n
        #h4Authentication+n
        - user logs in, a JWT token is generated and added as a cookie+s+n
        - used Google OAuth2 with passport+s+n
        - used JWT (jsonwebtoken) for token generation and verification+s+n
        - used js-cookie for reading & setting cookies+n
        #h4Client-Server Communication+n
        - used axios for making requests to the server+s+n
        - used forms in React to pass client's data to the server (with POST request)+n
        #h4Client+n
        - used Redux with Redux-Thunk for state management+n
        #h4Final Stage+n
        - set a Heroku-Scheduler add-on so that the messages are sent once a day at 11 AM (Warsaw Time)+s+n
        - deployed to Heroku+s+n
        - bought a domain+s+n
        - added SSL certificate+s+n
        - forced automatic https redirects+s+n
        - added Google Analytics+n
        #h4Launch+n
        - started a local marketing campaign+s+n
        - managed to land 4 clients within the first week
        `
    },
    {
        title: 'Architekturo',
        link: 'https://www.architekturo.pl',
        github: 'https://github.com/jakubSzuminski/blog-mern-architekturo',
        description: `
        Architekturo is a blog website application created as a part of my freelancing work.`,
        more: `
        #h2Features+n
        #h3Admin Panel+n
        the admin user has access to the admin panel from which it is possible to 
        create & edit posts (with rich text editor)+n
        #h3Authentication+n
        users can register & log in+n
        #h3Commenting+n
        users can comment on posts (& delete their comments)+n
        #h3Searching+n
        users can search through all the posts by phrase or by tags+n
        #h2Technologies+n
        #h3Frontend+n
        React, Redux, SCSS+n
        #h3Backend+n
        Node.js, Express, MongoDB+n
        #h3Packages+n
        jsonwebtoken, mongoose, react-router-dom+n
        Google Analytics was added to the site & all the traffic is tracked.
        `
    },
    {
        title: 'Portfolio',
        link: 'https://www.jakubszuminski.com',
        github: 'https://github.com/jakubSzuminski/portfolio',
        description: `
        This is the website I've created to showcase my work & my front-end skills. 
        `,
        more: `
        #h2Technologies+n
        #h3Frontend+n
        React, Redux, HTML, SCSS, SVG (animations)+n
        #h3Backend+n
        Node.js, Express+n
        The site was deployed to Heroku, has valid SSL certificate and automatic https redirects.
        `
    },
    {
        title: 'Rewer',
        link: 'http://www.turbosprezarki-torun.pl/',
        github: 'https://github.com/jakubSzuminski/rewer-turbo-landingpage',
        description: `
        This is one of the landing pages I've created to get customers to call the car repair shop I worked for.
        `,
        more: `
        This website was created with HTML & CSS (and very basic JavaScript).+n
        It replaced the outdated website they used to have which increased the number of calls they received every single day.
        `
    }
]

export default projects;