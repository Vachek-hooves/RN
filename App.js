import {View, SafeAreaView, Text} from 'react-native';
import {PuzzleContainer} from './components';

function App() {
  return (
    <SafeAreaView style={{flex: 1, margin: 10}}>
      <Text style={{textAlign: 'center'}}>
        Puzzle demo (wonder animals puzzle)
      </Text>
      <PuzzleContainer />
    </SafeAreaView>
  );
}

export default App;
