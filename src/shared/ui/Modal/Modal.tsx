import { classNames } from 'shared/lib/classNames/classNames';
import React, { lazy, useCallback, useEffect, useState } from 'react';
import Portal from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const CLOSE_TIMEOUT = 200;

const Modal = (props: ModalProps) => {
    const { className, children, isOpen, lazy, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const isClosingRef = React.useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen && !isMounted) {
            setIsMounted(true);
        }
    }, [isOpen, isMounted]);

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            isClosingRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, CLOSE_TIMEOUT);
        }
    }, [onClose]);

    const onKeyDownHandler = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCloseHandler();
            }
        },
        [onCloseHandler]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownHandler);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDownHandler);
        };
    }, [isOpen, onKeyDownHandler]);

    useEffect(
        () => () => {
            if (isClosingRef.current) {
                clearTimeout(isClosingRef.current);
            }
        },
        []
    );

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.closing]: isClosing
    };
    const classes = classNames(styles.modal, mods, [className]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classes}>
                <div className={styles.overlay} onClick={onCloseHandler} />
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    );
};

export default Modal;
