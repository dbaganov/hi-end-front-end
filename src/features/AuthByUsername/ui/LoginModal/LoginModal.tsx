import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loginModalActions } from 'features/AuthByUsername';
import styles from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';
import { getLoginModal } from '../../model/selectors/getLoginModalState/getLoginModal';

interface LoginModalProps {
    className?: string;
}

const LoginModal = (props: LoginModalProps) => {
    const dispatch = useDispatch();
    const { isLoginModalOpened } = useSelector(getLoginModal);

    const { className } = props;
    const classes = classNames(styles.LoginModal, {}, [className]);

    const handleClose = () => {
        dispatch(loginModalActions.closeLoginModal());
    };

    return (
        <Modal
            lazy
            className={classes}
            isOpen={isLoginModalOpened}
            onClose={handleClose}
        >
            {isLoginModalOpened && <LoginForm />}
        </Modal>
    );
};

export default LoginModal;
