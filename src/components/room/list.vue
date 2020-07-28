<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">房间管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">房间号码</th>
				  <th scope="col">房间类型</th>
				  <th scope="col">房间价格</th>
				  <th scope="col">酒店编号</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in roomList" v-bind:key="dm.roomId">
				  <td>{{dm.roomId}}</td>
				  <td>{{dm.roomType}}</td>
				  <td>{{dm.roomPrice}}</td>
				  <td>{{dm.hotelId}}</td>
					<td>
					  <router-link v-bind:to="'/room/modify/'+dm.roomId" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteRoom(dm.roomId)"  class="btn btn-danger">删除</a> 
					  <router-link to="/room/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/room/add" class="btn btn-default">增加房间</router-link>
	</div>
	
</template>

<script>
	import axios from "axios";
	export default {
		name:"RoomList",
		data(){
			return {
				roomList:[],
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
				axios.get("http://localhost:8200/room/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.roomList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteRoom(roomId){
				let checkresult=confirm("您确认要删除此房间么");
				if(checkresult){
					axios.post("http://localhost:8200/room/delete",{roomId:roomId}).then(result=>{
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