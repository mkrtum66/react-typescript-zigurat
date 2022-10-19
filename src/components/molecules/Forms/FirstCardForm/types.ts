export type FirstCardFormProps = {
  name: string;
  handle: string;
  description: string;
  website: string;
  // chosenSocials: AccountProps[];
  disclosure: string;
  socials: {};
};

export type AccountProps = {
  label?: string;
  value: string | number;
  key: string;
  disabled?: boolean;
  url?: string;
};
