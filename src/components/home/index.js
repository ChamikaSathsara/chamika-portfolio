import React, { useState, useEffect } from 'react';
import styles from './home.module.scss';
import TypeWriter from 'react-typewriter';
import About from '../about';
import MyProjects from '../myProjects';

const Home = () => {

    const [date, setDate] = useState(new Date());

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

        const day = date.getDate();
        const suffix = ['th', 'st', 'nd', 'rd'];
        const relevantDigits = (day < 30) ? day % 20 : day % 30;
        const suffixIndex = (relevantDigits <= 3) ? relevantDigits : 0;
        const formattedDay = day + suffix[suffixIndex];

        return `${formattedDay} ${formattedDate}`;
    };

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div id="home" className={styles.homeWrap}>
            <div className={styles.backgroundImage}>
                <div className={styles.background}>
                    <div className={styles.homeTime}>
                        <p className={styles.time}>{date.toLocaleTimeString()}</p>
                        <p className={styles.date}>{formatDate(date)}</p>
                    </div>
                    <div className={styles.homeText}>
                        <TypeWriter typing={1}>
                            <p className={styles.text1}>hello!</p>
                            <p className={styles.text2}>I'm <span className={styles.text3}>Chamika Sathsara</span></p>
                            <p className={styles.text1}><span className={styles.text4}>UI UX Engineer</span> & Full-Stack Developer Intern</p>
                        </TypeWriter>
                    </div>
                </div>
            </div>
            <About />
            <MyProjects />
        </div>
    );
};

export default Home;
