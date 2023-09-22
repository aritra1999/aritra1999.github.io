import projects from "$lib/data/projects.json";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  return {
    projects,
  };
}) satisfies PageServerLoad;
