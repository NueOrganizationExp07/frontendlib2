<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改员工年龄</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputPassword1">员工编号</label>
		<input type="text" class="form-control" v-model="employee.employeeId" >
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">员工姓名</label>
		<input type="text" class="form-control" v-model="employee.employeeName">
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">员工年龄</label>
	  	<input type="text" class="form-control" v-model="employee.employeeAge">
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">员工工资</label>
	  	<input type="text" class="form-control" v-model="employee.employeeSalary">
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">酒店编号</label>
	  	<input type="text" class="form-control" v-model="employee.hotelId">
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">工作部门</label>
	  	<input type="text" class="form-control" v-model="employee.department">
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">联系电话</label>
	  	<input type="text" class="form-control" v-model="employee.phoneNumber">
	  </div>
	  
	  
	  
	  
	  
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/employee/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	//员工修改组件
	export default {
		name:"EmployeeModify",
		data(){
			return {
				employee:{
					employeeId:"",
					employeeName:"",
					employeeAge:"",
					employeeSalary:"",
					hotelId:"",
					department:"",
	
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let no=this.$route.params.employeeId;
			this.getEmployee(no);
			
		},
		methods:{
			getEmployee(no){
				this.axiosJSON.get("/employee/get?no="+no).then(result=>{
					this.employee=result.data.result;
				});
			},
			modify(){
				this.axiosJSON.post("/employee/modify",this.employee).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/employee/list"); //编程方式跳转到员工列表组件
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