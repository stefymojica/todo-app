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

<div class="text-center p-4">
    <input class="box-border h-8 p-2 border-2 rounded" placeholder="write your note" bind:value={inputValue}>
    <input class="box-border h-8 p-2 border-2 rounded" placeholder="write description" bind:value={inputDescription}>   
    <button class="box-border h-8 w-40 border-2 rounded" on:click={addToItem}>Add New Note</button>
</div>









