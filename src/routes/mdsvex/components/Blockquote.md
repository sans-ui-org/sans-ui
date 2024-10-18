<script lang="ts">
	import type { HTMLBaseAttributes } from 'svelte/elements';

	type $$Props = HTMLBaseAttributes & {
		prefix: string;
	}

  export let prefix = "Note:";
</script>

<div
  class="border px-4 my-6 py-3 rounded-xl border-blue-400 bg-blue-50/20 text-gray-600 dark:text-neutral-100"
  {...$$restProps}
>
  <span class="font-bold mr-1">{prefix} </span>
  <slot />
</div>
