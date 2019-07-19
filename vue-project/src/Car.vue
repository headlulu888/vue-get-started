<template>
    <div class="car">
        <h3>Carname: {{ carName }} | {{ reverseName }}</h3>
        <p>Caryear: {{ carYear }}</p>
        <button @click="changeName">Change</button>
        <button @click="changeFunc()">Parent change</button>
        <button @click="updateCounter()">Update counter</button>
    </div>
</template>

<script>
import { eventEmitter } from './main'

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
        changeFunc: Function,
    },
    methods: {
        changeName: function() {
            this.carName = 'Mazda',
            this.$emit('nameChange', this.carName)
        },
        updateCounter() {
            // this.$emit('counterUpdate', this.counter++)
            eventEmitter.$emit('counterUpdated', 3)
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

