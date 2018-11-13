export enum FeatureName {
  ToggleNetwork = 'toggle-network',
  RunKit = 'run-kit',
  Announcement = 'announcement',
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
    name: FeatureName.Announcement,
    isActive: false,
  },
]
