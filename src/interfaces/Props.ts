export interface ClassNameProps {
  readonly className?: string
}
export interface ApiToken {
  apiToken: string
  dateCreated: string
}
export interface Profile {
  email: string
  apiToken?: ApiToken
  verified: boolean
  createdAt: string
}
export interface User {
  token: string | undefined
  profile: Profile
}

export interface FrostState {
  user: User
}
