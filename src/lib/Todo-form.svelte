<script lang="ts">
    import {items} from './stores'

    let inputValue = "";
    const addToItem = () => {
        $items.push({
            status:"Pending",
            text:inputValue
        });
        $items = $items
        inputValue = "";
    }
</script>

<input placeholder="write your note" bind:value={inputValue}>

<button on:click={addToItem}>
Add New Note
</button>







