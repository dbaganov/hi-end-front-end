import React from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Content.module.scss';

interface ContentProps {
    className?: string;
    children: React.ReactNode;
}

function Content(props: ContentProps) {
    const { className, children } = props;
    const classes = classNames(styles.content, {}, [className]);

    return <section className={classes}>{children}</section>;
}

export default Content;
