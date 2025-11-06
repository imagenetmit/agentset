import type { DomainResponse } from "@/types/vercel";
import { env } from "@/env";

import { callVercelApi } from "./utils";

export const getDomainResponse = async (domain: string) => {
  if (!env.VERCEL_PROJECT_ID) {
    throw new Error(
      "VERCEL_PROJECT_ID environment variable is required for getting domain information from Vercel but is not configured.",
    );
  }

  return callVercelApi<
    DomainResponse & { error?: { code: string; message: string } }
  >(
    `/v9/projects/${env.VERCEL_PROJECT_ID}/domains/${domain.toLowerCase()}`,
    "GET",
  );
};
