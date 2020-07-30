import Vue from 'vue'
import VueRouter from 'vue-router'
//引入Vuex Store
import store from './../store/index'
//引入路由管理的组件
//首页区组件
import AdminLogin from "./../components/admin/login.vue";
import HomeMain  from "./../components/home/main.vue";
//引入酒店负责人的组件
import ManagerMain  from "./../components/manager/main.vue";
import ManagerList  from "./../components/manager/list.vue";
import ManagerAdd  from "./../components/manager/add.vue";
import ManagerModify  from "./../components/manager/modify.vue";
import ManagerView  from "./../components/manager/view.vue";

//引入酒店的组件
import HotelMain  from "./../components/hotel/main.vue";
import HotelList  from "./../components/hotel/list.vue";
import HotelAdd  from "./../components/hotel/add.vue";
import HotelModify  from "./../components/hotel/modify.vue";
import HotelView  from "./../components/hotel/view.vue";

//引入房间的组件
import RoomMain  from "./../components/room/main.vue";
import RoomList  from "./../components/room/list.vue";
import RoomAdd  from "./../components/room/add.vue";
import RoomModify  from "./../components/room/modify.vue";
import RoomView  from "./../components/room/view.vue";

//引入入住人员的组件
import CustomerMain  from "./../components/customer/main.vue";
import CustomerList  from "./../components/customer/list.vue";
import CustomerAdd  from "./../components/customer/add.vue";
import CustomerModify  from "./../components/customer/modify.vue";
import CustomerView  from "./../components/customer/view.vue";


//引入员工的组件
import EmployeeMain  from "./../components/employee/main.vue";
import EmployeeList  from "./../components/employee/list.vue";
import EmployeeAdd  from "./../components/employee/add.vue";
import EmployeeModify  from "./../components/employee/modify.vue";
import EmployeeView  from "./../components/employee/view.vue";


Vue.use(VueRouter)

const routes = [
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/manager",name:"managermain", component:ManagerMain,children:[
		{path:"list",name:"managerlist",component:ManagerList},
		{path:"add",name:"manageradd",component:ManagerAdd},
		{path:"modify/:managerId",name:"managermodify",component:ManagerModify},
		{path:"view/:managerId",name:"managerview",component:ManagerView,props:true},
		{path:"", redirect: "list" }
	]},
	
	
	
	{path:"/hotel",name:"hotelmain", component:HotelMain,children:[
		{path:"list",name:"hotellist",component:HotelList},
		{path:"add",name:"hoteladd",component:HotelAdd},
		{path:"modify/:hotelId",name:"hotelmodify",component:HotelModify},
		{path:"view/:hotelId",name:"hotelview",component:HotelView,props:true},
		{path:"", redirect: "list" }
	]},
	
	
	{path:"/room",name:"roommain", component:RoomMain,children:[
		{path:"list",name:"roomlist",component:RoomList},
		{path:"add",name:"roomadd",component:RoomAdd},
		{path:"modify/:roomId",name:"roommodify",component:RoomModify},
		{path:"view/:roomId",name:"roomview",component:RoomView,props:true},
		{path:"", redirect: "list" }
	]},
	
	
	{path:"/customer",name:"customermain", component:CustomerMain,children:[
		{path:"list",name:"customerlist",component:CustomerList},
		{path:"add",name:"customeradd",component:CustomerAdd},
		{path:"modify/:customerId",name:"customermodify",component:CustomerModify},
		{path:"view/:customerId",name:"customerview",component:CustomerView,props:true},
		{path:"", redirect: "list" }
	]},
	
	{path:"/employee",name:"employeemain", component:EmployeeMain,children:[
		{path:"list",name:"employeelist",component:EmployeeList},
		{path:"add",name:"employeeadd",component:EmployeeAdd},
		{path:"modify/:employeeId",name:"employeemodify",component:EmployeeModify},
		{path:"view/:employeeId",name:"employeeview",component:EmployeeView,props:true},
		{path:"", redirect: "list" }
	]},

]

//创建路由对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})



//路由守护实现登录拦截
router.beforeEach((to,from, next) => {
	if(to.path=="/login"){
		next();
	}
	else{
		 if(store.getters.loginuser!=null){
			 next();
		 }
		 else{
			 next("/login");
		 }
	}
})

export default router