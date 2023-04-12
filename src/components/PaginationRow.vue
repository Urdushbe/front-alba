<template>
  <div class="row">
    <div class="col mt-5">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link bg-dark">ortga</a>
          </li>
          <li class="page-item"><a class="page-link bg-dark" href="#">1</a></li>
          <li class="page-item " aria-current="page">
            <a class="page-link activeuz btn-warning" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link bg-dark" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link bg-dark" href="#">oldinga</a>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: "PaginationRow"
}
</script>

<style scoped>

</style>