import {AuthNavigator} from '../../modules/auth/navigation/navigators/auth-navigator';
import {MainNavigator} from '../../modules/main/navigation/navigators/main-navigator';

export const AppNavigator = () => {
  const user: boolean = true;
  return user ? <MainNavigator /> : <AuthNavigator />;
};
