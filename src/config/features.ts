export enum FeatureName {
  ToggleNetwork = 'toggle-network',
  RunKit = 'run-kit',
  CreateClaimForm = 'create-claim-form',
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
    name: FeatureName.CreateClaimForm,
    isActive: false,
  },
]
