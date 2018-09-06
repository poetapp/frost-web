import { Feature } from '@paralleldrive/react-feature-toggles'
import { Toggle } from 'components/atoms/Toggle/Toggle'
import { ToggleNetworkContainer } from 'components/containers/ToggleNetwork.container'
import * as React from 'react'
import { StatelessComponent } from 'react-redux'

export const toggleNetwork = () => (
  // PR created in react-feature-toggles - once merged can delete cast for Toggle
  <Feature
    name="toggle"
    inactiveComponent={Toggle as StatelessComponent<any>}
    activeComponent={ToggleNetworkContainer}
  />
)
