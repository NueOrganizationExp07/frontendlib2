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
					  <router-link v-bind:to="{name:'customerview', params: {customerId:dm.customerId}}" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<div class="row">
			<div class="col-md-6">
			个数:{{this.count}} 页数:<span></span>{{this.page}}<span></span>/<span></span>{{this.pageCount}}
			</div>
			<div class="col-md-6 text-right">
				<nav>
				  <ul class="pagination justify-content-end">
					<li class="page-item"><a class="page-link" href="#" v-on:click="toFirst">首页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toPreview">上页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toNext">下页</a></li>
					<li class="page-item"><a class="page-link" href="#" v-on:click="toLast">末页</a></li>
				  </ul>
				</nav>
			</div>
		</div>
		<!-- /.box-body -->
		<router-link to="/customer/add" class="btn btn-default">增加入住人员</router-link>
	</div>
	
</template>

<script>
	//import axios from "axios";
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
				this.axiosJSON.get("/customer/list/all/page",{
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
					this.axiosJSON.post("/customer/delete",{customerId:customerId}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
						}
					});
				}
	
			},
			toFirst(){
				this.page=1;
				this.getList();
			},
			toNext(){
				if(this.page<this.pageCount){
					this.page++;
					this.getList();
				}
			},
			toPreview(){
				if(this.page>1){
					this.page--;
					this.getList();
				}
			},
			toLast(){
				this.page=this.pageCount;
				this.getList();
			}
		}
	}
</script>

<style>
</style>