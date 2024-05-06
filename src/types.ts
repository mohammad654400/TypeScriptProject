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

export interface ApiItem {
  alpha_two_code: string;
  name: string;
  country: string;
  domains: string[];
  web_pages: string[];
  state_province: string | null;
}

export interface form extends Omit<baseType, "id" | "type"> {}
