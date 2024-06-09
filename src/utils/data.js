import Assests from "../assets/assets"

export const SKILLS = [
    {
        title: 'Frontend',
        icon: Assests.frontend,
        skills: [
            { skill: 'HTML5', percentage: '80%' },
            { skill: 'CSS', percentage: '90%' },
            { skill: 'Javascript', percentage: '75%' },
            { skill: 'React.js', percentage: '80%' },
        ],
    },
    {
        title: 'Backend',
        icon: Assests.backend,
        skills: [
            { skill: 'Node.js', percentage: '70%' },
            { skill: 'Express.js', percentage: '65%' },
        ],
    },
    {
        title: 'Tools',
        icon: Assests.tools,
        skills: [
            { skill: 'Git & Github', percentage: '85%' },
            { skill: 'Visual Studio Code', percentage: '75%' },
            // {skill: 'Webpack', percentage : '60%'},
            { skill: 'Responsive Design', percentage: '70%' },
        ],
    },
    {
        title: 'Soft Skills',
        icon: Assests.softSkills,
        skills: [
            { skill: 'Problem-solving', percentage: '80%' },
            { skill: 'Collaboration', percentage: '85%' },
            { skill: 'Attention to Detail', percentage: '75%' },
        ],
    },

]