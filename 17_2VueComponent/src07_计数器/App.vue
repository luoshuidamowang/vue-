<template>
    <div>
        <p>点击了多少次 {{ count }} ,他是{{ evenOrOdd }}</p>
        <button @click="incrementA">+</button>
        <button @click="incrementB">-</button>
        <button @click="incrementC">奇数增加</button>
        <button @click="incrementD">异步增加</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        };
    },

    computed: {
        evenOrOdd() {
            return this.count % 2 === 1 ? "奇书" : "偶数";
        },
    },
    methods: {
        incrementA() {
            this.count++;
        },
        incrementB() {
            this.count--;
        },
        incrementC() {
            if(this.count%2===1){
                this.count++
            }
        },
        incrementD() {
            setTimeout(() => {
                this.count++
            }, 1000);
        },
    },
};
</script>
   

<style scoped>
</style>