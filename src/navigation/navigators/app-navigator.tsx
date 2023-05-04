import {AuthNavigator} from '../../modules/auth/navigation/navigators/auth-navigator';
import { UserState, useAuthStore } from '../../modules/auth/store/useAuthStore';
import {MainNavigator} from '../../modules/main/navigation/navigators/main-navigator';

export const AppNavigator = () => {
  const {user} = useAuthStore((state: UserState) =>({user:state.user}));

  return user?.id ? <MainNavigator /> : <AuthNavigator />;
};
