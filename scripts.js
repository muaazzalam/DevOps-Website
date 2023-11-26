// Sample project data
const projects = [
    { name: 'Project 1', technology: 'C#' },
    { name: 'Project 2', technology: 'Java' },
    { name: 'Project 3', technology: 'Node.js' },
    { name: 'Project 4', technology: 'Python' },
    // Add more projects as needed
];

// Sample education data
const courses = [
    { name: 'Course 1', grade: 'A' },
    { name: 'Course 2', grade: 'B' },
    { name: 'Course 3', grade: 'A+' },
    { name: 'Course 4', grade: 'A-' },
    // Add more courses as needed
];

const certifications = [
    { name: 'Certification 1', technology: 'Azure Fundamentals' },
    { name: 'Certification 2', technology: 'JavaScript Developer' },
    { name: 'Certification 3', technology: 'HTML5 and CSS3 Specialist' },
    { name: 'Certification 4', technology: 'Node.js Professional' },

document.addEventListener('DOMContentLoaded', function () {
    // Home Page: No dynamic content needed

    // Projects Page: Populate projects
    const projectList = document.getElementById('projectList');
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = `${project.name} - ${project.technology}`;
        projectList.appendChild(li);
    });

    // Education Page: Populate education
    const courseList = document.getElementById('courseList');
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.name} - Grade: ${course.grade}`;
        courseList.appendChild(li);
    });

    // Filter projects by technology
    const techFilter = document.getElementById('techFilter');
    techFilter.addEventListener('input', function () {
        const filterText = techFilter.value.toLowerCase();
        const filteredProjects = projects.filter(project =>
            project.technology.toLowerCase().includes(filterText)
        );

        // Clear previous list
        projectList.innerHTML = '';

        // Populate filtered projects
        filteredProjects.forEach(project => {
            const li = document.createElement('li');
            li.textContent = `${project.name} - ${project.technology}`;
            projectList.appendChild(li);
        });
    });
});
