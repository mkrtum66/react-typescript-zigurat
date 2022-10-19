export type AccordionProps = {
  title: string;
  texts: AccordionTextProps[];
};
export type AccordionTextProps = {
  text: string;
};
export type ItemsProps = {
  items: AccordionProps[];
};
