<script lang="ts">
	import { onMount } from "svelte";

    const wordDefinitions: any = {
        "{DH}": `<span class="text-xl" style="color: #c72c41;">{DH} damage</span>`,
        "{PP}": `<span class="text-xl" style="color: #4d7cb7;">{PP} protection points</span>`,
        "{HP}": `<span class="text-xl" style="color: #ffaaaa;">{HP} health points</span>`,
        "{AH}": `<span class="text-xl" style="color: #bb141e;">{AH} true damage</span>`,
        "{BS}": `<span class="text-xl" style="color: #970031;">{BS} bleeding stacks</span>`,
        "{PS}": `<span class="text-xl" style="color: #63b521;">{PS} poison stacks</span>`,
        "{WD}": `<span class="text-xl" style="color: #64541a;">{WD} vulnerability debuffs</span>`,
        "{WA}": `<span class="text-xl" style="color: #64541a;">{WA} fatigue debuffs</span>`,
        "{WP}": `<span class="text-xl" style="color: #64541a;">{WP} frail debuffs</span>`,
        "{AA}": `<span class="text-xl" style="color: #2476db;">{AA} armor buff</span>`,
        "{AB}": `<span class="text-xl" style="color: #c72c41;">{AB} attack buff</span>`,
        "{PB}": `<span class="text-xl" style="color: #32527b;">{PB} protection bonus</span>`,
        "{PA}": `<span class="text-xl" style="color: #ba000a;">{PA} passive attack</span>`,
        "{PPS}": `<span class="text-xl" style="color: #ffd700;">All protection points are stacked</span>`,
        "{GAB}": `<span class="text-xl" style="color: #ffd700;">{GAB} attack buff</span>`,
        "{PPA}": `<span class="text-xl" style="color: #ffd700;">convert protection points to direct hit when attacked</span>`,
        "{EX}": `<span class="text-xl" style="color: #970031;">{EX} if target is bleeding</span>`,
        "{FL}": `<span class="text-xl" style="color: #970031;">{FL} if target has no protection points</span>`,
        "{DC}": `<span class="text-xl" style="color: #e7bd42;">{DC} extra cards next turn</span>`,
        "{ABS}": `<span class="text-xl" style="color: #ffd700;">{ABS} direct hit to all enemies, once</span>`,
        "{DB}": `<span class="text-xl" style="color: #c72c41;">{DB} stacks of double damage</span>`,
        "{SD}": `<span class="text-xl" style="color: #970031;">{SD} direct hits and steal them</span>`,
        "{SCH}": `<span class="text-xl" style="color: #ffd700;">{SCH} fatigue debuffs and {SCH} frail debuff to cast each turn</span>`,
        "{BP}": `<span class="text-xl" style="color: #c3272b;">{BP} of own health points</span>`,
        "{SI}": `<span class="text-xl" style="color: #30b21a;">{SI} vulnerability tacks to poisoned enemies</span>`,
        "{PO}": `<span class="text-xl" style="color: #30b21a;">{PO} passive poison stacks</span>`,
        "{LI}": `<span class="text-xl" style="color: #ffd700;">{LI} direct hit for all poison stacks</span>`,
    };

    export let text: string= "";
    let special: boolean = false;
    let words: string[]=[];

    onMount(() => {
        words = text.split(" ");

        if (text == "All protection points are stacked")
            special = true;
    });

    function interpretWord(word: string, action?: number) {
        if (!wordDefinitions[word])
            return `<span class="text-xl">${word}</span>`;
        else {
            let reinterpreted = wordDefinitions[word];

            console.log("Reinterpreted : " + reinterpreted)

            if (action === undefined)
                reinterpreted = reinterpreted.replaceAll(word, "X");
            else
                reinterpreted = reinterpreted.replaceAll(word, "X"); //TBD

            return reinterpreted;
        }
    }

</script>

{#if !special}
    {#each words as word}
        {@html interpretWord(word)}
        <span class="pl-0.5"></span>
    {/each}
{:else}
    {#each words as word}
    <span class="text-xl" style="color: #ffd700;">{word}</span>
        <span class="pl-0.5"></span>
    {/each}
{/if}