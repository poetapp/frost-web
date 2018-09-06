import { Feature } from '@paralleldrive/react-feature-toggles'
import { Toggle } from 'components/atoms/Toggle/Toggle'
import { ToggleNetworkContainer } from 'components/containers/ToggleNetwork.container'
import { FeatureName } from 'config/features'
import * as React from 'react'

export const toggleNetwork = () => (
  // PR created in react-feature-toggles - once merged can delete typecast for Toggle
  <Feature
    name={FeatureName.Toggle}
    inactiveComponent={Toggle as React.StatelessComponent}
    activeComponent={ToggleNetworkContainer}
  />
)
