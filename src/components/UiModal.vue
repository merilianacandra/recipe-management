<script setup>
const props = defineProps({
    id: String
})

</script>

<template>
    <div class="modal fade" data-bs-backdrop="static" tabindex="-1" :id="props.id">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <slot />
          </div>
        </div>
      </div>
    </div>
</template>