import { env } from "@/env";

import { callVercelApi } from "./utils";

export const removeDomainFromVercel = async (domain: string) => {
  if (!env.VERCEL_PROJECT_ID) {
    throw new Error(
      "VERCEL_PROJECT_ID environment variable is required for removing domains from Vercel but is not configured.",
    );
  }

  // if there are other subdomains or the apex domain itself is in use
  // so we should only remove it from our Vercel project
  return callVercelApi<{
    error?: { code: string; message: string };
  }>(
    `/v9/projects/${env.VERCEL_PROJECT_ID}/domains/${domain.toLowerCase()}`,
    "DELETE",
  );
};
