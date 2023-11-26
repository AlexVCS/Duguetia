<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<div class="pt-12">
	<h1
		class="pb-6 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Welcome to Duguetia!
	</h1>
	<div class="flex flex-col gap-3 text-center">
		<figure>
			<img
				class="rounded mx-auto" src="img/duguetia_phaeoclados.jpg" alt="Duguetia phaeoclados plant"
			>
			<figcaption>Two year old Duguetia phaeoclados from The Ylang Ylang Tree in St. Petersburg, FL</figcaption>
		</figure>
		<p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
			Duguetia is a genus of fruiting plants from the Custard Apple Family (Annonaeceae) which is comprised of about 90 species from Central and South America, The Caribbean and West Africa. The bulk of the species are native to Brazil, Colombia, Ecuador, Peru and Bolivia. The genus was named by European taxonomists for Jacques Joseph Duguet (1649-1733) a French clergyman and professor of Theology. Some species are known to indigenous people by the name Araticum.
		</p>
	</div>
</div>

<Blogs title="Latest Posts" h2 {posts} search={false} count={3} />
