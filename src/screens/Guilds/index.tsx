import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { Loading } from '../../components/Loading'
import { api } from '../../services/api'
import { styles } from './styles'

type Props = {
  handleGuildsSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildsSelected }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds')
    console.log(response)
    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchGuilds()
  }, [])

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildsSelected(item)} />
          )}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          showsVerticalScrollIndicator={false}
          style={styles.guilds}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
          ListHeaderComponent={() => <ListDivider isCentered />}
        />
      )}
    </View>
  )
}
