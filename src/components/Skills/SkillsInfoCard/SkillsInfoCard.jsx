import React from 'react'
import './SkillsInfoCard.css'
import PropTypes from 'prop-types'
import './SkillsInfoCard.css'

const SkillsInfoCard = ({ heading, skills }) => {
    return (
        <div className='skills-info-card'>
            <h6>{heading}</h6>
            <div className="skills-info-content">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skill-info">
                            <p>{item.skill}</p>
                            <div className="percentage">{item.percentage}</div>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress" style={{ width: item.percentage }} >

                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

SkillsInfoCard.propTypes = {
    heading: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            skill: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
}
export default SkillsInfoCard