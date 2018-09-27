import { Feature } from '@paralleldrive/react-feature-toggles'
import { Toggle } from 'components/atoms/Toggle/Toggle'
import { ToggleNetworkContainer } from 'components/containers/ToggleNetwork.container'
import { FeatureName } from 'config/features'
import * as React from 'react'

export const toggleNetwork = () => (
  <Feature
    name={FeatureName.ToggleNetwork}
    inactiveComponent={Toggle as React.StatelessComponent}
    activeComponent={ToggleNetworkContainer}
  />
)
