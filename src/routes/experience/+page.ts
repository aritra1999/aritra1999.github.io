import items from "$lib/data/about.json";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  return {
    experiences: items.experience,
  };
};
