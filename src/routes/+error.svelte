<script>
	import { page } from '$app/stores';
</script>

<div class="h-56 flex flex-col items-center justify-center">
	<h1 class="text-2xl font-semibold">{$page.status} - {$page.error?.message ?? 'Unknow error'}</h1>
</div>
