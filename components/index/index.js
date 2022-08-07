import React, { useEffect, useState, useRef } from 'react'
import { AppState, ScrollView, Text, View } from 'react-native'
import axios from 'axios'
import { useTailwind } from 'tailwind-rn'

import { ButtonProvider } from '../../hooks/useButton'
import Row from './row'
import Matches from './matches'
import Spinner from './spinner'
import { useMemo } from 'react'
import { isEmpty, isObject } from 'lodash'

// const url = "https://ds04s2074b.execute-api.ap-east-1.amazonaws.com/api/heibai";
// const url =
//   "https://dfqoxdjhdf.execute-api.ap-east-1.amazonaws.com/api/getmatches?all=true";
const url = 'https://334p0jpuqf.execute-api.us-east-1.amazonaws.com/prod'

const Index = ({ navigation }) => {
  const tailwind = useTailwind()
  const appState = useRef(AppState.currentState)
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState({})
  useEffect(() => {
    fetchMatches()
  }, [])

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      fetchMatches()
    }
    appState.current = nextAppState
  }

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange)
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange)
    }
  }, [])

  const fetchMatches = () => {
    setLoading(true)
    setList({})
    axios
      .get(url)
      .then(({ data }) => {
        setLoading(false)
        if (isObject(data) && !isEmpty(data)) {
          setList(data)
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }
  return (
    <ButtonProvider>
      {loading || isEmpty(list) ? (
        <View
          style={tailwind(`w-full h-full flex items-center justify-center`)}
        >
          {loading ? (
            <Spinner />
          ) : (
            <Text style={tailwind(`text-blue-600`)}>無比賽</Text>
          )}
        </View>
      ) : (
        <ScrollView style={tailwind(`min-h-full h-full w-full bg-lime-100`)}>
          <Matches items={list} />
        </ScrollView>
      )}
    </ButtonProvider>
  )
}

export default Index
