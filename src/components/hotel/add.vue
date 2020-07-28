<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加酒店</h3>
</div>
<div class="box-body">
	<form method="post" v-on:submit.prevent="add()" >
	  <div class="form-group">
		<label for="exampleInputPassword1">酒店编码</label>
		<input type="text" class="form-control" v-model="hotel.hotelId" required >
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">酒店名称</label>
		<input type="text" class="form-control" v-model="hotel.hotelName" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputEmail1">酒店负责人编号</label>
	  		<input type="text" class="form-control" v-model="hotel.managerId" required>
			<small id="emailHelp" class="form-text text-muted"></small>
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
	import axios from "axios";
	export default {
		name:"HotelAdd",
		data(){
			return {
				hotel:{
					hotelId:"",
					hotelName:"",
					managerId:0
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/hotel/add",this.hotel).then(result=>{
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