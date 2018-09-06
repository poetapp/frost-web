export enum FeatureName {
  Toggle = 'toggle',
}

export const initialFeatures: ReadonlyArray<any> = [
  {
    name: FeatureName.Toggle,
    isActive: false,
  },
]
