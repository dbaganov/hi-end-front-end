import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
    Default = 'default',
    Secondary = 'secondary',
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

const Text = (props: TextProps) => {
    const { className, title, text, theme = TextTheme.Default } = props;
    const classes = classNames(styles.Text, {}, [className, styles[theme]]);

    return (
        <div className={classes}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
};

export default Text;
