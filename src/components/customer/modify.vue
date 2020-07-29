<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改入住人员</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputPassword1">入住人员编码</label>
		<input type="text" class="form-control" v-model="customer.customerId" >
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">入住人员名称</label>
		<input type="text" class="form-control" v-model="customer.customerName">
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">入住房间号码</label>
	  	<input type="text" class="form-control" v-model="customer.roomId">
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">入住日期</label>
	  	<input type="text" class="form-control" v-model="customer.checkInDate">
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">退房日期</label>
	  	<input type="text" class="form-control" v-model="customer.checkOutDate">
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
	//import axios from "axios";
	//入住人员修改组件
	export default {
		name:"CustomerModify",
		data(){
			return {
				customer:{
					customerId:"",
					customerName:"",
					roomId:"",
					checkInDate:"",
					checkOutDate:""
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let no=this.$route.params.customerId;
			this.getCustomer(no);
			
		},
		methods:{
			getCustomer(no){
				this.axiosJSON.get("/customer/get?no="+no).then(result=>{
					this.customer=result.data.result;
				});
			},
			modify(){
				this.axiosJSON.post("/customer/modify",this.customer).then(result=>{
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