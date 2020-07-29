<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看员工</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <table class="table">
	    <thead>
	      <tr>
	        <th scope="col">员工编号</th>
	        <th scope="col">员工姓名</th>
	        <th scope="col">员工年龄</th>
			<th scope="col">员工工资</th>
			<th scope="col">酒店编号</th>
			<th scope="col">工作部门</th>
			<th scope="col">联系电话</th>
	      </tr>
	    </thead>
	    <tbody>
	      <tr>
	        <td>{{employee.employeeId}}</td>
	        <td>{{employee.employeeName}}</td>
	        <td>{{employee.employeeAge}}</td>
			<td>{{employee.employeeSalary}}</td>
			<td>{{employee.hotelId}}</td>
			<td>{{employee.department}}</td>
			<td>{{employee.phoneNumber}}</td>
	      </tr>
	    </tbody>
	  </table>
	 <router-link to="/employee/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//员工查看组件
	export default {
		name:"EmployeeView",
		data(){
			return {
				employee:{}
			};
		},
		props:{
			employeeId:{required:true}
		},
		created(){ //组件的创建生命周期函数
			this.getEmployee();
		},
		methods:{
			getEmployee(){
				this.axiosJSON.get("/employee/get",{
					params:{
						no:this.employeeId				
					}
				}).then(result=>{
					this.employee=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>