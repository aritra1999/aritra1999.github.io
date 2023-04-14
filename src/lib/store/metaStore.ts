import { writable } from "svelte/store";

export const metaStore = writable({
    screen: "desktop",
    showSidebar: true,
    showContactForm: false
});