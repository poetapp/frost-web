export enum FeatureName {
  ToggleNetwork = 'toggle-network',
}

export const initialFeatures: ReadonlyArray<any> = [
  {
    name: FeatureName.ToggleNetwork,
    isActive: false,
  },
]
