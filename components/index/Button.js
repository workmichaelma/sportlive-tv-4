import React from 'react'
import { Platform, TouchableWithoutFeedback } from 'react-native'
let TouchableOpacityTV = TouchableWithoutFeedback

if (Platform.OS === 'android' && Platform.isTV) {
  const TouchableOpacityAndroidTV = (props, ref) => {
    /** Make sure presses on AndroidTV are sent only once */
    const onPressFilter = (e) => {
      const { onPress } = props
      const { eventKeyAction } = e
      if (onPress && eventKeyAction === 1 /*up trigger*/) {
        onPress(e)
      }
    }

    return (
      <TouchableWithoutFeedback
        {...props}
        accessibilityRole="button"
        ref={ref}
        onPress={onPressFilter}
        clickable={false}
        touchableHandleActivePressIn
      />
    )
  }
  TouchableOpacityTV = TouchableOpacityAndroidTV
}

export default React.forwardRef(TouchableOpacityTV)
