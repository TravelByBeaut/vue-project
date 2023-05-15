<script lang="ts">
import Nav from './Nav.vue';
import CatItem from './CatItem.vue';
interface catResult {
  id: String;
}

export default {
  components: {
    Nav
  },
  data() {
    return {
      catIds: [] as Array<String>,
      catUrls: [] as Array<String>,
      text: ""
    };

  },

  beforeMount() {
    this.getCats();
  },

  async mounted() {
    await this.getCats()
    this.getCatById()
  },

  methods: {
    async getCats() {
      const res = await fetch("https://cataas.com/api/cats?limit=20")
      const data = await res.json()
      this.catIds = ((data as catResult[]).map((i) => i._id))
    },
    async getCatById() {
      this.catIds.forEach(async (id) => {
        await fetch(`https://cataas.com/cat/${id}`).then((res) => this.catUrls.push(res.url))
      })
    }
  },
};
</script>

<template>
  <Nav></Nav>
  <main>
    <div v-for="(cat, c) in catUrls" :key="c" class="catItem">
      <CatItem>
        <template #heading>Cats</template>
        <img alt="cat" :src=cat class="catPic" />
      </CatItem>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-content: center;
}

.catItem {
  margin: 5px;
}

.catPic {
  border: 2px solid black;
  border-radius: 10px;
  width: 150px;
  height: 150px
}
</style>
