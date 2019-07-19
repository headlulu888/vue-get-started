<template>
    <div class="car">
        <h3>Carname: {{ carName }} | {{ reverseName }}</h3>
        <p>Caryear: {{ carYear }}</p>
        <button @click="changeName">Change</button>
        <button @click="changeFunc()">Parent change</button>
    </div>
</template>

<script>
export default {
    // props: ['carName','carYear'],
    // props: {
    //     carName: String,
    //     carYear: Number
    // },
    props: {
        carName: {
            type: String,
            default: 'Default name'
        },
        carYear: {
            type: Number
        },
        changeFunc: Function
    },
    methods: {
        changeName: function() {
            this.carName = 'Mazda',
            this.$emit('nameChange', this.carName)
        }
    },
    computed: {
        reverseName() {
            return this.carName.split('').reverse().join('')
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

