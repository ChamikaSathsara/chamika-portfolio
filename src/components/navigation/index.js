import React, { useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './nav.module.scss';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
    const isNightTime = () => {
        const hours = new Date().getHours();
        return hours >= 18 || hours < 6;
    };

    const initialTheme = localStorage.getItem('selectedTheme') || (isNightTime() ? 'dark' : 'light');
    const [checked, setChecked] = useState(initialTheme === 'dark');

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
    };

    useEffect(() => {
        if (checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, [checked]);

    const handleChange = (checked) => {
        setChecked(checked);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const navLinks = document.querySelector(`.${styles.navLinks}`);
        if (menuOpen) {
            navLinks.style.display = 'flex';
            setTimeout(() => {
                navLinks.classList.add(styles.showMenu);
            }, 10);
        } else {
            navLinks.classList.remove(styles.showMenu);
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 300);
        }
    }, [menuOpen]);

    return (
        <div className={styles.navBar}>
            <div className={styles.navBar__logo_warp} >
            <Link className={styles.navBar__logo} to="#home" smooth>C H A M I K A</Link>
            </div>
            <div className={styles.navLinks}>
                <Link to="#home" onClick={toggleMenu} smooth>Home</Link>
                <Link to="#about" onClick={toggleMenu} smooth>About</Link>
                <Link to="#work" onClick={toggleMenu} smooth>Experience</Link>
                <Link to="#projects" onClick={toggleMenu} smooth>Projects</Link>
                <Link to="#contact" onClick={toggleMenu} smooth>Contact Me</Link>
                <div className={styles.toggle}>
                    <ReactSwitch
                        checked={checked}
                        onChange={handleChange}
                        handleDiameter={20}
                        offColor="#030202"
                        onColor="#ffffff"
                        offHandleColor="#ffffff"
                        onHandleColor="#030202"
                        height={35}
                        width={70}
                        uncheckedIcon={
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 10,
                                color: "#ffffff",
                                paddingRight: 2
                            }}>
                                Light
                            </div>
                        }
                        checkedIcon={
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 10,
                                color: "#030202",
                                paddingRight: 2
                            }}>
                                Night
                            </div>
                        }
                    />
                </div>
                <div className={styles.closeIcon} onClick={toggleMenu}>
                    <FaTimes size={20} />
                </div>
            </div>
            <div className={styles.navLinksDesktop}>
                <Link to="#about" smooth >About</Link>
                <Link to="#work" smooth>Experience</Link>
                <Link to="#projects" smooth>Projects</Link>
                <Link to="#contact" smooth>Contact Me</Link>
            </div>
            <div className={styles.toggle_second}>
                <ReactSwitch
                    checked={checked}
                    onChange={handleChange}
                    handleDiameter={20}
                    offColor="#030202"
                    onColor="#ffffff"
                    offHandleColor="#ffffff"
                    onHandleColor="#030202"
                    height={35}
                    width={70}
                    uncheckedIcon={
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 10,
                            color: "#ffffff",
                            paddingRight: 2
                        }}>
                            Light
                        </div>
                    }
                    checkedIcon={
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 10,
                            color: "#030202",
                            paddingRight: 2
                        }}>
                            Night
                        </div>
                    }
                />
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <FaBars size={20} />
            </div>
        </div>
    );
};

export default Nav;
