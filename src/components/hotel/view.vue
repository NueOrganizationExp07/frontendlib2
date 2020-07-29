<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看酒店</h3>
</div>
<div class="box-body">
	<form  method="post" >
	 <table class="table">
	   <thead>
	     <tr>
	       <th scope="col">酒店编号</th>
	       <th scope="col">酒店名称</th>
	       <th scope="col">酒店负责人编号</th>
	     </tr>
	   </thead>
	   <tbody>
	     <tr>
	       <td>{{hotel.hotelId}}</td>
	       <td>{{hotel.hotelName}}</td>
	       <td>{{hotel.managerId}}</td>
	     </tr>
	   </tbody>
	 </table> 
	<router-link to="/hotel/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//部门查看组件
	export default {
		name:"HotelView",
		data(){
			return {
				hotel:{}
			};
		},
		props:{
			hotelId	:{required:true}
		},
		created(){ //组件的创建生命周期函数
			this.getHotel();
		},
		methods:{
			getHotel(){
				this.axiosJSON.get("/hotel/get",{
					params:{
						no:this.hotelId					
					}
				}).then(result=>{
					this.hotel=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>