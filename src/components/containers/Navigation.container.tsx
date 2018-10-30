import { NavigationList } from 'components/atoms/NavigationList/NavigationList'
import { FrostState, Router } from 'interfaces/Props'
import * as React from 'react'
import { connect } from 'react-redux'

const links: ReadonlyArray<any> = [
  {
    label: 'Dashboard',
    link: '/dashboard',
  },
  {
    label: 'API Tokens',
    link: '/token',
  },
  {
    label: 'Documentation',
    link: 'https://docs.frost.po.et/docs',
    external: true,
  },
]

interface NavigationContainerProps {
  readonly router: Router
}

const mapStateToProps = (state: FrostState): NavigationContainerProps => ({
  router: state.router,
})

export const NavigationContainer = connect(mapStateToProps)(
  class extends React.Component<NavigationContainerProps, undefined> {
    render(): JSX.Element {
      const { router } = this.props

      return <NavigationList links={links} pathActive={router.currentPath} />
    }
  },
)
