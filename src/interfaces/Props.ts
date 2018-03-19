export interface ClassNameProps {
  readonly className?: string
}
export interface ApiToken {
  readonly token: string
  readonly dateCreated: string
  readonly expiration: string
  readonly isExpired: boolean
}
export interface Profile {
  readonly email: string
  readonly apiTokens?: ApiToken[]
  readonly verified: boolean
  readonly createdAt: string
}
export interface User {
  readonly token: string | undefined
  readonly profile: Profile
}

export interface Router {
  readonly currentPath: string
}

export interface LoadingPage {
  readonly loading: boolean
  readonly percentage: number
}

export interface ErrorService {
  readonly status: boolean
  readonly message: string
}
export interface StatusService {
  readonly error: ErrorService
  readonly loading: boolean
  readonly retryWait?: boolean
}

export interface FrostState {
  readonly user: User
  readonly router: Router
  readonly loadingPage: LoadingPage
  readonly changePasswordToken: StatusService
  readonly signIn: StatusService
  readonly signUp: StatusService
  readonly sendEmailVerifiedAccount: StatusService
  readonly verifiedAccount: StatusService
}
