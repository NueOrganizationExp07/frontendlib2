<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">入住人员管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">入住人员编号</th>
				  <th scope="col">入住人员姓名</th>
				  <th scope="col">入住房间号码</th>
				  <th scope="col">入住日期</th>
				  <th scope="col">退房日期</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in customerList" v-bind:key="dm.customerId">
				  <td>{{dm.customerId}}</td>
				  <td>{{dm.customerName}}</td>
				  <td>{{dm.roomId}}</td>
				  <td>{{dm.checkInDate}}</td>
				  <td>{{dm.checkOutDate}}</td>
					<td>
					  <router-link v-bind:to="'/customer/modify/'+dm.customerId" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteCustomer(dm.customerId)"  class="btn btn-danger">删除</a> 
					  <router-link to="/customer/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/customer/add" class="btn btn-default">增加入住人员</router-link>
	</div>
	
</template>

<script>
	import axios from "axios";
	export default {
		name:"CustomerList",
		data(){
			return {
				customerList:[],
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
				axios.get("http://localhost:8200/customer/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.customerList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteCustomer(customerId){
				let checkresult=confirm("您确认要删除此入住人员么");
				if(checkresult){
					axios.post("http://localhost:8200/customer/delete",{customerId:customerId}).then(result=>{
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