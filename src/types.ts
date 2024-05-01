export interface baseType {
  id: string;
  title: string;
  type: string;
  width: number;
  height: number;
  order: number;
  color?: string;
  fontSize?: number;
  display?: string;
  justifyContent?: string;
  alignItem?: string;
  selectItem?: string[];
}

export interface form extends Omit<baseType, "id" | "type"> {}
