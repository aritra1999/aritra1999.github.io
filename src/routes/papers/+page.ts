import papers from "$lib/data/papers.json";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  return {
    papers,
  };
};
