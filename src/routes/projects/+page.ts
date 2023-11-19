import projects from "$lib/data/projects.json";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({}) => {
  return {
    projects,
  };
};
