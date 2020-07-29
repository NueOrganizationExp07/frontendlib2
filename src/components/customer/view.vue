<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看入住人员</h3>
</div>
<div class="box-body">
	<form  method="post" >
	  <table class="table">
	    <thead>
	      <tr>
	        <th scope="col">入住人员编号</th>
	        <th scope="col">入住人员姓名</th>
	        <th scope="col">入住房间编号</th>
			<th scope="col">入住日期</th>
			<th scope="col">退房日期</th>
	      </tr>
	    </thead>
	    <tbody>
	      <tr>
	        <td>{{customer.customerId}}</td>
	        <td>{{customer.customerName}}</td>
	        <td>{{customer.roomId}}</td>
			<td>{{customer.checkInDate}}</td>
			<td>{{customer.checkOutDate}}</td>
	      </tr>
	    </tbody>
	  </table>
	 <router-link to="/customer/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//部门查看组件
	export default {
		name:"CustomerView",
		data(){
			return {
				customer:{}
			};
		},
		props:{
			customerId:{required:true}
		},
		created(){ //组件的创建生命周期函数
			this.getCustomer();
		},
		methods:{
			getCustomer(){
				this.axiosJSON.get("/customer/get",{
					params:{
						no:this.customerId				
					}
				}).then(result=>{
					this.customer=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>