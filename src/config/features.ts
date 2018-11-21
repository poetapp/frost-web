export enum FeatureName {
  ToggleNetwork = 'toggle-network',
  RunKit = 'run-kit',
  PostWork = 'post-work',
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
  {
    name: FeatureName.PostWork,
    isActive: true,
  },
]
