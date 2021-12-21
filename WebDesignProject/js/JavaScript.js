		//variable for item count
		var x=0;
		
		//function that changes the cart image and increments the item counter
		function addItem(){
		  document.getElementById("cart").src="../img/full.png";
		  document.getElementById("item-count").innerHTML= ++x;
		}
		  
		//drinks object constructor
		function drinks(name, price){
			this.name = name;
			this.price = price;
		}
		
		//desserts object constructor
		function desserts(name, price){
			this.name = name;
			this.price = price;
		}

		//create drink objects	
		var item1=new drinks("Americano","10 SR ");
		var item2=new drinks("Espresso","9 SR ");
		var item3=new drinks("Cappuccino","11 SR ");
		var item4=new drinks("Mocha","12 SR ");
		var item5=new drinks("Latte","11 SR ");
		var item6=new drinks("Spanish Latte","12 SR ");
		var item7=new drinks("Macchiato","15 SR ");
		var item8=new drinks("French Vanilla","16 SR ");
		var item9=new drinks("Hot Chocolate","13 SR ");
		var item10=new drinks("Black Tea","7 SR ");
		var item11=new drinks("Green Tea","8 SR ");

		//create dessert objects
		var item12=new desserts("Chocolate Cake","10 SR ");
		var item13=new desserts("Brownies","8 SR ");
		var item14=new desserts("Cookies","7 SR ");
		var item15=new desserts("Cupcakes","8 SR ");
		var item16=new desserts("Pancakes","12 SR ");
		var item17=new desserts("Waffles","12 SR ");
		var item18=new desserts("Chocolate Crepe","16 SR ");
		var item19=new desserts("Lava Cake","17 SR ");

		
		//function the displays drink menu items
		function displayDrinks(){
			document.getElementById("menu-content").innerHTML=
				"<ul>"
				+"<li>"+ item1.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item1.price+"</span>"+"</li>"
				+"<li>"+ item2.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item2.price+"</span>"+"</li>"
				+"<li>"+ item3.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item3.price+"</span>"+"</li>"
				+"<li>"+ item4.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item4.price+"</span>"+"</li>"
				+"<li>"+ item5.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item5.price+"</span>"+"</li>"
				+"<li>"+ item6.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item6.price+"</span>"+"</li>"
				+"<li>"+ item7.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item7.price+"</span>"+"</li>"
				+"<li>"+ item8.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item8.price+"</span>"+"</li>"
				+"<li>"+ item9.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item9.price+"</span>"+"</li>"
				+"<li>"+ item10.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item10.price+"</span>"+"</li>"
				+"<li>"+ item11.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item11.price+"</span>"+"</li>"
					+"</ul>";	}
					
			//function the displays dessert menu items		
			function displayDesserts(){
				document.getElementById("menu-content").innerHTML=
				"<ul>"
				+"<li>"+ item12.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item1.price+"</span>"+"</li>"
				+"<li>"+ item13.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item3.price+"</span>"+"</li>"
				+"<li>"+ item14.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item4.price+"</span>"+"</li>"
				+"<li>"+ item15.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item5.price+"</span>"+"</li>"
				+"<li>"+ item16.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item6.price+"</span>"+"</li>"
				+"<li>"+ item17.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item7.price+"</span>"+"</li>"
				+"<li>"+ item18.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item8.price+"</span>"+"</li>"
				+"<li>"+ item19.name+"<button class=\"add\" onClick=\"addItem()\"> Add </button>"+"<span>"+item9.price+"</span>"+"</li>"
					+"</ul>";	}



