import type { Document } from "@/types/document";

export async function getDocuments(): Promise<Document[]> {
  // TODO: replace with real DB/API call
  return [];
}

export async function getDocument(id: string): Promise<Document | null> {
  // TODO: replace with real DB/API call
  return null;
}

export async function createDocument(data: Partial<Document>): Promise<Document> {
  // TODO: replace with real DB/API call
  throw new Error("createDocument not implemented");
}

export async function updateDocument(id: string, data: Partial<Document>): Promise<Document> {
  // TODO: replace with real DB/API call
  throw new Error("updateDocument not implemented");
}

export async function deleteDocument(id: string): Promise<void> {
  // TODO: replace with real DB/API call
}
