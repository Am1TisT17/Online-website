import img1 from '../../../assets/img/Instructor/img1.jpg';
import img2 from '../../../assets/img/Instructor/img2.jpg';
import img3 from '../../../assets/img/Instructor/img3.jpg';

const instructors = [
  {
    id: 1,
    name: 'Hirmar Ubunti',
    position: 'Instructor',
    courses: 2,
    students: 25,
    image: img1,
    email: 'hirmarubunti@gmail.com',
    phone: '+(963) 2145 3454',
    experience: '10 Years',
    reviews: 70,
    rating: 5.0,
    social: [
      { type: 'facebook', url: 'https://facebook.com/hirmarubunti' },
      { type: 'twitter', url: 'https://twitter.com/hirmarubunti' },
      { type: 'linkedin', url: 'https://linkedin.com/in/hirmarubunti' }
    ],
    biography: [
      `The curriculum of the certification program covers a wide range of topics relevant to the field, providing a well-rounded education and preparing candidates to excel in their chosen profession. It may include lectures, interactive sessions, case studies, hands-on projects, and assessments to evaluate the candidates' understanding and proficiency.`,
      `To be eligible for the candidates may need to fulfill certain prerequisite such as completing specific courses, possessing relevant work experience, or holding a related degree or certification.`
    ],
    stats: [
      { value: '100%', label: 'Professional Teacher' },
      { value: '22', label: 'Best Teacher Awards Win' },
      { value: '10', label: 'Government Certificate' }
    ],
    paragraph: "I’m Web Developer. I’m a English and all Teacher with a serious love for teaching. Leverage agile frameworks provide robust synopsis higher leveler overviewed. Iterative and approaches to corporate and strategy's foster collaborative thinking.",
    educationText: `I've spent years figuring out to the teaching technical skills in a classroom environment, and I'm really excited to finally share my expertise with you. I can confidently say that my online courses are doubt the most comprehensive ones on the market.`,
    education: [
      'B.S. State University of New York, United States of America, M.A.C. Ph.D. Urbana-Champaign',
      'B.S. State University of California, United States of America, B.S.C. Ph.D. Urbana-Champaign',
      'B.S. State University of Las Vegas, United States of America, B.S.S. Ph.D. Urbana-Champaign'
    ],
  },
  {
    id: 2,
    name: 'Lily Michelle',
    position: 'Instructor',
    courses: 2,
    students: 25,
    image: img2,
    email: 'lilymichelle@gmail.com',
    phone: '+(963) 2145 3455',
    experience: '8 Years',
    reviews: 55,
    rating: 4.8,
    social: [
      { type: 'facebook', url: 'https://facebook.com/lilymichelle' },
      { type: 'twitter', url: 'https://twitter.com/lilymichelle' }
    ],
    biography: [
      `Lily is a creative web designer with a passion for user experience. She has helped hundreds of students achieve their goals through engaging and practical lessons. Her teaching style is interactive and student-focused, ensuring everyone gets the most out of each session.`,
      `Lily believes in continuous learning and professional growth. She regularly attends international design conferences and brings the latest trends and techniques to her students.`
    ],
    stats: [
      { value: '95%', label: 'Professional Teacher' },
      { value: '15', label: 'Best Teacher Awards Win' },
      { value: '7', label: 'Government Certificate' }
    ],
    educationText: `Sharing my experience in design and UX, I strive to make every lesson engaging and practical for all students.`,
    education: [
      'B.A. Art University of London, UK',
      'M.A. Design Institute, Paris, France'
    ],
  },
  {
    id: 3,
    name: 'Daniel Thomas',
    position: 'Instructor',
    courses: 2,
    students: 25,
    image: img3,
    email: 'danielthomas@gmail.com',
    phone: '+(963) 2145 3456',
    experience: '6 Years',
    reviews: 40,
    rating: 4.7,
    social: [
      { type: 'linkedin', url: 'https://linkedin.com/in/danielthomas' }
    ],
    biography: [
      `Daniel is a full-stack developer and mentor with a focus on real-world applications. He has guided many students from beginner to professional level, emphasizing hands-on projects and teamwork.`,
      `Daniel's mission is to help you become a confident developer ready for any challenge. He is always open to questions and supports his students even after course completion.`
    ],
    stats: [
      { value: '98%', label: 'Professional Teacher' },
      { value: '10', label: 'Best Teacher Awards Win' },
      { value: '5', label: 'Government Certificate' }
    ],
    educationText: `My mission is to help you become a confident developer ready for any challenge.`,
    education: [
      'B.S. Computer Science, MIT, USA',
      'M.S. Software Engineering, Stanford, USA'
    ],
  },
  {
    id: 4,
    name: 'Jennifer Patricia',
    position: 'Instructor',
    courses: 2,
    students: 25,
    image: 'https://via.placeholder.com/180x120',
    email: 'jenniferpatricia@gmail.com',
    phone: '+(963) 2145 3457',
    experience: '5 Years',
    reviews: 35,
    rating: 4.6,
    social: [
      { type: 'facebook', url: 'https://facebook.com/jenniferpatricia' },
      { type: 'twitter', url: 'https://twitter.com/jenniferpatricia' }
    ],
    biography: [
      `Jennifer is an experienced educator with a passion for helping students achieve their academic goals. She specializes in creating engaging learning experiences that make complex topics accessible to all learners.`,
      `With years of teaching experience, Jennifer has developed innovative methods to ensure every student can succeed and reach their full potential.`
    ],
    stats: [
      { value: '92%', label: 'Professional Teacher' },
      { value: '8', label: 'Best Teacher Awards Win' },
      { value: '4', label: 'Government Certificate' }
    ],
    educationText: `I believe every student has the potential to excel, and I'm committed to providing the support and guidance they need to succeed.`,
    education: [
      'B.A. Education, University of Toronto, Canada',
      'M.Ed. Curriculum Development, McGill University, Canada'
    ],
  },
  {
    id: 5,
    name: 'Ethan David',
    position: 'Instructor',
    courses: 2,
    students: 25,
    image: 'https://via.placeholder.com/180x120',
    email: 'ethandavid@gmail.com',
    phone: '+(963) 2145 3458',
    experience: '7 Years',
    reviews: 45,
    rating: 4.5,
    social: [
      { type: 'linkedin', url: 'https://linkedin.com/in/ethandavid' }
    ],
    biography: [
      `Ethan is a dedicated instructor with expertise in modern teaching methodologies. He focuses on practical applications and real-world scenarios to help students understand complex concepts.`,
      `Ethan's approach emphasizes collaboration and hands-on learning, ensuring students develop both theoretical knowledge and practical skills.`
    ],
    stats: [
      { value: '90%', label: 'Professional Teacher' },
      { value: '12', label: 'Best Teacher Awards Win' },
      { value: '6', label: 'Government Certificate' }
    ],
    educationText: `My teaching philosophy centers around making learning accessible, engaging, and relevant to real-world applications.`,
    education: [
      'B.S. Mathematics, University of British Columbia, Canada',
      'M.S. Applied Mathematics, University of Waterloo, Canada'
    ],
  },
  {
    id: 6,
    name: 'Michael Richard',
    position: 'Instructor',
    courses: 2,
    students: 25,
    image: 'https://via.placeholder.com/180x120',
    email: 'michaelrichard@gmail.com',
    phone: '+(963) 2145 3459',
    experience: '9 Years',
    reviews: 60,
    rating: 4.9,
    social: [
      { type: 'facebook', url: 'https://facebook.com/michaelrichard' },
      { type: 'twitter', url: 'https://twitter.com/michaelrichard' },
      { type: 'linkedin', url: 'https://linkedin.com/in/michaelrichard' }
    ],
    biography: [
      `Michael is a seasoned educator with a strong background in technology and innovation. He has helped countless students transition into successful careers in the tech industry.`,
      `Michael's teaching style combines theoretical knowledge with practical experience, providing students with a comprehensive understanding of their field.`
    ],
    stats: [
      { value: '96%', label: 'Professional Teacher' },
      { value: '18', label: 'Best Teacher Awards Win' },
      { value: '8', label: 'Government Certificate' }
    ],
    educationText: `I'm passionate about technology and education, and I love helping students discover their potential in this exciting field.`,
    education: [
      'B.S. Computer Engineering, University of Alberta, Canada',
      'M.S. Software Engineering, University of Calgary, Canada',
      'Ph.D. Computer Science, University of Toronto, Canada'
    ],
  },
  {
    id: 7,
    name: 'Linda Elizabeth',
    position: 'Instructor',
    courses: 2,
    students: 25,
    image: 'https://via.placeholder.com/180x120',
    email: 'lindaelizabeth@gmail.com',
    phone: '+(963) 2145 3460',
    experience: '4 Years',
    reviews: 30,
    rating: 4.4,
    social: [
      { type: 'twitter', url: 'https://twitter.com/lindaelizabeth' }
    ],
    biography: [
      `Linda is a creative and innovative instructor who specializes in interactive learning experiences. She believes in the power of storytelling and visual learning to make complex topics engaging.`,
      `Linda's approach focuses on building confidence and fostering a love for learning in all her students.`
    ],
    stats: [
      { value: '88%', label: 'Professional Teacher' },
      { value: '6', label: 'Best Teacher Awards Win' },
      { value: '3', label: 'Government Certificate' }
    ],
    educationText: `I believe that every student learns differently, and I strive to create an inclusive environment where everyone can thrive.`,
    education: [
      'B.A. Communication Arts, University of Ottawa, Canada',
      'M.A. Digital Media, Ryerson University, Canada'
    ],
  },
  {
    id: 8,
    name: 'James Charlie',
    position: 'Instructor',
    courses: 2,
    students: 25,
    image: 'https://via.placeholder.com/180x120',
    email: 'jamescharlie@gmail.com',
    phone: '+(963) 2145 3461',
    experience: '11 Years',
    reviews: 80,
    rating: 4.8,
    social: [
      { type: 'facebook', url: 'https://facebook.com/jamescharlie' },
      { type: 'linkedin', url: 'https://linkedin.com/in/jamescharlie' }
    ],
    biography: [
      `James is a veteran instructor with over a decade of experience in education. He has developed comprehensive curricula and mentored hundreds of students to success.`,
      `James's expertise lies in creating structured learning paths that guide students from fundamentals to advanced concepts systematically.`
    ],
    stats: [
      { value: '97%', label: 'Professional Teacher' },
      { value: '25', label: 'Best Teacher Awards Win' },
      { value: '12', label: 'Government Certificate' }
    ],
    educationText: `With over a decade of teaching experience, I've learned that the best education combines structured learning with personalized attention.`,
    education: [
      'B.S. Physics, University of Victoria, Canada',
      'M.S. Physics Education, Simon Fraser University, Canada',
      'Ph.D. Educational Technology, University of British Columbia, Canada'
    ],
  },
];

export default instructors;
