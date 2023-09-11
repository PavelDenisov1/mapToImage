<script lang="ts">
    import "carbon-components-svelte/css/all.css";
    import { Button, Content } from "carbon-components-svelte";
    import Map from "./Map.svelte";
    import { ImageLoader } from "carbon-components-svelte";
    import { srcImage } from "./store/data";
    import { downloadBase64Image } from "./utils";
</script>

<main>
    <Content>
        <div style="margin: 0 auto; width: fit-content;">
            <Button 
                on:click={() => downloadBase64Image($srcImage, "image.png")}
                >Скачать</Button>
        </div>
        <Map/>
        <br/>
        {#key $srcImage}
            <ImageLoader
                src={$srcImage}
            />
        {/key}
    </Content>
</main>