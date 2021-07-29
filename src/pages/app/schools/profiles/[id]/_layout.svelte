<script>
  import View from "./view.svelte";
  import {
    params
  } from '@sveltech/routify'

  export let slug;
  $: slug = $params;

</script>


  <View {slug} />
