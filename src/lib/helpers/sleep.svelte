<script lang="ts" context="module">
    export function sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
</script>