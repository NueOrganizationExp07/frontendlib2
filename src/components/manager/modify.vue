<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改酒店负责人</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputPassword1">酒店负责人编号</label>
		<input type="text" class="form-control" v-model="manager.managerId" >

	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">酒店负责人姓名</label>
		<input type="text" class="form-control" v-model="manager.managerName">
	  </div>
	  <div class="form-group">
	  	<label for="exampleInputPassword1">酒店负责人电话号码</label>
	  	<input type="text" class="form-control" v-model="manager.phoneNumber">
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
	import axios from "axios";
	//酒店负责人修改组件
	export default {
		name:"ManagerModify",
		data(){
			return {
				manager:{
					phoneNumber:"",
					managerName:"",
					managerId:0
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let managerNo=this.$route.params.managerId;
			this.getManager(managerNo);
			
		},
		methods:{
			getManager(managerId){
				
				axios.get("http://localhost:8200/manager/get?managerId="+managerId).then(result=>{
					this.manager=result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8200/manager/modify",this.manager).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/manager/list"); //编程方式跳转到酒店负责人列表组件
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