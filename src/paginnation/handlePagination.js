// handlePagination.js
import { ref, computed } from "vue";

export default function handlePagination(store) {
  const data = store.state.items; // Assuming 'items' is the array property in the Vuex store
  const perPage = 6; // Set the number of items per page

  const currentPage = ref(1); // Keep track of the current page

  const paginatedData = computed(() =>
    data.slice((currentPage.value - 1) * perPage, currentPage.value * perPage)
  ); // Compute the paginated data

  const nextPage = () => {
    if (currentPage.value !== Math.ceil(data.length / perPage)) {
      currentPage.value += 1; // Increment the current page
    }
  };

  const backPage = () => {
    if (currentPage.value !== 1) {
      currentPage.value -= 1; // Decrement the current page
    }
  };

  const goToPage = (numPage) => {
    currentPage.value = numPage; // Go to the specified page
  };

  return { data, paginatedData, perPage, currentPage, nextPage, backPage, goToPage };
}
