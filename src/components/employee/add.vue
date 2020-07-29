<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加员工</h3>
</div>
<div class="box-body">
	<form method="post" v-on:submit.prevent="add()" >
	  <div class="form-group">
		<label for="exampleInputPassword1">员工编号</label>
		<input type="text" class="form-control" v-model="employee.employeeId" required >
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">员工姓名</label>
		<input type="text" class="form-control" v-model="employee.employeeName" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">员工年龄</label>
	  		<input type="text" class="form-control" v-model="employee.employeeAge" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">员工工资</label>
	  		<input type="text" class="form-control" v-model="employee.employeeSalary" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">酒店编号</label>
	  		<input type="text" class="form-control" v-model="employee.hotelId" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">工作部门</label>
	  		<input type="text" class="form-control" v-model="employee.department" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">联系电话</label>
	  		<input type="text" class="form-control" v-model="employee.phoneNumber" required>
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
	export default {
		name:"EmployeeAdd",
		data(){
			return {
				employee:{
					employeeId:"",
					employeeName:"",
					employeeAge:"",
					employeeSalary:"",
					hotelId:"",
					department:"",
					phoneNumber:"",
					
				}
			};
		},
		methods:{
			add(){
				this.axiosJSON.post("/employee/add",this.employee).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/employee/list"); //编程方式跳转到入住人员列表组件
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