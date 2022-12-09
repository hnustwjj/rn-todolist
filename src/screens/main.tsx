import { Text, Box, Center, VStack, useColorModeValue } from 'native-base'
import { Pressable } from 'react-native'
import { useCallback, useState } from 'react'
import ThemeToggle from '../components/theme-toggle'
import AnimatedCheckbox from '../components/animated-checkbox'
export default function MainScreen() {
  const [checked, setChecked] = useState(false)
  const handlePressCheckbox = useCallback(() => {
    setChecked(p => !p)
  }, [])

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box w="100px" h="100px">
          <Text>{checked ? 'true' : 'false'}</Text>
          <Pressable onPress={handlePressCheckbox}>
            <AnimatedCheckbox
              checked={checked}
              highlightColor="#4444ff"
              checkmarkColor="#ffffff"
              boxOutlineColor="#4444ff"
            />
          </Pressable>
        </Box>
        {/* <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello</Text>
        </Box> */}
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
