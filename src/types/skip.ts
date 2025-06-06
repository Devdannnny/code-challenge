export interface SkipOption {
  id: number;
  size: number;
  price: number;
  hirePeriod: string;
  image?: string;
}


export interface SummaryBarProps {
  skip: SkipOption | null;
  onContinue: () => void;
  onBack: () => void;
}

export interface SkipCardProps {
  skip: SkipOption;
  selected: boolean;
  onSelect: () => void;
}

export interface StepperProps {
  steps: string[];
  currentStep: number;
  stepDescriptions?: string[];
}