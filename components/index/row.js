import React, { useMemo } from 'react'
import { Image, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
// import moment from "moment-timezone";
import { useNavigation } from '@react-navigation/native'

import useButton from '../../hooks/useButton'
import Button from './Button'

function Row({ item }) {
  const tailwind = useTailwind()
  const navigation = useNavigation()
  const {
    id,
    url,
    date,
    time,
    league,
    homeName,
    homeLogo,
    awayName,
    awayLogo,
  } = item || {}
  const buttonId = `row__${id}`
  const { button, setButton } = useButton({ buttonId })
  const isFocusing = useMemo(() => {
    return buttonId === button
  }, [buttonId, button])

  return (
    <Button
      onPress={() => {
        navigation.navigate('Player', {
          url,
        })
      }}
      onFocus={() => {
        setButton(buttonId)
      }}
    >
      <View
        style={tailwind(
          `flex flex-row p-4 justify-center border-b-1 border-slate-200 ${
            isFocusing ? 'bg-lime-200' : 'bg-white'
          }`
        )}
      >
        <View style={tailwind(`flex flex-row items-center flex-1 justify-end`)}>
          <Text>{homeName}</Text>
          <Image
            style={tailwind(`w-10 h-10 ml-2`)}
            source={{ uri: homeLogo }}
          />
        </View>
        <View
          style={tailwind(
            `flex items-center w-16 border-1 border-slate-400 mx-4`
          )}
        >
          <Text style={tailwind(`text-sm font-thin`)}>{time}</Text>
          <Text style={tailwind(`text-xs font-thin`)}>{league}</Text>
        </View>
        <View style={tailwind(`flex flex-row items-center flex-1`)}>
          <Image
            style={tailwind(`w-10 h-10 mr-2`)}
            source={{ uri: awayLogo }}
          />
          <Text>{awayName}</Text>
        </View>
      </View>
    </Button>
  )
}

export default Row
