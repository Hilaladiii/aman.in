export interface IDocument {
  id: string;
  type: "KTP" | "SIM" | "AKTA";
  status: -1 | 0 | 1;
  user_count: number;
  emails: [];
}
