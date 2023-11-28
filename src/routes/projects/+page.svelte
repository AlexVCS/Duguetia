<script>
	import Card from '$lib/components/Card.svelte';
	import Title from '$lib/components/Title.svelte';

	export let data;
	const projects = data.projects;
</script>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title title="Projects" />
	</div>
	<div class="container py-12">
		<div class="-m-4 flex flex-wrap">
			{#if !projects.length}
				No project found.
			{:else}
				{#each projects as project}
					<Card card={project} />
				{/each}
			{/if}
		</div>
	</div>
</div>
