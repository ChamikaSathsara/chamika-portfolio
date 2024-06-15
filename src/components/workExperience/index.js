import React from 'react';
import styles from './workExperience.module.scss';

const workExperienceData = [
  {
    "position": "Front-End Web Developer - SCI",
    "responsibilities": [
      "Maintain assets on network of brand sites utilizing XML, JQuery, XSLT & JavaScript.",
      "Prioritize and address web requests to ensure requests are effectively resolved in a timely manner.",
      "Collaborate with department staff to ensure user-focused design and launch of interactive web initiatives.",
      "Develop, enhance, maintain and support web applications in Interwoven TeamSite CMS to evaluate the effectiveness, usability, and accessibility of Web sites and make recommendations for enhancements to Web sites overall effectiveness."
    ],
    "date": "OCTOBER 2014 - PRESENT"
  },
  {
    "position": "Freelance Web Developer - Bekov Creative Studio",
    "responsibilities": [
      "Clients (Results Marketing, Red News, Weight Loss Houston)"
    ],
    "date": "MARCH 2012 - SEPTEMBER 2014"
  },
  {
    "position": "Web Developer - Vestas",
    "responsibilities": [
      "Designed, developed and successfully implemented eLearning web sites for new employees within the global team of Vestas Intranet, a research company with 20,000 employees.",
      "Worked with SharePoint Platform to create Team site user-friendly applications creating an infrastructure for ease in corporate project communications across departments.",
      "Maintained and continually enhanced intranet web sites without management supervision. Refreshed the looks and recreated some of the training web sites, since old technology was used and outdated data was implemented.",
      "Wrote and published weekly newsletters action updates."
    ],
    "date": "JANUARY 2010 - FEBRUARY 2012"
  },
  {
    "position": "Front-End Web Developer - UI/UX Designer - IADC",
    "responsibilities": [
      "Responsible for development and support of corporate web sites (IADC, DEA, Careers @ IADC, Drilling Contractor) all running on Joomla CMS.",
      "Creating quarterly circulation reports based on data mining and analysis",
      "Responsible for subscription for Drilling Contractor",
      "Creating newsletters for Drilling Contractor internationally.",
      "Creating Drill Bits newsletters for mobile viewers.",
      "Integration of Subscription form into a web site via MYSQL + PHP within Joomla."
    ],
    "date": "JUNE 2006 - DECEMBER 2009"
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
