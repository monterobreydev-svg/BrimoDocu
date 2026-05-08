"use client";
import { useState, useEffect } from "react";
import type { Document } from "@/types/document";

export function useDocument(id: string) {
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    // TODO: fetch document by id
    setLoading(false);
  }, [id]);

  return { document, loading, error };
}
