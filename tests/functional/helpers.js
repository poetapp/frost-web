const SITE = process.env.SITE_URL || 'http://localhost:4000'

export const routes = {
  SITE,
  LOGIN_PATH: `${SITE}/login`,
}

const runtimeId = () =>
  `${process.pid}.${new Date().getMilliseconds()}.${Math.floor(Math.random() * 10)}`

export const genEmail = (prefix, domain = 'test.com') =>
  `${prefix}.${runtimeId()}@${domain}`
