export interface IDocument {
  id: string;
  user_id: string;
  name: string;
  type: "KTP" | "SIM" | "AKTA" | "LAINNYA";
  status: -1 | 0 | 1;
  number: string;
}
