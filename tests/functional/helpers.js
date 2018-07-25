import { ClientFunction } from 'testcafe'

export const SITE = process.env.SITE_URL || 'http://localhost:4000'

export const pages = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRATION: '/login',
  DASHBOARD: '/dashboard',
}

const runtimeId = () =>
  `${process.pid}.${new Date().getMilliseconds()}.${Math.floor(Math.random() * 10)}`

export const genEmail = (prefix, domain = 'test.com') =>
  `${prefix}.${runtimeId()}@${domain}`

export const getLocation = ClientFunction((prop = 'href') => document.location[prop])
