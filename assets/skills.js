// Sample initial skills data
let skills = [
    {
        domain: "Front End Development",
        skills: [
            { name: "Html", proficiency: 90 },
            { name: "CSS", proficiency: 85 },
            { name: "Js", proficiency: 80 },
            { name: "PHP", proficiency: 75 },
            { name: "WordPress", proficiency: 85 },
        ]
    },
    {
        domain: "Languages",
        skills: [
            { name: "Hindi", proficiency: 90 },
            { name: "English", proficiency: 85 },
        ]
    },
    {
        domain: "Back End Development",
        skills: [
            { name: "NodeJS", proficiency: 90 },
            { name: "SSR", proficiency: 85 },
        ]
    },
    {
        domain: "Front End Development",
        skills: [
            { name: "Html", proficiency: 90 },
            { name: "CSS", proficiency: 85 },
            { name: "Js", proficiency: 80 },
            { name: "PHP", proficiency: 75 },
            { name: "WordPress", proficiency: 85 },
        ]
    },
    {
        domain: "Languages",
        skills: [
            { name: "Hindi", proficiency: 90 },
            { name: "English", proficiency: 85 },
        ]
    },
    {
        domain: "Back End Development",
        skills: [
            { name: "NodeJS", proficiency: 90 },
            { name: "SSR", proficiency: 85 },
        ]
    }
];

// Function to render skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';

    skills.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skill-category';
        categoryElement.innerHTML = `
            <h3>${category.domain}</h3>
            ${category.skills.map(skill => `
                <div class="skill-item">
                    <div class="skill-info">
                        <span>${skill.name}</span>
                        <span>${skill.proficiency}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.proficiency}%"></div>
                    </div>
                </div>
            `).join('')}
        `;
        skillsGrid.appendChild(categoryElement);
    });
}

// Initial render
renderSkills();

// Modal functionality
const modal = document.getElementById('addSkillModal');
const addSkillBtn = document.getElementById('addSkillBtn');
const closeBtn = document.getElementsByClassName('close')[0];

addSkillBtn.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Form submission
const addSkillForm = document.getElementById('addSkillForm');
addSkillForm.onsubmit = function(e) {
    e.preventDefault();
    const domain = document.getElementById('domainInput').value;
    const skillName = document.getElementById('skillInput').value;
    const proficiency = parseInt(document.getElementById('proficiencyInput').value);

    if (domain && skillName && proficiency) {
        let categoryIndex = skills.findIndex(cat => cat.domain === domain);
        if (categoryIndex === -1) {
            skills.push({
                domain: domain,
                skills: []
            });
            categoryIndex = skills.length - 1;
        }
        skills[categoryIndex].skills.push({
            name: skillName,
            proficiency: proficiency
        });

        renderSkills();
        modal.style.display = 'none';
        addSkillForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
}