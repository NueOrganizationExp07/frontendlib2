<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">酒店管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">酒店编号</th>
				  <th scope="col">酒店名称</th>
				  <th scope="col">酒店负责人编号</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in hotelList" v-bind:key="dm.hotelId">
				  <td>{{dm.hotelId}}</td>
				  <td>{{dm.hotelName}}</td>
				  <td>{{dm.managerId}}</td>
					<td>
					  <router-link v-bind:to="'/hotel/modify/'+dm.hotelId" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteHotel(dm.hotelId)"  class="btn btn-danger">删除</a> 
					  <router-link to="/hotel/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/hotel/add" class="btn btn-default">增加酒店</router-link>
	</div>
	
</template>

<script>
	import axios from "axios";
	export default {
		name:"HotelList",
		data(){
			return {
				hotelList:[],
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
				axios.get("http://localhost:8200/hotel/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.hotelList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteHotel(hotelId){
				let checkresult=confirm("您确认要删除此酒店么");
				if(checkresult){
					axios.post("http://localhost:8200/hotel/delete",{hotelId:hotelId}).then(result=>{
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