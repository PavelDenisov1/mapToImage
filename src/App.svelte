<script lang="ts">
    import { Content } from "carbon-components-svelte";
    import Map from "./Map.svelte";
    import { ImageLoader } from "carbon-components-svelte";
    import { srcImage } from "./store/data";
</script>

<main>
    <Content>
        <Map/>
        <br/>
        {#key $srcImage}
            <ImageLoader
                src={$srcImage}
            />
        {/key}
    </Content>
</main>