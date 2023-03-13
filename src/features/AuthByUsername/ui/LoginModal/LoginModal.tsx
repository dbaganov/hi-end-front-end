import Modal from 'shared/ui/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loginModalActions, loginModalReducer } from 'features/AuthByUsername';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { useInjectReducer } from 'shared/hooks/useInjectReducer';
import { getLoginModal } from '../../model/selectors/getLoginModalState/getLoginModal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

const LoginModal = () => {
    // useInjectReducer('loginModal', loginModalReducer);
    const dispatch = useDispatch();
    const { isLoginModalOpened } = useSelector(getLoginModal);

    const handleClose = () => {
        dispatch(loginModalActions.closeLoginModal());
    };

    return (
        <Modal lazy isOpen={isLoginModalOpened} onClose={handleClose}>
            {isLoginModalOpened && (
                <Suspense fallback={<Loader />}>
                    <LoginFormAsync />
                </Suspense>
            )}
        </Modal>
    );
};

export default LoginModal;
