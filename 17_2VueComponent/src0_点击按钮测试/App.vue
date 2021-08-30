<template>
    <div>
        {{ num }}
        <button @click="fn">按钮+1</button>

        {{ num }}
        <button @click="fn">按钮+1</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                num: 0


            }
        },
        methods: {
            fn(){
                this.num+=1
            }
            
        },
    }



</script>

<style scoped>
</style>