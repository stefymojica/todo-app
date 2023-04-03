<script lang="ts">
    import {items, lastIndex} from './stores'

    let inputValue = "";
    const addToItem = () => {
        $items.push({
            id:$lastIndex,
            status:"Backlog",
            text:inputValue
        });
        $lastIndex++;
        $items = $items
        inputValue = "";
    }
</script>

<input placeholder="write your note" bind:value={inputValue}>

<button on:click={addToItem}>
Add New Note
</button>







