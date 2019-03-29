export default{
  install(Vue,options){

    //公有弹窗
    Vue.prototype.toast = function(res){
      if(res){
        alert(res);
      }      
    };

    Vue.prototype.goPage = function(res){
      this.$router.push(res)
    };

    Vue.prototype.goBack = function(){
      this.$router.go(-1)
    }
  }
}