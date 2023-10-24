<script lang="ts">
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';
  import BlogEntry from '$lib/components/BlogEntry.svelte';

  // import {Pagination, PaginationItem} from 'flowbite-svelte';
  import { page } from '$app/stores';
  import { Pagination } from 'flowbite-svelte';
  import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

  export let data: PageData;
  const {posts, currentPage, totalPages} = data;

  function navigate(direction: 'prev' | 'next') {
    if (direction === 'prev' && currentPage > 1) {
      goto(`/blog?page=${currentPage - 1}`);
    } else if (direction === 'next' && currentPage < totalPages) {
      goto(`/blog?page=${currentPage + 1}`);
    }
  }

</script>

<div>
  {#each data.posts as { slug, title, author, description, date }}
    <BlogEntry {slug} {title} {author} {description} {date} />
  {/each}
</div>

<div class="pagination">
  {#if currentPage > 1}
    <button on:click={() => navigate('prev')}>Previous</button>
  {/if}

<span>{currentPage} / {totalPages}</span>

{#if currentPage < totalPages}
<button on:click={() => navigate('next')}>Next</button>
{/if}

</div>

<slot />

<style>
</style>
