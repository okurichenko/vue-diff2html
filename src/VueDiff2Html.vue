<template>
  <div>
    <h1>Hi from Vue diff</h1>
    <div v-for="jsonDiffElement in jsonDiff">
      <diff-file :fileElement="jsonDiffElement" />
    </div>
  </div>
</template>

<script>
  import DiffFile from './DiffFile.vue';

  export default {
    props: ['jsonDiff'],
    components: { DiffFile },
  }
</script>

<style>
  @import '../node_modules/diff2html/dist/diff2html.css';
</style>
