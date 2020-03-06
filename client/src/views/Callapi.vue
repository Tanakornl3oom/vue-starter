<template>
    <div id="call-cpi" class="call-api">
        <h1>Call api</h1>
        <div class="container">
            <h1>Response from server</h1>

            <button @click="fetchDatas">click to change data default</button>
            <br />

            <span>
                <input
                    placeholder="create data"
                    type="text"
                    v-model="info"
                    @keyup.enter.prevent="createData"
                />
                <button @click="createData">click to add data</button> <br />
            </span>

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
            info: '',
            response: []
        };
    },
    methods: {
        async fetchData() {
            const { data } = await Axios.get(apiUrl);
            this.response.push(data);
        },
        async fetchDatas() {
            const { data } = await Axios.get(apiUrl + '/datas');
            this.response = data;
        },
        async createData() {
            console.log(this.response.lenght);
            const { data } = await Axios.post(apiUrl + '/data', {
                info: this.info || 'default',
                datas: this.response
            });
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
