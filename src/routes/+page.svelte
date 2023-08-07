<script>
	import {Icon} from '@steeze-ui/svelte-icon'
	// @ts-ignore
	import * as Icons from '$lib'

	const themes = Object.keys(Icons[Object.keys(Icons)[0]])
	let theme = 'default'

	const _icons = Object.keys(Icons)
	console.log(Object.keys(Icons))
</script>

<svelte:head>
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<main class="p-4">
	<h1 class="mb-4 text-2xl">@tadashi/base-icon</h1>

	<div class="mb-4">
		<label class="block" for="theme-select">Escolha o tema:</label>
		<select id="theme-select" bind:value={theme}>
			{#each themes as th}
				<option value={th}>{th}</option>
			{/each}
		</select>
	</div>

	<div class="grid grid-flow-col auto-cols-max gap-4">
		{#each _icons as Src}
			<div class="flex flex-col gap-2 items-center">
				<div class="flex justify-center items-center w-[80px] h-[80px] rounded-md hover:border-2 border-sky-500 bg-slate-200">
					<Icon src={Icons[Src]} size="32px" {theme} />
				</div>
				<small>{Src}</small>
			</div>
		{/each}
	</div>
</main>
