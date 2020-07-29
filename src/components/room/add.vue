<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加房间</h3>
</div>
<div class="box-body">
	<form method="post" v-on:submit.prevent="add()" >
	  <div class="form-group">
		<label for="exampleInputPassword1">房间号码</label>
		<input type="text" class="form-control" v-model="room.roomId" required >
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">房间类型</label>
		<input type="text" class="form-control" v-model="room.roomType" required>
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">房间价格</label>
	  	<input type="text" class="form-control" v-model="room.roomPrice" required>
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">酒店编号</label>
	  	<input type="text" class="form-control" v-model="room.hotelId" required>
	  </div>
	  
	  
	  
	  
	  <button type="submit" class="btn btn-primary">提交</button>
	  <router-link to="/room/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
		  
</template>

<script>
	//import axios from "axios";
	export default {
		name:"RoomAdd",
		data(){
			return {
				room:{
					roomId:"",
					roomType:"",
					roomPrice:"",
					hotelId:"",
				}
			};
		},
		methods:{
			add(){
				this.axiosJSON.post("/room/add",this.room).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/room/list"); //编程方式跳转到房间列表组件
					}
					else{
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>