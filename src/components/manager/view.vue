<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看酒店负责人</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
		<label for="exampleInputEmail1">酒店负责人编号</label>
		<span></span>
		
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">酒店负责人姓名</label>
		<span></span>
	  </div>
	  
	  <div class="form-group">
	  		<label for="exampleInputPassword1">酒店负责人电话号码</label>
	  		<span></span>
	  </div>
	  
	  
	  <router-link to="/manager/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//酒店负责人查看组件
	export default {
		name:"ManagerView",
		data(){
			return {
				manager:{}
			};
		},
		created(){ //组件的创建生命周期函数
			
		},
		methods:{
			getManager(){
				
			}
		}
	}
</script>

<style>
</style>