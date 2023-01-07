
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import SiteHome from './SiteHome/SiteHome';
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Home} options={{headerShown:false }}/>
        <Tab.Screen name="Site home" component={SiteHome} options={{headerShown:false}}   />
      </Tab.Navigator>

  );
};


export default HomeTab;