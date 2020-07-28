<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加入住人员</h3>
</div>
<div class="box-body">
	<form method="post" v-on:submit.prevent="add()" >
	  <div class="form-group">
		<label for="exampleInputPassword1">入住人员编号</label>
		<input type="text" class="form-control" v-model="customer.customerId" required >
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">入住人员姓名</label>
		<input type="text" class="form-control" v-model="customer.customerName" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">入住房间号码</label>
	  		<input type="text" class="form-control" v-model="customer.roomId" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">入住日期</label>
	  		<input type="text" class="form-control" v-model="customer.checkInDate" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">退房日期</label>
	  		<input type="text" class="form-control" v-model="customer.checkOutDate" required>
	  </div>
	  
	  
	  
	  
	  <button type="submit" class="btn btn-primary">提交</button>
	  <router-link to="/customer/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
		  
</template>

<script>
	import axios from "axios";
	export default {
		name:"CustomerAdd",
		data(){
			return {
				customer:{
					customerId:"",
					customerName:"",
					roomId:"",
					checkInDate:"",
					checkOutDate:"",
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/customer/add",this.customer).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/customer/list"); //编程方式跳转到入住人员列表组件
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