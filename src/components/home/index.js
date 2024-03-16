import React, { useState, useEffect } from 'react';
import Nav from '../navigation';
import styles from './home.module.scss';
import TypeWriter from 'react-typewriter';

const Home = () => {
    var [date, setDate] = useState(new Date());
    const [projectcount, setProjectCount] = useState(0);

    useEffect(() => {
        const incrementWithDelay = (count, maxCount, delay) => {
            if (count <= maxCount) {
                setTimeout(() => {
                    setProjectCount(count);
                    incrementWithDelay(count + 1, maxCount, delay);
                }, delay);
            }
        };

        incrementWithDelay(0, 10, 500); // Increment projectcount from 0 to 10 with a delay of 100 milliseconds
    }, []);
    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

        const day = date.getDate();
        const suffix = ['th', 'st', 'nd', 'rd'];
        const relevantDigits = (day < 30) ? day % 20 : day % 30;
        const suffixIndex = (relevantDigits <= 3) ? relevantDigits : 0;
        const formattedDay = day + suffix[suffixIndex];

        return formattedDay + ' ' + formattedDate;
    };

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        }
    });

    return (
        <div>
            <Nav />
            <div className={styles.homeTime}>
                <p className={styles.time}>{date.toLocaleTimeString()}</p>
                <p className={styles.date}>{formatDate(date)}</p> {/* Call the formatDate function with the date parameter */}
            </div>

            <div className={styles.homeText}>
                <TypeWriter typing={1}>
                    <p className={styles.text1}>hello!</p>
                    <p className={styles.text2}>I'm <span className={styles.text3}>Chamika Sathsara</span></p>
                    <p className={styles.text1}><span className={styles.text4}>UI UX Engineer </span> & Full-Stack Developer Intern</p>
                </TypeWriter>
            </div>
            <div className={styles.homeProjects}>
            <p className={styles.projects}><span className={styles.projectscount}>{projectcount}+ </span> Projects</p>
            </div>
        </div>
    );
}

export default Home;
