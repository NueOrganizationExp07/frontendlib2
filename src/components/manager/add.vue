<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加酒店负责人</h3>
</div>
<div class="box-body">
	<form method="post" v-on:submit.prevent="add()" >
	  <div class="form-group">
		<label for="exampleInputEmail1">酒店负责人编号</label>
		<input type="text" class="form-control" v-model="manager.managerId" required >
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">酒店负责人姓名</label>
		<input type="text" class="form-control" v-model="manager.managerName" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">酒店负责人电话号码</label>
	  		<input type="text" class="form-control" v-model="manager.phoneNumber" required>
	  </div>
	  
	  <button type="submit" class="btn btn-primary">提交</button>
	  <router-link to="/manager/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
		  
</template>

<script>
	//import axios from "axios";
	export default {
		name:"ManagerAdd",
		data(){
			return {
				manager:{
					managerId:"",
					managerName:"",
					phoneNumber:"",
				}
			};
		},
		methods:{
			add(){
				this.axiosJSON.post("/manager/add",this.manager).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/manager/list"); //编程方式跳转到部门列表组件
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