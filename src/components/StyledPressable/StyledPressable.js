import React from 'react'
import styled from 'styled-components/native'

const PressableBase = styled.TouchableOpacity`
  height: 50px;
  width: 250px;
  background-color: red;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  color: white;
`

function StyledPressable() {
  return (
    <PressableBase>
      <Text>Button</Text>
    </PressableBase>
  )
}

export default StyledPressable
