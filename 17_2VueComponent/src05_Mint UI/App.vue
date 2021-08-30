<template>
    <div>
        <mt-button style="width: 100%" type="default" @click="test" >default</mt-button>
        <mt-button style="width: 100%" type="primary" @click="test1">primary</mt-button>
        <mt-button style="width: 100%" type="danger"  @click="test2">danger</mt-button>
    </div>
</template>

<script>
        import { Toast } from "mint-ui";
        import { MessageBox } from 'mint-ui';
        export default {
            methods: {
                test() {
                    // alert("回调函数");
                    Toast({
                        message: '提示',
                        position: 'top',
                        duration: 5000
                        });
                },
                test1() {
                    MessageBox({
                        title: '提示',
                        message: '确定执行此操作?',
                        showCancelButton: true
                    });
                },
                test2() {
                    MessageBox('提示', '操作成功');
                },
            },
        };
</script>
   

<style scoped>
</style>