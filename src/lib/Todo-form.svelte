<script lang="ts">
    import {items, lastIndex} from './stores'

    let inputValue = "";
    const addToItem = () => {
        $items.push({
            id: $lastIndex,
            status:"Pending",
            text:inputValue,
            updated_at: new Date().toString()
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







