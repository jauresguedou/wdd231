const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]




// 1. Grab container, buttons, and total display
const container = document.getElementById('certificate-section');
const filterButtons = document.querySelectorAll('.filters button');
const totalEl = document.getElementById('total-credits');

// 2. Render & update total
function renderCourses(list) {
  // Clear old cards
  container.innerHTML = '';

  // Build new cards
  list.forEach(course => {
    const card = document.createElement('div');
    card.className = `course-card ${course.completed ? 'completed' : 'incomplete'}`;
    card.innerHTML = `
      <h4>${course.subject} ${course.number}</h4>
      <p><strong>${course.title}</strong></p>
      <p>Credits: ${course.credits}</p>
      <p>${course.technology.join(', ')}</p>
    `;
    container.append(card);
  });

  // Compute and display total credits
  const totalCredits = list.reduce((sum, c) => sum + c.credits, 0);
  totalEl.textContent = `Total Credits: ${totalCredits}`;
}

// 3. Filter handler remains the same
function handleFilter(event) {
  filterButtons.forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const subject = event.currentTarget.dataset.subject;
  const filtered = subject === 'All'
    ? courses
    : courses.filter(c => c.subject === subject);

  renderCourses(filtered);
}

// 4. Wire up on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  filterButtons.forEach(btn =>
    btn.addEventListener('click', handleFilter)
  );

  // Default view: All
  document.querySelector('[data-subject="All"]').classList.add('active');
  renderCourses(courses);
});

