import { Feature } from '@paralleldrive/react-feature-toggles'
import { Toggle } from 'components/atoms/Toggle/Toggle'
import { ToggleNetworkContainer } from 'components/containers/ToggleNetwork.container'
import * as React from 'react'

export const toggleNetwork = () => (
  <Feature name="toggle" inactiveComponent={Toggle} activeComponent={ToggleNetworkContainer} />
)
