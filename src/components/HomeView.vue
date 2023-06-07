<template>
  <div class="py-4">
    <Header page="Bolões" />
    <div class="mt-8">
      <div class="flex flex-col sm:flex-row items-center justify-between">
        <Tab>
          <TabItem
            label="Ativo"
            :active="tab === 'ativo'"
            @update="updateTab('ativo')"
          />
          <TabItem
            label="Pendente"
            :active="tab === 'pentente'"
            @update="updateTab('pentente')"
          />
          <TabItem
            label="Finalizado"
            :active="tab === 'finalizado'"
            @update="updateTab('finalizado')"
          />
        </Tab>
        <button
          type="button"
          class="w-full sm:w-auto text-base-50 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center justify-center mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Novo Bolão
        </button>
      </div>

      <List class="mt-8">
        <ListItem title="Bolão 01" label="Ativo" to="/show" link />
        <ListItem title="Bolão 02" label="Pendente" />
        <ListItem title="Bolão 03" label="Finalizado" />
      </List>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from './shared/Header.vue'
import Tab from './shared/Tab.vue'
import TabItem from './shared/TabItem.vue'
import List from './shared/List.vue'
import ListItem from './shared/ListItem.vue'

const router = useRouter()

const tab = ref('ativo')

const updateTab = value => {
  tab.value = value
}

const redirect = () => {
  router.push('/show')
}
</script>
