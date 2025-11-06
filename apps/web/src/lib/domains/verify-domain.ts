import type { DomainResponse } from "@/types/vercel";
import { env } from "@/env";

import { callVercelApi } from "./utils";

export const verifyDomain = async (domain: string) => {
  if (!env.VERCEL_PROJECT_ID) {
    throw new Error(
      "VERCEL_PROJECT_ID environment variable is required for verifying domains on Vercel but is not configured.",
    );
  }

  return callVercelApi<DomainResponse>(
    `/v9/projects/${env.VERCEL_PROJECT_ID}/domains/${domain.toLowerCase()}/verify`,
    "POST",
  );
};
