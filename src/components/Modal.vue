<script lang="ts">
export default {
  name: 'ImageModal',
  props: {
    image: {
      image: String,
      default: "Default Image",
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <img class="modal-image" :src="image" />
      <button type="button" class="btn-close" @click="close">
        x
      </button>
    </div>
  </div>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal-image {
  max-height: 80vh;
  padding: 15px;
  padding-top: 40px;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  right: 0;
  border: none;
  font-size: 30px;
  padding-right: 5px;
  cursor: pointer;
  font-weight: bold;
  color: purple;
  background-color: white;
}

.btn-close:active {
  color: black;
}
</style>

