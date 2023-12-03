require('dotenv').config()
import { verify } from 'jsonwebtoken'
import { Context } from './context'

export const APP_SECRET = process.env.APP_SECRET || 'appsecret321'

export interface Token {
  userId: string
}

export function getUserId(context: Context) {
  const token = context.token
  if (token) {
    const verifiedToken = verify(token, APP_SECRET) as Token
    return verifiedToken && Number(verifiedToken.userId)
  }
}

export const verifyToken = (token: string) => verify(token, APP_SECRET) as Token
