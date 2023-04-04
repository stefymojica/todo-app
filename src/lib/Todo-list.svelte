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

<div class="box-border p-4 border-2  text-center">
  <h2 class="text-rose-400">{status}</h2>
  <div>
    <ul style="list-style:none">
      {#each $items.filter((item) => item.status === status) as item}
      <li>{item.text} : {item.description}
    
      {#if item.status === "Backlog"}
      <button class="box-border p-1 border-2 rounded" on:click={() => handleStatusChange(item, "Pending")}>Pending</button>   
      {/if}
    
      {#if item.status === "Pending"}
      <button class="box-border p-1 border-2 rounded" on:click={() => handleStatusChange(item, "InProgress")}>In Progress</button>  
      {/if}
    
      {#if item.status === "InProgress"}
      <button class="box-border p-1 border-2 rounded" on:click={() => handleStatusChange(item, "Done")}>Done</button>   
      {/if}
    
      <button class="box-border p-1 border-2 rounded" on:click={() => deleteItem(item)}>Remove</button>   
      <!-- <button>Remove</button> -->
      </li>
      {/each}
    </ul>
  </div>
</div>





<!-- <span>{JSON.stringify($items)}</span> -->
