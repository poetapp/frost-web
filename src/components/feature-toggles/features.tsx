import { Feature } from '@paralleldrive/react-feature-toggles'
import { Toggle } from 'components/atoms/Toggle/Toggle'
import { ToggleNetworkContainer } from 'components/containers/ToggleNetwork.container'
import * as React from 'react'
import { FeatureName } from './initialFeatures'

export const toggleNetwork = () => (
  <Feature name={FeatureName.ToggleNetwork} inactiveComponent={Toggle} activeComponent={ToggleNetworkContainer} />
)
