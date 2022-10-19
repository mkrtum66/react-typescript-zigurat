import { ReactNode } from 'react';

export interface IDrawerItemProps {
  project: ProjectType;
  children: ReactNode;
}
export type ProjectType = {
  id: number;
  title: string;
  description: string;
};
