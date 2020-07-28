<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看房间</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
		<label for="exampleInputPassword1">房间号码</label>
		<span></span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">房间类型</label>
		<span></span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间价格</label>
	  		<span></span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">酒店编号</label>
	  		<span></span>
	  </div>
	  <router-link to="/room/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//房间查看组件
	export default {
		name:"RoomView",
		data(){
			return {
				room:{}
			};
		},
		created(){ //组件的创建生命周期函数
			
		},
		methods:{
			getRoom(){
				
			}
		}
	}
</script>

<style>
</style>