<script lang="ts">
  import {items, type NoteItem} from './stores';

  const doneClick = (item:NoteItem) => {
    console.log(item)
  }
</script>

<ul style="list-style:none">
  {#each $items as item}
  <li>{item.text} 
  <button on:click={doneClick(item)}>Done</button>    
  <!-- <button>Remove</button> -->
  </li>
  {/each}
</ul>

<ul>
  <h2>DONE</h2>
</ul>





<!-- <span>{JSON.stringify($items)}</span> -->
