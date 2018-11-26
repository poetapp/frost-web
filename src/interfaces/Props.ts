export interface ClassNameProps {
  readonly className?: string
}
export interface ApiToken extends JWT {
  readonly token: string
}
export interface Profile {
  readonly email: string
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

export interface ApiTokens {
  readonly tokens: ReadonlyArray<string>
}
export interface FrostState {
  readonly user: User
  readonly apiTokens: ApiTokens
  readonly router: Router
  readonly loadingPage: LoadingPage
  readonly changePasswordToken: StatusService
  readonly signIn: StatusService
  readonly signUp: StatusService
  readonly sendEmailVerifiedAccount: StatusService
  readonly verifiedAccount: StatusService
  readonly modal: ModalState
  readonly deleteApiToken: StatusService
  readonly notificationBar: NotificationBarState
  readonly createApiTokens: StatusService
  readonly changeNetworkBitcoin: NetworkBitcoin
}

export interface JWT {
  readonly iat: Date
  readonly exp: Date
  readonly network: Network
}

export interface ModalState {
  readonly show: boolean
  readonly modal: string
  readonly data: object
}
export interface NotificationBarState {
  readonly type?: 'success' | 'fail'
  readonly action?: 'fade-in' | 'fade-out' | 'hide'
  readonly message?: string
}

export enum Network {
  LIVE = 'live',
  TEST = 'test',
}
export interface NetworkBitcoin {
  readonly network: Network
}

export interface ClaimAttributes {
  readonly [key: string]: string
}

export interface WorkAttributes extends ClaimAttributes {
  readonly name: string
  readonly datePublished: string
  readonly dateCreated: string
  readonly author: string
  readonly tags?: string
  readonly text: string
}
