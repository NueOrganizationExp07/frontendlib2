<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看酒店</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
		<label for="exampleInputPassword1">酒店编号</label>
		<span></span>
	  </div>
	  
	  <div class="form-group">
		<label for="exampleInputPassword1">酒店名称</label>
		<span></span>
	  </div>
	  
	  <div class="form-group">
	  		<label for="exampleInputEmail1">酒店负责人编号</label>
	  		<span></span>
	  </div>
	  
	  
	  
	  <router-link to="/hotel/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//酒店查看组件
	export default {
		name:"HotelView",
		data(){
			return {
				hotel:{}
			};
		},
		created(){ //组件的创建生命周期函数
			
		},
		methods:{
			getHotel(){
				
			}
		}
	}
</script>

<style>
</style>