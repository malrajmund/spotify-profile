interface ButtonProps {
  label: string;
  onClick?: () => void;
  buttonType: string;
  isAnchor: boolean;
  href?: string;
  withShadow?: boolean;
}

interface ButtonWrapperProps {
  buttonType: string;
  onClick?: () => void;
  withShadow?: boolean;
}
