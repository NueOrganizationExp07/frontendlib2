<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看入住人员</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
		<label for="exampleInputPassword1">入住人员编码</label>
		<span></span>

	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">入住人员姓名</label>
		<span></span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">入住房间号码</label>
	  		<span></span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">入住日期</label>
	  		<span></span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">退房日期</label>
	  		<span></span>
	  </div>
	  
	  
	  
	  
	  <router-link to="/customer/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//入住人员查看组件
	export default {
		name:"CustomerView",
		data(){
			return {
				customer:{}
			};
		},
		created(){ //组件的创建生命周期函数
			
		},
		methods:{
			getCustomer(){
				
			}
		}
	}
</script>

<style>
</style>