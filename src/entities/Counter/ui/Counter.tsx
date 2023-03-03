import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'widgets/Button';
import { counterActions } from '../model/slices/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    };

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1>Counter: {counterValue}</h1>
            <Button onClick={handleIncrement}>{t('Increment')}</Button>
            <Button onClick={handleDecrement}>{t('Decrement')}</Button>
        </div>
    );
};

export default Counter;
