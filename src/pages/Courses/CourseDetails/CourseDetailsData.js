const courseDetailsData = [
  {
    id: 1,
    title: "Education Software and PHP and JS System Script",
    category: "Web Development",
    lastUpdate: "20 Jun, 2023",
    review: 4.7,
    reviewCount: 27,
    price: 80,
    discount: 25,
    instructor: "Travis Scott",
    lessons: 8,
    duration: "15h 30m 36s",
    level: "Beginner",
    language: "English",
    quizzes: 4,
    image: "/assets/img/CoursesList/img.jpg",
    ava: '/src/assets/img/CoursesDetails/travis.jpg',
    description: `Rapidly develop parallel e-markets via worldwide paradigms. Quickly synergize cutting-edge scenarios and professional results. Assertively deliver cross-media results before client-centric results. Uniquely initiate intuitive communications through process-centric internal or "organic" sources. Energetically reinvent distinctive value via parallel services. Proactively deploy extensive paradigms via e-services and manufactured products. Uniquely coordinate impactful services whereas team building e-services. Globally grow multimedia based benefits vis-a-vis client-based niches.

Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal "outside the box" thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.`,
    whatWillYouLearn: [
      "Understand the basics of PHP and JavaScript integration",
      "Build a simple education management system",
      "Work with databases for storing user and coReviewurse data",
      "Implement user authentication and authorization",
      "Create dynamic web pages using JS and PHP",
      "Deploy your project to a live server"
    ],
    certification: `This certificate validates your ability to build and deploy a basic education management system using PHP and JavaScript. It demonstrates your understanding of backend and frontend integration, user management, and deployment best practices.`
  },
  {
    id: 2,
    title: "JavaScript Pro: From Zero to Hero",
    category: "Web Development",
    lastUpdate: "10 May, 2023",
    review: 4.9,
    reviewCount: 54,
    price: 120,
    discount: 30,
    instructor: "Anna Smith",
    lessons: 20,
    duration: "25h 10m 00s",
    level: "Advanced",
    language: "English",
    quizzes: 8,
    image: "/assets/img/CoursesList/img.jpg",
    ava: '/src/assets/img/CoursesDetails/travis.jpg',
    description: `Master JavaScript from the ground up. This course covers everything from basic syntax to advanced concepts like closures, async/await, and design patterns. You'll build real-world projects and gain the confidence to tackle any JS challenge.

Whether you're preparing for a job interview or want to create your own applications, this course will give you the skills and knowledge to succeed in the modern JavaScript ecosystem.`,
    whatWillYouLearn: [
      "JavaScript fundamentals and ES6+ features",
      "Asynchronous programming: callbacks, promises, async/await",
      "Object-oriented and functional programming in JS",
      "DOM manipulation and event handling",
      "Error handling and debugging",
      "Building and deploying real-world JS projects"
    ],
    certification: `Awarded for successfully completing all modules and projects, this certificate proves your advanced proficiency in JavaScript and your ability to build complex, scalable web applications.`
  },
  {
    id: 3,
    title: "React & Redux: Modern Frontend Development",
    category: "Frontend",
    lastUpdate: "05 Apr, 2023",
    review: 4.8,
    reviewCount: 39,
    price: 100,
    discount: 20,
    instructor: "John Miller",
    lessons: 16,
    duration: "18h 45m 12s",
    level: "Intermediate",
    language: "English",
    quizzes: 6,
    image: "/assets/img/CoursesList/img.jpg",
    ava: '/src/assets/img/CoursesDetails/travis.jpg',
    description: `Learn how to build fast, scalable, and maintainable web applications using React and Redux. This course covers everything from React basics to advanced state management, hooks, and middleware.

You'll create several projects, including a full-featured task manager, and learn best practices for structuring and testing your code.`,
    whatWillYouLearn: [
      "React fundamentals: components, props, state",
      "React Hooks and functional components",
      "Redux for global state management",
      "Middleware and async actions with Redux Thunk",
      "Testing React applications",
      "Deploying React apps to production"
    ],
    certification: `This certificate confirms your ability to develop modern frontend applications using React and Redux, including state management, hooks, and deployment.`
  },
  {
    id: 4,
    title: "UI/UX Design Essentials with Figma",
    category: "Design",
    lastUpdate: "15 Mar, 2023",
    review: 4.6,
    reviewCount: 22,
    price: 60,
    discount: 10,
    instructor: "Emily Clark",
    lessons: 12,
    duration: "12h 00m 00s",
    level: "Beginner",
    language: "English",
    quizzes: 3,
    image: "/assets/img/CoursesList/img.jpg",
    ava: '',
    description: `Kickstart your career in UI/UX design with this hands-on Figma course. Learn the principles of user interface and user experience design, create wireframes, prototypes, and stunning visual layouts.

No prior design experience required — this course is perfect for beginners and aspiring designers.`,
    whatWillYouLearn: [
      "Figma interface and essential tools",
      "Wireframing and prototyping techniques",
      "Designing responsive layouts",
      "Color theory and typography basics",
      "User testing and feedback",
      "Exporting assets for development"
    ],
    certification: `Upon completion, you will receive a certificate demonstrating your proficiency in UI/UX design fundamentals and Figma workflows.`
  },
  {
    id: 5,
    title: "Python for Data Science and Machine Learning",
    category: "Data Science",
    lastUpdate: "28 Feb, 2023",
    review: 4.9,
    reviewCount: 61,
    price: 150,
    discount: 35,
    instructor: "Michael Brown",
    lessons: 24,
    duration: "30h 20m 00s",
    level: "Advanced",
    language: "English",
    quizzes: 10,
    image: "/assets/img/CoursesList/img.jpg",
    ava: '',
    description: `Unlock the power of Python for data analysis, visualization, and machine learning. This comprehensive course covers everything from Numpy and Pandas to Scikit-learn and deep learning basics.

You'll work on real datasets and build predictive models for real-world problems.`,
    whatWillYouLearn: [
      "Python basics and data structures",
      "Data analysis with Pandas and Numpy",
      "Data visualization with Matplotlib and Seaborn",
      "Machine learning with Scikit-learn",
      "Introduction to deep learning",
      "Building and evaluating predictive models"
    ],
    certification: `This certificate demonstrates your expertise in Python for data science, including data analysis, visualization, and machine learning techniques.`
  },
  {
    id: 6,
    title: "Fullstack Web Development Bootcamp",
    category: "Web Development",
    lastUpdate: "12 Jan, 2023",
    review: 4.8,
    reviewCount: 45,
    price: 200,
    discount: 40,
    instructor: "Sophia Lee",
    lessons: 30,
    duration: "40h 00m 00s",
    level: "Intermediate",
    language: "English",
    quizzes: 12,
    image: "/assets/img/CoursesList/img.jpg",
    ava: '',
    description: `Become a fullstack developer! This bootcamp covers HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React. You'll build several fullstack projects and learn how to deploy them to the cloud.

Perfect for those who want to master both frontend and backend development.`,
    whatWillYouLearn: [
      "HTML, CSS, and modern JavaScript",
      "Building RESTful APIs with Node.js and Express",
      "Database management with MongoDB",
      "Frontend development with React",
      "Authentication and security best practices",
      "Deploying fullstack apps to the cloud"
    ],
    certification: `This certificate confirms your ability to build and deploy fullstack web applications using the latest technologies and best practices.`
  }
];

export default courseDetailsData;
