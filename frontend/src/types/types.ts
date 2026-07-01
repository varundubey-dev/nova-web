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

export interface Example {
  id: string;
  title: string;
  description: string;
  category: string;
  code: string;
  output: string;
}

export interface Release {
  version: string;
  date: string;
  tag: "major" | "minor" | "patch";
  summary: string;
  changes: {
    type: "added" | "changed" | "fixed" | "removed";
    items: string[];
  }[];
}