import { PanelOptions } from 'components/molecules/PanelOptions/PanelOptions'
import * as React from 'react'
import { connect } from 'react-redux'

import { User, FrostState } from 'interfaces/Props'

interface PanelOptionsContainerProps {
  readonly user: User
}

const mapStateToProps = (state: FrostState): PanelOptionsContainerProps => ({
  user: state.user,
})

export const Panel = (props: PanelOptionsContainerProps) => <PanelOptions user={props.user} />

export const PanelOptionsContainer = connect(mapStateToProps)(Panel)
