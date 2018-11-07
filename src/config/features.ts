export enum FeatureName {
  ToggleNetwork = 'toggle-network',
  RunKit = 'run-kit',
}

export const initialFeatures: ReadonlyArray<any> = [
  {
    name: FeatureName.ToggleNetwork,
    isActive: true,
  },
  {
    name: FeatureName.RunKit,
    isActive: true,
  },
]
