<script lang="ts">
import Nav from './Nav.vue';

export default {
  components: {
    Nav
  }
}
</script>

<template>
    <Nav></Nav>
    <main>
        <h3>All About Cats!</h3>
        <br/>
        <img src="https://cataas.com/c/2bPYDRuvU70sbgja/s/Hello%20World" alt="cat" class="catPic"/>
        <br/>
      <p>The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family. Cats are commonly kept as house pets but can also be farm cats or feral cats; the feral cat ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to kill rodents. About 60 cat breeds are recognized by various cat registries. <br/><br/>

      The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth, and retractable claws adapted to killing small prey like mice and rats. Its night vision and sense of smell are well developed. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling, and grunting as well as cat-specific body language. Although the cat is a social species, it is a solitary hunter. As a predator, it is crepuscular, i.e. most active at dawn and dusk. It can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small mammals. It also secretes and perceives pheromones. <br/><br/>

      Female domestic cats can have kittens from spring to late autumn, with litter sizes often ranging from two to five kittens. Domestic cats are bred and shown at events as registered pedigreed cats, a hobby known as cat fancy. Population control of cats may be achieved by spaying and neutering, but their proliferation and the abandonment of pets has resulted in large numbers of feral cats worldwide, contributing to the extinction of entire bird, mammal, and reptile species. <br/><br/>

      It was long thought that cat domestication began in ancient Egypt, where cats were venerated from around 3100 BC, but recent advances in archaeology and genetics have shown that their domestication occurred in Western Asia around 7500 BC. <br/><br/>
      
      As of 2021, there were an estimated 220 million owned and 480 million stray cats in the world. As of 2017, the domestic cat was the second most popular pet in the United States, with 95.6 million cats owned and around 42 million households owning at least one cat. In the United Kingdom, 26% of adults have a cat, with an estimated population of 10.9 million pet cats as of 2020. <br/><br/>
</p>
    </main>
  </template>

<style scoped>

main {
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  margin: 20px;
  padding: 20px;
}
h3 {
    font-weight: bold;
    text-align: center;
    font-size: xx-large;
}
.catPic {
    width: 400px;
    justify-self: center;
    border: 8px solid purple;
    border-radius: 20px;
}
</style>