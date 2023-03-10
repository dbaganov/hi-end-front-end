import Modal from 'shared/ui/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loginModalActions } from 'features/AuthByUsername';
import LoginForm from '../LoginForm/LoginForm';
import { getLoginModal } from '../../model/selectors/getLoginModalState/getLoginModal';

const LoginModal = () => {
    const dispatch = useDispatch();
    const { isLoginModalOpened } = useSelector(getLoginModal);

    const handleClose = () => {
        dispatch(loginModalActions.closeLoginModal());
    };

    return (
        <Modal lazy isOpen={isLoginModalOpened} onClose={handleClose}>
            {isLoginModalOpened && <LoginForm />}
        </Modal>
    );
};

export default LoginModal;
