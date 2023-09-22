import items from "$lib/data/about.json";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    return {
        experiences: items.experience
    };
}) satisfies PageServerLoad;
  

