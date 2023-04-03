<script lang="ts">
  import { derived } from "svelte/store";
  import { items, type NoteItem, type NoteStatus } from "./stores";

  export let status: NoteStatus = "Pending";

  const handleStatusChange = (noteItem: NoteItem, noteStatus: NoteStatus) => {
    if (noteItem.status !== noteStatus) {
      const index = $items.findIndex((item) => item.id === noteItem.id);
      $items[index].status = noteStatus;
      $items[index].updated_at = new Date().toString();
    } else {
      console.error("Esta nota ya tiene el estado InProgress", noteItem);
    }
  };

  const deleteItem = (noteItem: NoteItem) => {
    const newItems = $items.filter((item) => item.id !== noteItem.id);
    console.warn(newItems);
    $items = newItems;
  };

  const hasItems = derived(items, ($items) => {
    const result = $items.filter((item) => item.status === status);
    console.warn({ result, status });
    return result.length > 0;
  });
</script>

<h2>{status}</h2>
<ul style="list-style:none">
  {#if !$hasItems}
    <p>Por favor agrega items</p>
  {/if}
  {#each $items.filter((item) => item.status === status) as item}
    <li>
      {item.id} - {item.text} - {item.status} - {item.updated_at}
      {#if item.status === "Pending"}
        <button on:click={() => handleStatusChange(item, "InProgress")}
          >InProgress</button
        >
      {/if}

      {#if item.status === "InProgress"}
        <button on:click={() => handleStatusChange(item, "Done")}>Done</button>
      {/if}
      <button on:click={() => deleteItem(item)}>Remove</button>
    </li>
  {/each}
</ul>

<!-- <span>{JSON.stringify($items)}</span> -->
