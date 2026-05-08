import type { DocumentField, DocumentType } from "@/types/document";

export interface Template {
  id: string;
  type: DocumentType;
  name: string;
  description: string;
  fields: DocumentField[];
}

export async function getTemplates(): Promise<Template[]> {
  // TODO: replace with real DB/API call
  return [];
}

export async function getTemplate(id: string): Promise<Template | null> {
  // TODO: replace with real DB/API call
  return null;
}
