<template>
  <div>
    <button @click="chagep">{{ this.$store.state.changeNum }}</button>
    <h1>{{ msg }}</h1>
    <ul>
      <li class="li-sty" v-for="(it,index) in params" :class="it.id === 1 ? 'lit-sty': 'li-sty'" :key="index" v-if="it.id === 2 ? false : true">
        <span>{{index+1}}.英雄名称:{{it.name}}</span></br>
        <span>{{index+1}}.英雄介绍:{{it.content}}</span></br></br></br>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Page3',
  data () {
    return {
      msg: '页面4',
      params:[
        {
          id:1,
          name:"拉克丝",
          content:"总是在不断的在向native的体验靠拢；比如本文即将要说到的功能"
        },
        {
          id:2,
          name:"盲僧",
          content:"所有内容其实是在一个页面中展示的，不存在多页的情况说到的功能"
        },
        {
          id:3,
          name:"瑞兹",
          content:"总是在不断的在向native的体验靠拢；比如本文即将要说到的功能"
        },
        {
          id:4,
          name:"蟒王",
          content:"正如vue官网的介绍，我们在开发中就可以使用他这一点来缓存后退不"
        }
      ]
    }
  },
  methods:{
    chagep(){
      this.toast("真的诶!");
        this.$router.push({
          name:'/ParamTest',
          params:{
            id:123455
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.li-sty{
  color:red;
}
.lit-sty{
  color:black;
}

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