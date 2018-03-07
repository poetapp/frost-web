import * as React from 'react'
import { connect } from 'react-redux'
import { FrostState, Router } from '../../interfaces/Props'
import { NavigationList } from '../atoms/NavigationList/NavigationList'

const links = [
  {
    label: 'Dashboard',
    link: '/dashboard'
  },
  {
    label: 'API Keys',
    link: '/token'
  },
  {
    label: 'Documentation',
    link: 'https://docs.frost.po.et/docs',
    external: true
  }
]

interface NavigationContainerProps {
  readonly router: Router
}

const mapStateToProps = (state: FrostState): NavigationContainerProps => ({
  router: state.router
})

export const NavigationContainer = connect(mapStateToProps)(
  class extends React.Component<NavigationContainerProps, undefined> {
    render() {
      const { router } = this.props

      return <NavigationList links={links} pathActive={router.currentPath} />
    }
  }
)
