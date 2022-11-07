import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ShowSelectedScreen from './src/screens/ShowSelectedScreen';

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        ShowSelected: ShowSelectedScreen,
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Ravintolahaku',
            headerBackTitle: 'Palaa',
        },
    }
);

export default createAppContainer(navigator);
