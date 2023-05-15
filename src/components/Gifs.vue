<script lang="ts">
import Nav from './Nav.vue';
import Modal from './Modal.vue'

export default {
  components: {
    Nav,
    Modal
},
  data() {
    return {
      catUrls: [] as Array<String>,
      isModalVisible: false,
      image: ""
    };
  },

  async mounted() {
    await this.getCats()

  },
  
  methods: {
    async getCats() {
      for(let n=0; n < 6; n ++) {
        const data = await fetch("https://cataas.com/cat/gif?json=true").then((res) => res.json())
        this.catUrls.push("https://cataas.com/cat/" + data._id)
      }
    },

    showModal(image: string) {
      this.image = image;
      this.isModalVisible = true;
    },
    closeModal() {
        this.isModalVisible = false;
      }
  },
};
</script>

<template>
  <Nav></Nav>
  <main>
    <div v-for="(cat, c) in catUrls" :key="c" :image="cat" class="catItem">
      <a @click="showModal(cat)">
      <img alt="cat" :src="cat" class="catGif"/>
    </a>
    </div>
    <Modal
      v-show="isModalVisible"
      :image="image"
      :resizable="true"
      @close="closeModal()"
    />
        </main>
    <div class="button">
        <button @click="getCats">More ➧</button>
    </div>
  </template>

<style scoped>

main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
}

.catItem {
  margin: 5px;
}

.catGif {
  border: 2px solid black;
  border-radius: 10px;
  width: 150px;
  height: 150px
}
.button {
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
}
button {
    background-color: purple;
    color: white;
    border-radius: 5px;
    padding: 5px;
    z-index: 0;
}
</style>