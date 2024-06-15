import React from 'react';
import styles from './workExperience.module.scss';

const workExperienceData = [
    {
      "position": "Full-Stack Software Engineer - ElectroBeam",
      "date": "January 2024 - Present",
      "responsibilities": [
        "Followed the MERN stack to deliver innovative solutions.",
        "Enhanced user experience through thoughtful design.",
        "Utilized AWS and Docker for scalable application deployment."
      ]
    },
    {
      "position": "Freelance UI/UX & Graphic Designer - Self-employed",
      "date": "December 2020 - January 2024",
      "responsibilities": [
        "Designed and implemented eLearning platforms for Vestas Intranet.",
        "Developed user-friendly applications on SharePoint for enhanced project collaboration.",
        "Created impactful visual designs to strengthen brand identity."
      ]
    },
    {
      "position": "Training Business Development Officer - FriMi",
      "date": "May 2020 - December 2020",
      "responsibilities": [
        "Promoted FriMi application and onboarded new customers.",
        "Implemented KYC and AML processes to ensure regulatory compliance."
      ]
    }
];

const WorkExperience = () => {
  return (
    <div id="work" className={styles.workExperienceWrap}>
      <h1>Work Experience</h1>
      <ul className={styles.timeline}>
        {workExperienceData.map((job, index) => (
          <li key={index} className={index % 2 === 0 ? '' : styles.timelineInverted}>
            <div className={styles.timelineBadge}>
              <div><i className={`fa fa-circle ${index % 2 === 0 ? '' : styles.invert}`}></i></div>
            </div>
            <div className={styles.timelinePanel}>
              <div className={styles.timelineHeading}>
                <h4>{job.position}</h4>
              </div>
              <div className={styles.timelineBody}>
                <ul style={{ padding: '0 40px' }}>
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.timelineFooter}>
                <p className="text-right">{job.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkExperience;
