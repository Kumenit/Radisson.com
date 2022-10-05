 
   const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		
		//const d1=document.querySelector('.d1');
	
		//const d2=document.querySelector('.d2');
		//const d3=document.querySelector('.d3');
		//const d4=document.querySelector('.d4');
	
		const t1=document.querySelector('.t1');
		//const t2=document.querySelector('.t2');
		///const t3=document.querySelector('.t3');
		//const t4=document.querySelector('.t4');
	

		link.forEach(el => {
			el.addEventListener('click', () => {
				//langEl.querySelector('.active').classList.remove('active');
				//el.classList.add('active');

				const attr = el.getAttribute('language');

				//d1.textContent =data[attr].d1;
				
				//d2.textContent =data[attr].d2;
				//d3.textContent =data[attr].d3;
				
                   t1.textContent =data[attr].title;
				//t2.textContent =data[attr].t2;
				//t3.textContent =data[attr].t3;
				//t4.textContent =data[attr].t4;
			
			
			});
		});
		
		var data = {
			  "english": 
			  {
			    "title": "xenon",
				
				
		
			  },
			  "amharic":
			  {
				  "title":"ዜነን",
				
		        

			  }
			  
			 
			}