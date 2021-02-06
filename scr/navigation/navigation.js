import {NavigationContainer} from '@react-navigation/native';
import {creatStackNavigator} from '@react-navigation/State';
import Login from './scr/screen/Login';
import Register from './scr/screen/Login';

const Stack = createStackNavigation();
function App()
    return (
        <NavigationContainer>
            <Stack.Navigtor>
                <Stack.Screen name="Login" component ={Login}/>
                <Stack.Screen name="Register" component ={Register}/>
                
            </Stack.Navigtor>
        </NavigationContainer>
    );
    }
export default App;