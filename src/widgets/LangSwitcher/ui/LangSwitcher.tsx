import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'widgets/Button';
import { ThemeButton } from 'widgets/Button/ui/Button';
import i18n from 'shared/config/i18n';
import styles from './LangSwitcher.module.scss';

export enum Lang {
    EN = 'en',
    FI = 'fi'
}

enum LangFlag {
    EN = '🇺🇸',
    FI = '🇫🇮'
}

function LangSwitcher() {
    const classes = classNames(styles['lang-switcher'], {}, []);

    const toggleLang = (lang: Lang) => () => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={classes}>
            <Button theme={ThemeButton.CLEAR} onClick={toggleLang(Lang.EN)}>
                {LangFlag.EN}
            </Button>
            <Button theme={ThemeButton.CLEAR} onClick={toggleLang(Lang.FI)}>
                {LangFlag.FI}
            </Button>
        </div>
    );
}

export default LangSwitcher;
