declare module '@paralleldrive/react-feature-toggles' {
  function Feature(
    inactiveComponent: any,
    activeComponent: any,
    name: string,
    children?: any,
  ): JSX.Element;
  export { Feature }

  interface FeatureTogglesProps {
    features: Array<string>
  }
  function FeatureToggles(object: FeatureTogglesProps): JSX.Element;
  export { FeatureToggles }
}
