import * as React from 'react'
import { connect } from 'react-redux'
import { FrostState, LoadingPage } from '../../interfaces/Props'
import { LoadingPage as Loading } from '../atoms/LoadingPage/LoadingPage'

interface LoadingPageProps {
  readonly loadingPage: LoadingPage
}

const mapStateToProps = (state: FrostState): LoadingPageProps => ({
  loadingPage: state.loadingPage
})

export const LoadingPageContainer = connect(mapStateToProps)(
  class extends React.Component<LoadingPageProps, undefined> {
    render() {
      const { loadingPage, children } = this.props
      const { loading, percentage } = loadingPage

      return (
        <Loading loading={loading} percentage={percentage}>
          {children}
        </Loading>
      )
    }
  }
)
