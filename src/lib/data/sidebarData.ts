import { Github, Images, LayoutDashboard, Linkedin, Mail, Twitter, Youtube } from '@lucide/svelte';

export const sidebarAppItems = [
	{
		name: 'Gallery',
		icon: Images,
		link: 'https://gallery.aritra.bio'
	},
	{
		name: 'Dash',
		icon: LayoutDashboard,
		link: 'https://dash.aritra.bio'
	}
];

export const sidebarSocialItems = [
	{
		title: 'X / Twitter',
		link: 'https://twitter.com/aritramondal199',
		icon: Twitter
	},
	{
		title: 'GitHub',
		link: 'https://github.com/aritra1999',
		icon: Github
	},
	{
		title: 'Linkedin',
		link: 'https://www.linkedin.com/in/aritra1999',
		icon: Linkedin
	},
	{
		title: 'Youtube',
		link: 'https://www.youtube.com/@aritramondal5987',
		icon: Youtube
	},
	{
		title: 'Gmail',
		link: 'mailto:aritra041999@gmail.com',
		icon: Mail
	}
];
