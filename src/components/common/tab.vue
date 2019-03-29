<template>
  <div class="relationNav">
    <button class="btn-st" :class="params.btnFirst ? 'btn-col':'' " @click="handleClick(1)">首页</button>
    <button class="btn-st" :class="params.btnSce ? 'btn-col':'' " @click="handleClick(2)">页面2</button>
    <button class="btn-st" :class="params.btnTh ? 'btn-col':'' " @click="handleClick(3)">页面3</button>
    <button class="btn-st" :class="params.btnFour ? 'btn-col':'' " @click="handleClick(4)">页面4</button>
  </div>
</template>
<style>
.relationNav{
  position: absolute;
  bottom:0;
  width:96%;
  height:50px;
}
.btn-st{
  width:24%;
  height:50px;
  color:white;
  background-color: blue
}
.btn-col{
  background-color: red
}
</style>
<script>
  export default {
    // props: ['name'],
    data(){
      return {
        params:{
          btnFirst:false,
          btnSce:false,
          btnTh:false,
          btnFour:false
        }
      }
    },
    methods:{
      handleClick(res){
        if (res === 1) {
          this.params.btnFirst = true;
          this.params.btnSce=false;
          this.params.btnTh=false;
          this.params.btnFour=false;
          this.$router.push({
            name:'/HelloWorld',
            params:{
              id:123455
            }
          })
        }
        else if(res === 2){
          this.params.btnFirst = false;
          this.params.btnSce=true;
          this.params.btnTh=false;
          this.params.btnFour=false;
          this.$router.push({
            name:'/Page1',
            params:{
              id:123455
            }
          })
        }
        else if(res === 3){
          this.params.btnFirst = false;
          this.params.btnSce=false;
          this.params.btnTh=true;
          this.params.btnFour=false;
          this.$router.push({
            name:'/Page2',
            params:{
              id:123455
            }
          })
        }
        else{
          this.params.btnFirst=false;
          this.params.btnSce=false;
          this.params.btnTh=false;
          this.params.btnFour=true;
          this.$router.push({
            name:'/Page3',
            params:{
              id:123455
            }
          })
        }
      }
    }
  }
</script>