export enum FeatureName {
  ToggleNetwork = 'toggle-network',
  RunKit = 'run-kit',
  Announcement = 'announcement',
}

export const initialFeatures: ReadonlyArray<any> = [
  {
    name: FeatureName.ToggleNetwork,
    isActive: false,
  },
  {
    name: FeatureName.RunKit,
    isActive: false,
  },
  {
    name: FeatureName.Announcement,
    isActive: false,
  },
]
