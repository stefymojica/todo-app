<script lang="ts">
  import {items, type NoteItem, type NoteStatus} from './stores';

  export let status:NoteStatus;
  const handleStatusChange = (noteItem:NoteItem, noteStatus:NoteStatus) => {
    if (noteItem.status !== noteStatus){
      const index = $items.findIndex((item) => item.id === noteItem.id)
      $items[index].status = noteStatus 
    }
  }

  const deleteItem = (noteItem:NoteItem) => {
    const newItems = $items.filter((item) => item.id !== noteItem.id);
    $items = newItems
  }
</script>

<h2>{status}</h2>
<ul style="list-style:none">
  {#each $items.filter((item) => item.status === status) as item}
  <li>{item.text} - {item.status}

  {#if item.status === "Backlog"}
  <button on:click={() => handleStatusChange(item, "Pending")}>Pending</button>   
  {/if}

  {#if item.status === "Pending"}
  <button on:click={() => handleStatusChange(item, "InProgress")}>In Progress</button>  
  {/if}

  {#if item.status === "InProgress"}
  <button on:click={() => handleStatusChange(item, "Done")}>Done</button>   
  {/if}

  <button on:click={() => deleteItem(item)}>Remove</button>   
  <!-- <button>Remove</button> -->
  </li>
  {/each}
</ul>




<!-- <span>{JSON.stringify($items)}</span> -->
