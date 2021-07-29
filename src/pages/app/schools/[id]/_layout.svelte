<script>
  import SingleSchool from './index.svelte'
  import { params } from '@sveltech/routify'

  export let slug
  $: slug = $params
</script>

<SingleSchool {slug} />
