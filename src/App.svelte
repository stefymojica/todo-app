<script lang="ts">
  import Form from './lib/Todo-form.svelte';
  import List from './lib/Todo-list.svelte';
</script>

<main>
  <h1>TO-DO APP</h1>
  <Form/>
  <List status="Backlog"/>
  <List status="Pending"/>
  <List status="InProgress"/>
  <List status="Done"/>
</main>

