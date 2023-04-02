<script>
    import {items} from './stores.ts'

    let inputValue = "";
    const addToItem = () => {
        $items.push(inputValue);
        $items = $items
        inputValue = "";
    }
</script>

<input placeholder="write your note" bind:value={inputValue}>

<button on:click={addToItem}>
Add New Note
</button>


<ul style="list-style:none">
    {#each $items as item}
    <li>{item} 
    <button>Done</button>    
    <button>Remove</button>
    </li>
    {/each}
</ul>


