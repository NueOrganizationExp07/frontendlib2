<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看酒店负责人</h3>
</div>
<div class="box-body">
	<form  method="post" >
	<table class="table">
	  <thead>
	    <tr>
	      <th scope="col">酒店负责人编号</th>
	      <th scope="col">酒店负责人姓名</th>
	      <th scope="col">酒店负责人联系电话</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>{{manager.managerId}}</td>
	      <td>{{manager.managerName}}</td>
	      <td>{{manager.phoneNumber}}</td>
	    </tr>
	  </tbody>
	</table>
	<router-link to="/manager/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//部门查看组件
	export default {
		name:"ManagerView",
		data(){
			return {
				manager:{}
			};
		},
		props:{
			managerId:{required:true}
		},
		created(){ //组件的创建生命周期函数
			this.getManager();
		},
		methods:{
			getManager(){
				this.axiosJSON.get("/manager/get",{
					params:{
						no:this.managerId					
					}
				}).then(result=>{
					this.manager=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>