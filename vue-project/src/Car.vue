<template>
    <div class="car">
        <h3>Carname: {{ carName }}</h3>
        <p>Caryear: {{ carYear }}</p>
    </div>
</template>

<script>
export default {
    props: [
        'carName',
        'carYear'
    ],
    data() {
        return {
        }
    }
}
</script>

<style>
    .car {
        border: 1px solid black;
    }

    .car h3 {
        margin-bottom: 5px;
    }
</style>

