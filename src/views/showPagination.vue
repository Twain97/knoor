<template>
  <div v-for="item in paginatedData" :key="item.index">
    {{ item.value }}
  </div>
  <button @click="backPage">Prev</button>
  <button v-for="item in Math.ceil(data.length / perPage)" :key="item"
    @click="() => goToPage(item)">
    {{ item }}
  </button>

  <button @click="nextPage">Next</button>
</template>


<script>
import store from "../store";
import handlePagination from "../paginnation/handlePagination";

export default {
  setup() {
    const { data, paginatedData, perPage, currentPage, nextPage, backPage, goToPage } = handlePagination(store);

    return {
      data,
      paginatedData,
      perPage,
      currentPage,
      nextPage,
      backPage,
      goToPage,
    };
  },
};
</script>

<style>

</style>