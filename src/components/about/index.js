import React from "react";
import styles from './about.module.scss'

const About = () => {
    return (
        <div className={styles.wrap}>
        <div className={styles.profilepic}/>
        <div className={styles.aboutText}>
            <h1 className={styles.aboutTitle}>About Me</h1>
            <p>I am a highly motivated individual with a deep and abiding interest in the IT industry. I am 
                currently in my third year, diligently pursuing a Bachelor of Sciences degree at Sabaragamuwa 
                University of Sri Lanka. My proficiency in communication allows me to engage effectively with a 
                wide array of individuals, and I am committed to a path of continuous learning and personal 
                growth, constantly striving to enhance my skill set.
            </p>
            {/* Add more content as needed */}
        </div>
        </div>
    );
}

export default About;
