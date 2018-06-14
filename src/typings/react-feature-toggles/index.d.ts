declare module '@paralleldrive/react-feature-toggles' {
  function Feature(inactiveComponent: any, activeComponent: any, name: string, children?: any): JSX.Element
  export { Feature }

  function FeatureToggles({ features }: { readonly features: ReadonlyArray<any>; readonly children: any }): JSX.Element
  export { FeatureToggles }
}
