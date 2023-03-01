import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AppLink } from 'shared/ui/AppLink';
import { useLayout } from 'app/providers/LayoutProvider';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

function Navbar(props: NavbarProps) {
    const { className } = props;
    const { t } = useTranslation();
    const { layout } = useLayout();
    const classes = classNames(styles.nav, {}, [className]);

    return (
        <nav className={classes}>
            <AppLink
                to={RoutePath.main}
                icon={<FontAwesomeIcon icon={faHome} />}
            >
                <span
                    className={classNames(styles['nav-link-text'], {}, [
                        styles[`nav-link-text--${layout}`]
                    ])}
                >
                    {t('Main')}
                </span>
            </AppLink>
            <AppLink
                to={RoutePath.about}
                icon={<FontAwesomeIcon icon={faInfoCircle} />}
            >
                <span
                    className={classNames(styles['nav-link-text'], {}, [
                        styles[`nav-link-text--${layout}`]
                    ])}
                >
                    {t('About')}
                </span>
            </AppLink>
        </nav>
    );
}

export default Navbar;
