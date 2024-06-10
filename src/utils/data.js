import Assests from "../assets/assets"

export const SKILLS = [
    {
        title: 'Frontend',
        icon: Assests.frontend,
        skills: [
            { skill: 'HTML5', percentage: '70%' },
            { skill: 'CSS', percentage: '80%' },
            { skill: 'Javascript', percentage: '65%' },
            { skill: 'React.js', percentage: '60%' },
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

export const WORK_EXPERIENCE = [
    {
        title : 'Senior frontend Developer at Tech Inoovators',
        date : 'January 2022 - Present',
        responsibilities : [
            'Meeting with the development team to discuss user interface ideas and applications.',
            'Developing and implementing highly-responsive user interface components.',
            'Writing application interface codes using JavaScript, following libraries such as React.js or Angular.',
            'Developing and implementing front-end architecture to support user interface concepts.'
        ]
    },
    {
        title : 'Junior Web Developer at Digital Solution',
        date : 'June 2020 - December Present',
        responsibilities : [
            'Meeting with the development team to discuss user interface ideas and applications.',
            'Developing and implementing highly-responsive user interface components.',
            'Writing application interface codes using JavaScript, following libraries such as React.js or Angular.',
            'Developing and implementing front-end architecture to support user interface concepts.'
        ]
    },
    {
        title : 'Frontend Intern at Web Studio',
        date : 'May 2019 - August 2019',
        responsibilities : [
            'Meeting with the development team to discuss user interface ideas and applications.',
            'Developing and implementing highly-responsive user interface components.',
            'Writing application interface codes using JavaScript, following libraries such as React.js or Angular.',
            'Developing and implementing front-end architecture to support user interface concepts.'
        ]
    }
]