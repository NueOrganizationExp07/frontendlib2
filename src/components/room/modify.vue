<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改房间</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputPassword1">房间号码</label>
		<input type="text" class="form-control" v-model="room.roomId" >

	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">房间类型</label>
		<input type="text" class="form-control" v-model="room.roomType">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">房间价格</label>
	  		<input type="text" class="form-control" v-model="room.roomPrice">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">酒店编号</label>
	  		<input type="text" class="form-control" v-model="room.hotelId">
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
	import axios from "axios";
	//房间修改组件
	export default {
		name:"RoomModify",
		data(){
			return {
				room:{
					roomId:"",
					roomType:"",
					roomPrice:0,
					hotelId:""
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let roomNo=this.$route.params.roomId;
			this.getRoom(roomNo);
			
		},
		methods:{
			getRoom(roomId){
				
				axios.get("http://localhost:8200/room/get?roomId="+roomId).then(result=>{
					this.room=result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8200/room/modify",this.room).then(result=>{
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