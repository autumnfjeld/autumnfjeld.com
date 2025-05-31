var pug = require("pug");

/**
 * General persona & work data
 * @type {Object}
 */
var general = {
  firstName: "Autumn",
  lastName: "Fjeld",
  email: "autumnfjeld@gmail.com",
  careerTitle: "Technical Product Manager • Product Engineer",
  resumeLink: "media/AutumnFjeld_Resume_20250521.pdf",
  webProfiles: {
    theautbot: {
      url: "https://autbot.vercel.app",
      icon: "fa-female",
    },
    linkedIn: {
      url: "https://www.linkedin.com/in/autumnfjeld",
      icon: "fa-linkedin",
    },
    twitter: {
      url: "https://twitter.com/autaut",
      icon: "fa-twitter",
    },
    github: {
      url: "https://github.com/autumnfjeld",
      icon: "fa-github",
    },
    instagram: {
      url: "",
      icon: "fa-instagram", 
    },
    currentJob: {
      url: "https://www.ustwo.com",
      icon: "fa-user",
    },
    email: {
      url: "mailto:autumnfjeld@gmail.com",
      icon: "fa-paper-plane-o",
    },
  },
  // introBlurb: "What can I build for you!?"
};

/**
 * Work Experience data
 * @type {Object}
 */
var workExperience = [
  {
    order: 19,
    company: "WordPress.com at Automattic",
    description: "Automattic is the company behind Wordpress.com, Jetpack, WooCommerce, and the open source WordPress project.  WordPress powers 43% of the world\’s websites.",
    title: "Product Engineering Lead",
    location: "Remote",
    startDate: "July 2020",
    endDate: "April 2025",
    companyBlurb: "WordPress.com is a hosted blogging platform and website builder. Automattic is the parent company of WordPress.com, WooCommerce Jetpack, and many other products.",
    items: [
 
      
      '<b>Evolved the signup and onboarding funnel</b>, via iterative development in the steps where  new users create accounts, select domains and pricing plans, and begin their site-building journey. Balanced user experience with business impact in a technically complex product, experimenting with funnel steps like paywall placement and niche onboarding pathways. Drove changes based on behavioral analytics (drop-offs, refund rates, early churn) and qualitative feedback, optimizing for conversion and revenue.',

       '<b>Launched the Design-Your-Own site builder</b>, the precursor to <a href="http://WordPress.com" target="_blank">WordPress.com AI site builder</a>. Drove engagement in customer onboarding, by creating invested users early in the onboarding funnel. Measured success regularly via customer interviews, user behavior analytics, and visual review of the hundreds of sites of converted (paid) customers.Featured in a <a href="https://wordpress.com/blog/2023/05/30/custom-theme-designs/" target="_blank">WordPress.com blog post</a> and <a href="https://sydney.wordcamp.org/2024/session/design-for-devs-making-the-most-of-patterns/" target="_blank"> WordCamp Sydney 2024 talk</a>.',

      '<b>Directed a platform-wide UI and IA simplification initiative</b>, decoupling WordPress.com hosting from WordPress Core site building features. Required meticulous analysis of entangled functionality, feature usage and revenue statistics, and collaboration across multiple WordPress ecosystems to ensure methodical product consolidation. See announcements <a href="https://wordpress.com/blog/2024/03/04/new-wp-admin/" target="_blank">new-wp-admin</a> and <a href="https://wordpress.com/blog/2024/06/10/hosting-dashboard/" target="_blank">hosting-dashboard</a>.',

      '<b>Led the Content Modeling plugin development</b>, an agency marketing initiative that showcased our creative leveraging of the latest WordPress features to build a new <a href="https://github.com/Automattic/create-content-model" target="_blank">content creation tool</a>.  Created business opportunity leads by demoing the project to agencies as a proof of innovation and to boost WordPress.com\'s appeal to technical customers. Generated excitement in <a href="https://youtu.be/nKntUgxnZuY?list=PL1pJFUVKQ7ET119A4Gb2bBfRFYSEbJlDB&t=3433" target="_blank">the open source community} on the potential of new Editor features. </a>',

      '<b>Led as a force multiplier</b>, creating high performing teams who were given the hard projects. Introduced product analytics training, customer outreach processes, made every team meeting a place for feedback and introspection, developed new leads, and ensured my team was never siloed or satisfied with just what was assigned to us.',

      '<b>Engaged with the community</b>, leading in-product customer interviews, usability sessions, and behavior analysis, in addition to creative local and global outreach. At conferences like WordCamp I volunteered, worked booths, gave feature-focused talks, and ran impromptu guerrilla usability tests with attendees willing to show me how they used the product. These conversations often revealed friction points and unmet needs that didn\'t surface in analytics alone. ',
  
    ],
  },
  {
    order: 18,
    company: "ustwo Digital Design Agency", 
    description: '<a href=https://ustwo.com/" target="_blank">ustwo</a> is a global digital design agency parterning with industry-leading brands. I was a product engineer working in driven product teams that delivered bespoke software solutions.',
    title: "Full-stack Product Engineer",
    location: "Sydney, Australia",
    startDate: "Jan 2018",
    endDate: "June 2020",
    items: [
    

      '<b>Create with Google</b>, (Rebranded to Think with Google) Part of the founding product team that launched <a href="https://www.google.com/search?q=create+with+google" target="_blank">Create with Google</a> suite of products.  Delivered two projects under Google\'s infrastructure standards. Managed dev-side stakeholder/client management. Primary full-stack engineer for the YouTube Mockup Tool (GAE, Python, Webapp2, Angular) and technical lead on CMS rebuild of the Create with Google website (GAE, Python, Jinja).',

      '<b>Qantas Airlines</b>, designed and built backend architecture for <a href="https://www.pointhacks.com.au/news/qantas-card-companion/" target="_blank">Qantas Card Companion</a> app (React, Node.js, TypeScript, GraphQL, DynamoDB, Elasticsearch ) hosted on AWS.  Collaborated with Qantas engineers and ensured compliance with rigorous enterprise security and QA practices.',
      
      '<b>Cochlear CoPilot</b>, an assistive app for maximizing functionality of <a href="https://www.cochlear.com/us/en/home/ongoing-care-and-support/rehabilitation-resources/copilot" target="_blank">Cochlear\'s hearing implant devices</a>. Responsible for python back-end, data transformation, and shepherding through AWS security architecture per medical and regulatory standards.',

      '<b>BlueCats</b>, company website. Sole engineer responsible for all technical decisions in the tech stack, build pipeline, and hosting. (Angular7, Netlify, Contentful CMS).',
      
      '<b>Lumi</b>, turning language into light</a>: an internal ustwo project using Philips Hue Lights, a Google Home, and node.js controller,  I built a Google voice driven web app that changed the lighting to reflect a person\'s mood. Read my post <a href="https://www.ustwo.com/blog/turning-language-into-light" target="_blank">Turning Language into Light</a>.',
      
    ],
  },
  {
    order: 16,
    company: "Freelance & Personal Projects",
    title: "Lifelong learner",
    location: "San Francisco,CA",
    startDate: "Then",
    endDate: "Always",
    items: [
      'autumnfjeld.com, where you are now. 😃  Hosted zone on AWS, S3, and previously with AWS Microservices for the contact form. ',

      'Website for <a href="http://alexgreaney.com/" target="_blank">Computational Materials research group</a> at the University of California Riverside. Hosted on AWS, S3 with Microservices, npm as build tool, script to parse <a href="http://www.bibtex.org/Format" target="_blank">bibtex</a> journal listings to html.',
      //  <a href="https://github.com/autumnfjeld/dralexgreaney" target="_blank">Github.</a> ',
            
      'My interactive resume <a href="https://autbot.vercel.app/" target="_blank">The AutBot</a>, a toy RAG app (Python, llama-index, React).',

      'Design education via Coursera\'s <a href="https://www.coursera.org/specializations/graphic-design" target="_blank">Graphic Design Specialization</a> created by California Institute of the Arts.',

      'During my post-doc in Austria, edited scientific manuscripts for non-native English speakers leading to publication in high profile scientific journals.'

    ],
  },
  {
    order: 15,
    company: "Talentbin by Monster",
    title: "Software Engineer",
    location: "San Francisco, CA",
    startDate: "Apr 2016",
    endDate: "Nov 2018",
    items: [
      "Full-stack software engineer, with front-end emphasis, built and maintained enterprise recruiting web application. Tech stack: Java, PHP, Javascript (Backbone, Ractive).",
      "Architect new code patterns with modern frameworks to replace, or coexist with, legacy code.",
      "Built chrome extension app, a mini-version of our main site that pulls data from social network sites to match existing profiles in our database.",
      "Helped a growing team migrate from start-up culture to a well-defined agile-scrum work process. Created documentation, proactively recommend improvements in communication and tools (git, slack, zapier, wiki).",
      "Ran team lunch & learn sessions, motivated team to share technical learnings and challenges.",
      "Ruthless about getting team members to document their work in our git wiki!",
      "Supervised two computer science interns, guiding them through the complexities of a large codebase and teaching them in first experiences in front-end web development.",
    ],
  },
  {
    order: 14,
    company: "Ziploop",
    title: "Software Engineer",
    location: "Orinda, CA",
    startDate: "Apr 2014",
    endDate: "Apr 2016",
    items: [
      "Designed and implemented front-end components of mobile consumer app and two enterprise sites in AngularJS framework. Worked closely with President to design UI/UX.",
      "Collaborated with founding CTO to architect components, maintain build processes (grunt, gulp, git, unix scripts), choose frameworks, modules, and pushed to keep a clean, maintainable code base.",
      "Refactored many parts of chaotic, legacy codebase to maintainability and sanity (SASS, Angular best practices).",
      "Solved load time problems for large list of images, via ImageMagick script to produce uniform images, at the right balance of size and quality for optimal page performance. Continually strove for pixel perfect UI/UX.",
      "Managed collaborations between lead developer and non-technical president, supervised two junior engineers and an assistant to develop her technical graphic design skills.",
    ],
  },
  {
    order: 12,
    company: "NUMECA International",
    title: "Engineer & Consultant",
    location: "San Francisco",
    startDate: "Nov 2010",
    endDate: "Apr 2012",
    items: [
      "Provided consulting support to engineers at Boeing, Honeywell, SpaceX on using NUMECA’s computational fluid dynamics software tools, delivering solutions in meshing, solver setup, and post-processing.",
      "Improved fluid dynamics and meshing software as an integral part of the feedback loop for identifying and troubleshooting software bugs, user-friendliness, and scientific accuracy issues.",
      "Created and delivered technical training webinars twice a month to NUMECA’s user base.",
    ],
  },

  {
    order: 10,
    company: "University of Leoben, Austria",
    title: "Post Doctoral Researcher",
    location: "Leoben, Austria",
    startDate: "Jun 2006",
    endDate: "Nov 2010",
    items: [
      "Created a computational model of a large casting process to simulate flow and heat transfer phenomena for an Austrian steel making company.",

      "Expanded functionality of commercial simulation software with user defined functions in C and data processing scripts in scheme. Used Matlab extensively for data analysis. Tested feasibility of open source simulation framework, OpenFOAM.",

      "Defined experimental investigations for industry partner to get input and validation data for simulations.",
    ],
  },
  // {
  //     order: 0,
  //     company: '',
  //     title: '',
  //     location:'',
  //     startDate: '',
  //     endDate: '',
  //     items: [
  //         '',
  //         ''
  //     ]
  // }
];

/**
 * Skill set data
 * @type {*[]}
 */
var skills = [
  {
    title: "Product & Leadership",
    skills: [
      {
        id: 1,
        colorId: 1,
        skill: "Deliberate communicator",
        completed: "95%",
        toolTip:
          "I strive to keep coworkers informed and clearly communicate ideas and documentation",
      },
      {
        id: 2,
        colorId: 2,
        skill: "Stakeholder management",
        completed: "90%",
      },
      {
        id: 3,
        colorId: 3,
        skill: "Distilling ambiguity",
        completed: "90%",
      },
      {
        id: 4,
        colorId: 4,
        skill: "Motivator",
        completed: "99%",
      },
      {
        id: 4,
        colorId: 1,
        skill: "Fun!",
        completed: "99%",
      },
    ],
  },
  {
    title: "Languages",
    skills: [
      {
        id: 15,
        colorId: 1,
        skill: "HTML5 / CSS3",
        completed: "80%",
      },
      {
        id: 2,
        colorId: 2,
        skill: "Javascript",
        completed: "80%",
      },
      {
        id: 10,
        colorId: 2,
        skill: "TypeScript",
        completed: "80%",
      },
      {
        id: 60,
        colorId: 3,
        skill: "PHP",
        completed: "40%",
      },
      {
        id: 50,
        colorId: 4,
        skill: "Java",
        completed: "30%",
      },
      {
        id: 20,
        colorId: 1,
        skill: "Python",
        completed: "20%",
      },
    ],
  },
  {
    title: "Libraries/Frameworks",
    skills: [
      {
        id: 1,
        colorId: 1,
        skill: "AngularJS",
        link: "https://angularjs.org/",
        completed: "80%",
      },
      {
        id: 10,
        colorId: 1,
        skill: "Angular6+",
        link: "https://angularjs.org/",
        completed: "80%",
      },
      {
        id: 20,
        colorId: 4,
        skill: "React",
        completed: "80%",
      },
      {
        id: 30,
        colorId: 2,
        skill: "Backbone",
        completed: "70%",
      },
      {
        id: 40,
        colorId: 3,
        skill: "Jasmine/Mocha",
        completed: "50%",
      },
      {
        id: 50,
        colorId: 4,
        skill: "jQuery",
        completed: "80%",
      },
      {
        id: 60,
        colorId: 1,
        skill: "Ractive.js",
        completed: "70%",
      },
      {
        id: 35,
        colorId: 2,
        skill: "D3.js",
        completed: "30%",
      },
      {
        id: 70,
        colorId: 3,
        skill: "Yii",
        completed: "30%",
      },
      {
        id: 12,
        colorId: 3,
        skill: "Jinja/Django",
        completed: "30%",
      },
    ],
  },
  {
    title: "Database/Backend/Server",
    skills: [
      {
        id: 1,
        colorId: 1,
        skill: "Mongo",
        completed: "60%",
      },
      {
        id: 2,
        colorId: 2,
        skill: "MySQL",
        completed: "50%",
      },
      {
        id: 3,
        colorId: 3,
        skill: "Node.js",
        completed: "55%",
      },
      {
        id: 4,
        colorId: 4,
        skill: "webapp2",
        completed: "70%",
      },
      {
        id: 5,
        colorId: 5,
        skill: "Google App Engine",
        completed: "70%",
      },
      {
        id: 12,
        colorId: 6,
        skill: "Flask",
        completed: "30%",
      },
    ],
  },
  {
    title: "Software/Tools/Design",
    skills: [
      {
        id: 1,
        colorId: 1,
        skill: "Sketch",
        link: "https://www.sketchapp.com/",
        completed: "40%",
        toolTip:
          "Using sketch regularly and it is becoming my go-to design tool",
      },
      {
        id: 2,
        colorId: 2,
        skill: "Adobe Illustrator",
        completed: "60%",
      },
      {
        id: 3,
        colorId: 3,
        skill: "Photoshop",
        completed: "30%",
      },
      {
        id: 4,
        colorId: 4,
        skill: "Imagemagick",
        link: "http://www.imagemagick.org/",
        completed: "30%",
      },
      {
        id: 5,
        colorId: 1,
        skill: "GitHub",
        link: "http://www.github.com/autumnfjeld",
        completed: "85%",
      },
      {
        id: 6,
        colorId: 2,
        skill: "Gulp/Grunt",
        // link: 'http://www.github.com/autumnfjeld',
        completed: "85%",
      },
      {
        id: 7,
        colorId: 3,
        skill: "NPM as build tool",
        link: "https://github.com/autumnfjeld/dralexgreaney",
        completed: "85%",
      },
      {
        id: 8,
        colorId: 4,
        skill: "Latex",
        link: "https://www.latex-project.org",
        completed: "85%",
      },
      {
        id: 9,
        colorId: 1,
        skill: "Google Analytics",
        link: "https://analytics.google.com",
        completed: "85%",
      },
    ],
  },
  {
    title: "Amazon Web Services",
    skills: [
      {
        id: 1,
        colorId: 1,
        skill: "SES",
        completed: "60%",
      },
      {
        id: 2,
        colorId: 2,
        skill: "Lamba Functions",
        completed: "60%",
      },
      {
        id: 3,
        colorId: 3,
        skill: "API Microservices",
        completed: "60%",
      },
      {
        id: 4,
        colorId: 4,
        skill: "Route 53",
        completed: "60%",
      },
      {
        id: 5,
        colorId: 1,
        skill: "Simple Storage Service (S3) ",
        completed: "60%",
      },
      {
        id: 5,
        colorId: 2,
        skill: "Boto - AWS SDK for Python ",
        link: "https://aws.amazon.com/sdk-for-python/",
        completed: "60%",
      },
      {
        id: 6,
        colorId: 3,
        skill: "Kibana",
        link: "https://aws.amazon.com/elasticsearch-service/kibana/",
        completed: "85%",
      },
    ],
  },

];

/**
 * Fun Facts Data
 * @type {Object}
 */
var funFacts = [
  {
    title: "Traveling",
    blurb:
      "I've lived on four continents: Africa, Europe, N. America, and Australia. And have traveled to all except Antarctica. Nothing is more thrilling than stepping into a new place on earth, eating tasty unfamiliar delicacies, smiling at new people, immersing oneself in a new culture. Some recent explorations: Thailand, Bali, Auckland, Cuba, Baja California, Republic of Georgia, Portugal, Colombia, San Francisco, CA, Washington, D.C.",
  },
  {
    title: "Austria",
    blurb:
      "I was a post-doctoral researcher at a university in Austria for over four years, in my computational fluid dynamics phase of life.  While there I was determined to become fluent in German and started weekly German-learning conversational group for us foreigners living in Leoben, Austria. Basic fluency achieved, even with the Austrian dialect!",
  },
  {
    title: "Creativity",
    blurb:
      "Occasional creator of colorful clothes, jewelry, bags (when I have time to dust off my sewing machine). I thrive on color. The combination of tech and creativity is why I fit so well in web development and design--and why I left Materials Science for WebDev. Current projects include painting the house I bought in 2020 every fun color possible!",
  },
  {
    title: "Volunteering",
    blurb:
      "I was a math tutor volunteer in a San Francisco middle-school, helping kids who are struggling with math meet state education requirements.  I've been a volunteer in many different roles over the years.  Past volunteer experiences: tutor for Women Who Code, high school prep classes for underprivileged kids. I wish I did more of this.",
  },
  {
    title: "Reading",
    blurb:
      "I received a trophy for reading 100 books in first grade--thank you Mom!  Now I generally divide my reading time between novels, skill improvement books, and <i>The New Yorker</i>.  Some of my favorite recent reads:  <i> The Rabbit Hutch</i> <i>Tomorrow, and Tomorrow, and Tomorrow</i>, <i>Lessons in Chemistry</i>, <i>Lessons from the Edge: A Memoir</i>, <i>The Short and Tragic LIfe of Robert Peace</i>, <i>Creativity, Inc.</i>, <i>Beautiful Ruins</i>, <i>Where'd You Go Bernadette</i>.",
  },
  {
      title: 'Bucket List',
      blurb: 'Learn spanish fluently. Learn to play a musical instrument. Become a fashion designer (this one might have to wait til in my next life). Do something meaningful to get more girls into STEM fields. Visit all 50 US states & Puerto Rico. Become a foreign diplomat (possibly a stretch for this lifetime).'
  },
];

/**
 * Portfolio data
 * @type {{title1: string, title2: string, img: {primary: string, thumb: string, title: string}}}
 */
var portfolio = {
  title1: "This is title1",
  title2: "title2",
  img: {
    primary: "media/portfolio-item-zoom.jpg",
    thumb: "media/portfolio-item-thumb.jpg",
    title: "Image title",
  },
};

exports.app = {
  general: general,
  workExperience: workExperience,
  skills: skills,
  funFacts: funFacts,
  portfolio: portfolio,
};
