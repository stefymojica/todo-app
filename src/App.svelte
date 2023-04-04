<script lang="ts">
  import Form from './lib/Todo-form.svelte';
  import List from './lib/Todo-list.svelte';
</script>

<main>
  
  <h1 class="text-center p-4 text-6xl font-bold " >
    <span class="bg-gradient-to-r from-pink-400 to-rose-300 text-transparent bg-clip-text">TO-DO APP</span>
  </h1>
  <Form/>
  <List status="Backlog"/>
  <List status="Pending"/>
  <List status="InProgress"/>
  <List status="Done"/>
</main>

