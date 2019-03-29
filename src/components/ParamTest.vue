<template>
  <div>
    <div>
      <h1>{{ msg }}</h1>
      <h1>从上一级页面传递的参数:{{this.$route.params.id}}</h1>
      <h1>{{this.$store.state.changableNum}}</h1>
    </div>
    <div style="width:100px;height:50px;backgroundColor:black;color:white" @click="goBack">返回上一级页面</div>
  </div>
</template>

<script>

export default {
  name: 'ParamsTest',
  data () {
    return {
      msg: '新页面'
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>