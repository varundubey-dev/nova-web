export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  code: string;
}

export interface InteractiveTab {
  id: string;
  label: string;
  code: string;
  description: string;
}

export interface StdLibFunction {
  name: string;
  signature: string;
  description: string;
  example: string;
  returns: string;
}

export interface StdLibModule {
  name: string;
  description: string;
  functions: StdLibFunction[];
}