export interface Competencia {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export interface CardProps extends Competencia {
  onClick?: () => void;
}

/* 
export type CardResponse = Omit<Competencia, "onClick">; */

/* interface CardResponse {
  title: string;
  description: string;
  image: string;
} */
