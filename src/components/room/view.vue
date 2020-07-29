<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看房间</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <table class="table">
	    <thead>
	      <tr>
	        <th scope="col">房间号码</th>
	        <th scope="col">房间类型</th>
	        <th scope="col">房间价格</th>
			<th scope="col">酒店编号</th>
	      </tr>
	    </thead>
	    <tbody>
	      <tr>
	        <td>{{room.roomId}}</td>
	        <td>{{room.roomType}}</td>
	        <td>{{room.roomPrice}}</td>
			<td>{{room.hotelId}}</td>
	      </tr>
	    </tbody>
	  </table> 
	
	  <router-link to="/room/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//部门查看组件
	export default {
		name:"RoomView",
		data(){
			return {
				room:{}
			};
		},
		props:{
			roomId:{required:true}
		},
		created(){ //组件的创建生命周期函数
			this.getRoom();
		},
		methods:{
			getRoom(){
				this.axiosJSON.get("/room/get",{
					params:{
						no:this.roomId					
					}
				}).then(result=>{
					this.room=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>