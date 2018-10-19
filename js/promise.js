

let p=new Promise((resolve,reject)=>{
	setTimeout(function(){
		let a="hello",
		resolve(a);
	},2000)
	
});
p.then((data)=>{console.log(data)},()=>{});
