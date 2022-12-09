import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { PropsWithChildren } from 'react'

import theme from '../theme'
export default function Appcontainer(props: PropsWithChildren) {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  )
}
