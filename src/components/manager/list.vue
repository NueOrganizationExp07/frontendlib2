<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">酒店负责人管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">酒店负责人编号</th>
				  <th scope="col">酒店负责人姓名</th>
				  <th scope="col">酒店负责人电话号码</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in managerList" v-bind:key="dm.managerId">
				  <td>{{dm.managerId}}</td>
				  <td>{{dm.managerName}}</td>
				  <td>{{dm.phoneNumber}}</td>
					<td>
					  <router-link v-bind:to="'/manager/modify/'+dm.managerId" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteManager(dm.managerId)"  class="btn btn-danger">删除</a> 
					  <router-link to="/manager/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/manager/add" class="btn btn-default">增加酒店负责人</router-link>
	</div>
	
</template>

<script>
	import axios from "axios";
	export default {
		name:"ManagerList",
		data(){
			return {
				managerList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8200/manager/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.managerList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteManager(managerId){
				let checkresult=confirm("您确认要删除此酒店负责人么");
				if(checkresult){
					axios.post("http://localhost:8200/manager/delete",{managerId:managerId}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
						}
					});
				}
				
				
			}
		}
	}
</script>

<style>
</style>