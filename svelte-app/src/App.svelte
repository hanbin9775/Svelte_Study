<script>
  import KeyedEachBlock from "./logic/KeyedEachBlock.svelte";
  let things = [
    { id: 1, color: "darkblue" },
    { id: 2, color: "indigo" },
    { id: 3, color: "deeppink" },
    { id: 4, color: "salmon" },
    { id: 5, color: "gold" },
  ];

  function handleClick() {
    things = things.slice(1);
  }
</script>

<button on:click={handleClick}> Remove first thing </button>

{#each things as thing (thing)}
  <KeyedEachBlock current={thing.color} />
{/each}
