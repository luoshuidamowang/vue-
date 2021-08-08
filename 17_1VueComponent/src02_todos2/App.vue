<template>
	<div>
		<div v-if="!repoName">loading...</div>
		<div v-else >moast star repo is <a :href="repoUrl">{{repoName}} </a> </div>


	</div>

</template>

<script>
	

	export default{
		data(){
			return{
				repoName:'',
				repoUrl:''
			}
		},
		mounted(){
			//使用vue-resource发ajax请求
			this.$http.get('https://api.github.com/search/repositories?q=v&sort=stars')
			

			
		}
	}
</script>


<style scoped>
</style>