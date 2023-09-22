import papers from "$lib/data/papers.json";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  return {
    papers,
  };
}) satisfies PageServerLoad;
