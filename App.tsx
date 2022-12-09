import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import Appcontainer from './src/components/app-container'
import Main from './src/screens/main'
export default function App() {
  return (
    <Appcontainer>
      <Main />
    </Appcontainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
