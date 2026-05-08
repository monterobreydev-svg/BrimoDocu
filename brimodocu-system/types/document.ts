export type DocumentType = "invoice" | "contract" | "report";
export type DocumentStatus = "draft" | "generated" | "sent";

export interface Document {
  id: string;
  type: DocumentType;
  status: DocumentStatus;
  title: string;
  clientName: string;
  clientEmail?: string;
  amount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface DocumentField {
  key: string;
  label: string;
  type: "text" | "email" | "number" | "date" | "textarea";
  required?: boolean;
}
