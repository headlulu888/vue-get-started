<template>
    <div>
        <slot name="title"></slot>
        <hr>
        <hr>
        <slot name="text"></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    div {
        border: 1px solid black;
        padding: 10px;
    }

    h1 {
        color: red;
    }
</style>
