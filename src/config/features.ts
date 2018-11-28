export enum FeatureName {
  ToggleNetwork = 'toggle-network',
  RunKit = 'run-kit',
  WorkClaimForm = 'work-claim-form',
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
    name: FeatureName.WorkClaimForm,
    isActive: true,
  },
]
