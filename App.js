import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LevelsScreen,
  MainMenuScreen,
  PuzzleSingleLevelScreen,
  RulesScreen,
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="RulesScreen" component={RulesScreen} />
        <Stack.Screen name="LevelsScreen" component={LevelsScreen} />
        <Stack.Screen
          name="PuzzleSingleLevelScreen"
          component={PuzzleSingleLevelScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
