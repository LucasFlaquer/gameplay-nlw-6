import * as AuthSession from 'expo-auth-session'

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {COLLECTION_USER} from '../configs/database'
import { api } from '../services/api'

const {CDN_IMAGE} = process.env
const {CLIENT_ID} = process.env
const {REDIRECT_URI} = process.env
const {RESPONSE_TYPE} = process.env
const {SCOPE} = process.env



type User = {
  id: string
  username: string
  firstName: string
  avatar: string
  email: string
  token: string
}

type AuthContextData = {
  user: User
  loading: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode

}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string
    error?: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({children}:AuthProviderProps) {
  const [user, setUser] = useState<User>({ } as User)
  const [loading, setLoading] = useState(false)
  
  async function signIn() {
    const defaultImage = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg'
    try {
      setLoading(true)
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const {type, params} = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse
      
      if(type=== "success" && !params.error && params.access_token) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`
        const userInfo = await api.get<{username:string, id:string, avatar:string|null, email:string}>('/users/@me')
        const firstName = userInfo.data.username.split(' ')[0]
        const userData = {
          avatar: userInfo.data.avatar ? `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png` : defaultImage,
          token: params.access_token,
          email: userInfo.data.email,
          firstName,
          id: userInfo.data.id,
          username: userInfo.data.username
        }
        await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))
        setUser(userData)
      } 
      
    } catch {
      throw new Error('Não foi possível autenticar')
      
    } finally {
      setLoading(false)
    }
  }
  async function signOut() {
    setUser({} as User)
    await AsyncStorage.removeItem(COLLECTION_USER)
  }
  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USER)
    if(storage) {
      const userLogged = JSON.parse(storage) as User
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`
      setUser(userLogged)
    }
  }
  useEffect(()=> {
    loadUserStorageData()
  }, [])

  return (
    <AuthContext.Provider value={{user, signIn, signOut, loading}}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}
export {AuthProvider, useAuth}