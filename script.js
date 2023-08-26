//your JS code here. If required.
let out=document.getElementById("output");
let promise=new promise((x)=>
	{
		setTimeout(()=>{
			console.log("Hello, world!");
		});
	});
let result=out.append(promise);
console.log(result);




