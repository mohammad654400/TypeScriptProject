export interface baseType {
  id: string;
  title: string;
  type: string;
  width: number;
  // order: number;
}

export interface form extends Omit<baseType, "id" | "type"> {}
