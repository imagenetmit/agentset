import { env } from "@/env";

import { callVercelApi } from "./utils";

export const addDomainToVercel = async (domain: string) => {
  if (!env.VERCEL_PROJECT_ID) {
    throw new Error(
      "VERCEL_PROJECT_ID environment variable is required for adding domains to Vercel but is not configured.",
    );
  }

  return callVercelApi<{
    error?: { code: string; message: string };
  }>(`/v10/projects/${env.VERCEL_PROJECT_ID}/domains`, "POST", {
    name: domain.toLowerCase(),
  });
};
