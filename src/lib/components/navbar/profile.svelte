<script lang="ts">
	import profilePicture from '$lib/images/navbar-user.jpg';
	import profilePicture1 from '$lib/images/me.jpeg';
	import profilePicture2 from '$lib/images/me2.png';

	let showProfileDropDown = false;
	let emailList = [
		{
			title: 'Aritra Mondal - University Email',
			email: '1806290@kiit.ac.in',
			displayPicture: profilePicture
		},
		{
			title: 'Aritra Mondal - Office Email',
			email: 'aritra.mondal@lenaix.net',
			displayPicture: profilePicture1
		},
		{
			title: 'Aritra Mondal - ACM Official Email',
			email: 'aritra@kiit.acm.org',
			displayPicture: profilePicture2
		}
	];
</script>

<button on:click={() => (showProfileDropDown = !showProfileDropDown)}>
	<img src={profilePicture} class="profile-picture" alt="User" />
</button>
{#if showProfileDropDown}
	<div class="fixed right-8 top-[70px] z-50 w-80 rounded-xl border bg-white p-2 shadow-sm">
		<div class="mb-4 flex flex-col items-center">
			<img src={profilePicture} class="mb-3 mt-3 h-24 w-24 rounded-full object-cover" alt="User" />
			<div class="mb text-sm">Aritra Mondal</div>
			<div class="mb-3 border-slate-600 text-xs">aritra041999@gmail.com</div>
			<button
				class="rounded-full border border-slate-300 px-4 pb-1 pt-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100"
			>
				Manage your account
			</button>
		</div>
		<div class="space-y-2">
			{#each emailList as email}
				<div
					class="flex w-full items-center rounded-xl border bg-slate-50 px-4 py-2 hover:bg-blue-50 hover:text-blue-700"
				>
					<img src={email.displayPicture} class="mr-4 h-7 w-7 rounded-full object-cover" alt="" />
					<div class="text-xs">
						<div>{email.title}</div>
						<div class="text-slate-500">{email.email}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
