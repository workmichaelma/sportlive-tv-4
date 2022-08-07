import { map } from 'lodash'
import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import Button from './Button'
import Row from './row'

function Matches({ items }) {
  const tailwind = useTailwind()
  return map(items, (matches, date) => {
    return (
      <ScrollView key={date} style={tailwind(`bg-white`)}>
        <View
          style={tailwind(
            `flex justify-center py-3 mx-2 border-b-2 border-slate-300`
          )}
        >
          <Text style={tailwind(`text-slate-900`)}>{date}</Text>
        </View>
        <View>
          {map(matches, (m) => {
            return <Row item={m} key={m.url} />
          })}
        </View>
      </ScrollView>
    )
  })
}

export default Matches
