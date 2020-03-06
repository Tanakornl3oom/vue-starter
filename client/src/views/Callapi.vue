<template>
    <div id="call-cpi" class="call-api">
        <h1>Call api</h1>
        <div class="container">
            <h1>Response from server</h1>
            {{ this.response }}
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
const apiUrl = 'http://localhost:3000';

export default {
    data() {
        return {
            response: ''
        };
    },
    methods: {
        async fetchData() {
            const { data } = await Axios.get(apiUrl);
            this.response = data;
        }
    },
    computed: {},
    created: function() {
        this.fetchData();
    }
};
</script>

<style lang="less">
.container {
    display: inline-block;
}
</style>
