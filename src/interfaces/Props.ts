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

export interface Router {
  currentPath: string
}

export interface LoadingPage {
  loading: boolean
  percentage: number
}

export interface ErrorService {
  status: boolean
  message: string
}
export interface StatusService {
  error: ErrorService
  loading: boolean
  retryWait?: boolean
}

export interface FrostState {
  user: User
  router: Router
  loadingPage: LoadingPage
  changePasswordToken: StatusService
  signIn: StatusService
  signUp: StatusService
  sendEmailVerifiedAccount: StatusService
  verifiedAccount: StatusService
}
