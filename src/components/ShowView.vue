<template>
  <div class="py-4">
    <Header page="Bolão 01" to="/" />
    <List class="mt-8">
      <ListItem title="Sorteios" />
      <ListItem title="Participantes" />
      <ListItem title="Ranking" />
    </List>
  </div>
</template>

<script setup>
import Header from './shared/Header.vue'
import List from './shared/List.vue'
import ListItem from './shared/ListItem.vue'
</script>
