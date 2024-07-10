import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LevelsScreen,
  MainMenuScreen,
  ProfileScreen,
  PuzzleSingleLevelScreen,
  RulesScreen,
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainMenu"
          component={MainMenuScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RulesScreen"
          component={RulesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LevelsScreen"
          component={LevelsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PuzzleSingleLevelScreen"
          component={PuzzleSingleLevelScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
