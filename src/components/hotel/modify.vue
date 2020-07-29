<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改酒店</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputPassword1">酒店编码</label>
		<input type="text" class="form-control" v-model="hotel.hotelId" >
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">酒店名称</label>
		<input type="text" class="form-control" v-model="hotel.hotelName">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputEmail1">酒店负责人编号</label>
	  		<input type="text" class="form-control" v-model="hotel.managerId">
	  </div>
	  
	  
	  
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/hotel/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	//酒店修改组件
	export default {
		name:"HotelModify",
		data(){
			return {
				hotel:{
					hotelId:"",
					hotelName:"",
					managerId:0
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let no=this.$route.params.hotelId;
			this.getHotel(no);
			
		},
		methods:{
			getHotel(no){
				
				this.axiosJSON.get("/hotel/get?no="+no).then(result=>{
					this.hotel=result.data.result;
				});
			},
			modify(){
				this.axiosJSON.post("/hotel/modify",this.hotel).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/hotel/list"); //编程方式跳转到酒店列表组件
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