import { Text } from 'shared/ui/Text';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const Username = () => {
    const { username } = useSelector(getUserAuthData);
    return <Text text={username} />;
};

export default Username;
