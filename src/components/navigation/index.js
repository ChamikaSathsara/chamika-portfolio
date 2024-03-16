import React, { useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';
import styles from './nav.module.scss';

const Nav = () => {
    // Retrieve the initial theme from localStorage or default to 'light'
    const initialTheme = localStorage.getItem('selectedTheme') || 'light';
    const [checked, setChecked] = useState(initialTheme === 'dark');

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
    }

    // useEffect to set the theme on initial render
    useEffect(() => {
        if (checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, [checked]);

    const handleChange = (checked) => {
        setChecked(checked);
    }

    return (
        <div className={styles.navBar}>
            <div className={styles.navBar__logo}>
                C H A M I K A
            </div>
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
        </div>
    );
}

export default Nav;
