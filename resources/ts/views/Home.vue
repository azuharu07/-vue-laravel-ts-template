<template>
    <div class="home">
        <h1>Home Page</h1>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ExampleComponent from "../components/ExampleComponent.vue";

export default Vue.extend({
    name: "Home",
    components: {
        ExampleComponent
    }
});
</script>
