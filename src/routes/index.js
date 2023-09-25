import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import SignIn from '../pages/Sign in';
import ForgotPassword from '../pages/ForgotPassword';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            
            <Stack.Screen
                name= "Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name= "Login"
                component={Login}
                options={{headerShown: false}}
            />  

            <Stack.Screen
                name= "SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name= "ForgotPassword"
                component={ForgotPassword}
                options={{headerShown: false}}
            />      

        </Stack.Navigator>
    );
}