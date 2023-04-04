<script lang="ts">
    import {items, lastIndex} from './stores'

    let inputValue = "";
    let inputDescription ="";
    const addToItem = () => {
        $items.push({
            id:$lastIndex,
            status:"Backlog",
            text:inputValue,
            description:inputDescription,
        });
        $lastIndex++;
        $items = $items
        inputValue = "";
        inputDescription = "";
    }
</script>

<input placeholder="write your note" bind:value={inputValue}>
<input placeholder="write description" bind:value={inputDescription}>

<button on:click={addToItem}>
Add New Note
</button>







