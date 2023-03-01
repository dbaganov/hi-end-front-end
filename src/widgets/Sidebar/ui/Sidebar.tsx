import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'widgets/Button';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ThemeButton } from 'widgets/Button/ui/Button';
import { useLayout } from 'app/providers/LayoutProvider';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

function Sidebar(props: SidebarProps) {
    const { className } = props;
    const { layout, toggleLayout } = useLayout();
    const classes = classNames(styles.aside, {}, [className, layout]);

    return (
        <aside data-testid="sidebar" className={classes}>
            <Navbar />
            <br />
            <div className={styles['sidebar-footer']}>
                <ThemeSwitcher />
                <Button
                    data-testid="sidebar-toggle"
                    className={styles['sidebar-toggle']}
                    theme={ThemeButton.PRIMARY}
                    onClick={toggleLayout}
                >
                    <FontAwesomeIcon
                        icon={
                            layout === 'collapsed' ? faAngleRight : faAngleLeft
                        }
                    />
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;
