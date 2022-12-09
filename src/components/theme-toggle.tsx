import React from 'react'
import { Text, HStack, Switch, useColorMode } from 'native-base'

// 改变主题色的按钮
export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
      />
      <Text>Light</Text>
    </HStack>
  )
}
