
   const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');

    const a1=document.querySelector('.smoothScroll');
    const a2=document.querySelector('.smoothScroll2');
    const a3=document.querySelector('.smoothScroll3');
    const a4=document.querySelector('.smoothScroll4');
    const a5=document.querySelector('.smoothScroll5');
    const a6=document.querySelector('.smoothScroll6');
    const a7=document.querySelector('.a7');
    const a8=document.querySelector('.a8');
    const a9=document.querySelector('.a9');
    const a10=document.querySelector('.a10');
    const a11=document.querySelector('.a11');


		const d1=document.querySelector('.d1');
		const d2=document.querySelector('.d2');
		const d3=document.querySelector('.d3');
		const d4=document.querySelector('.d4');
    const d5=document.querySelector('.d5');
    const d6=document.querySelector('.d6');
    const d7=document.querySelector('.d7');
    const d8=document.querySelector('.d8');
    const d9=document.querySelector('.d9');
    const d10=document.querySelector('.d10');
    const d11=document.querySelector('.d11');
    const d12=document.querySelector('.d12');
    const d13=document.querySelector('.d13');
    const d14=document.querySelector('.d14');
    const d15=document.querySelector('.d15');
    const d16=document.querySelector('.d16');
    const d17=document.querySelector('.d17');
    const d18=document.querySelector('.d18');
    const d19=document.querySelector('.d19');
    const d20=document.querySelector('.d20');
    const d21=document.querySelector('.d21');
    const d22=document.querySelector('.d22');
    const d23=document.querySelector('.d23');
    const d24=document.querySelector('.d24');
    const d25=document.querySelector('.d25');
    const d26=document.querySelector('.d26');
    const d27=document.querySelector('.d27');
    const d28=document.querySelector('.d28');


		const title=document.querySelector('.title');
		const t1=document.querySelector('.navbar-brand');
    const t2=document.querySelector('.t2');
		const t3=document.querySelector('.t3');
		const t4=document.querySelector('.t4');
    const t5=document.querySelector('.t5');
    const t6=document.querySelector('.t6');
    const t7=document.querySelector('.t7');
    const t8=document.querySelector('.t8');
    const t9=document.querySelector('.t9');
    const t10=document.querySelector('.t10');
    const t11=document.querySelector('.t11');
    const t12=document.querySelector('.t12');
    const t13=document.querySelector('.t13');
    const t14=document.querySelector('.t14');
    const t15=document.querySelector('.t15');
    const t16=document.querySelector('.t16');
    const t17=document.querySelector('.t17');
    const t18=document.querySelector('.t18');
    const t19=document.querySelector('.t19');
    const t20=document.querySelector('.t20');
    const t21=document.querySelector('.t21');
    const t22=document.querySelector('.t22');
    const t23=document.querySelector('.t23');
    const t24=document.querySelector('.t24');
    const t25=document.querySelector('.t25');
    const t26=document.querySelector('.t26');
    const t27=document.querySelector('.t27');
    const t28=document.querySelector('.t28');
    const t29=document.querySelector('.t29');
    const t30=document.querySelector('.t30');
    const t31=document.querySelector('.t31');



		link.forEach(el => {
			el.addEventListener('click', () => {
				//langEl.querySelector('.active').classList.remove('active');
				//el.classList.add('active');

				const attr = el.getAttribute('language');

        a1.textContent=data[attr].a1;
        a2.textContent=data[attr].a2;
        a3.textContent=data[attr].a3;
        a4.textContent=data[attr].a4;
        a5.textContent=data[attr].a5;
        a6.textContent=data[attr].a6;
        a7.textContent=data[attr].a7;
        a8.textContent=data[attr].a8;
        a9.textContent=data[attr].a9;
        a10.textContent=data[attr].a10;
        a11.textContent=data[attr].a11;



				d1.textContent =data[attr].d1;
				d2.textContent =data[attr].d2;
				d3.textContent =data[attr].d3;
        d4.textContent =data[attr].d4;
        d5.textContent =data[attr].d5;
        d6.textContent =data[attr].d6;
        d7.textContent =data[attr].d7;
        d8.textContent =data[attr].d8;
        d9.textContent =data[attr].d9;
        d10.textContent =data[attr].d10;
        d11.textContent =data[attr].d11;
        d12.textContent =data[attr].d12;
        d13.textContent =data[attr].d13;
        d14.textContent =data[attr].d14;
        d15.textContent =data[attr].d15;
        d16.textContent =data[attr].d16;
        d17.textContent =data[attr].d17;
        d18.textContent =data[attr].d18;
        d19.textContent =data[attr].d19;
        d20.textContent =data[attr].d20;
        d21.textContent =data[attr].d21;
        d22.textContent =data[attr].d22;
        d23.textContent =data[attr].d23;
        d24.textContent =data[attr].d24;
        d25.textContent =data[attr].d25;
        d26.textContent =data[attr].d26;
        d27.textContent =data[attr].d27;
        d28.textContent =data[attr].d28;


        title.textContent =data[attr].title;
				t1.textContent =data[attr].t1;
        t2.textContent =data[attr].t2;
        t3.textContent =data[attr].t3;
        t4.textContent =data[attr].t4;
        t5.textContent =data[attr].t5;
        t6.textContent =data[attr].t6;
        t7.textContent =data[attr].t7;
        t8.textContent =data[attr].t8;
        t9.textContent =data[attr].t9;
        t10.textContent =data[attr].t10;
        t11.textContent =data[attr].t11;
        t12.textContent =data[attr].t12;
        t13.textContent =data[attr].t13;
        t14.textContent =data[attr].t14;
        t15.textContent =data[attr].t15;
        t16.textContent =data[attr].t16;
        t17.textContent =data[attr].t17;
        t18.textContent =data[attr].t18;
        t19.textContent =data[attr].t19;
        t20.textContent =data[attr].t20;
        t21.textContent =data[attr].t21;
        t22.textContent =data[attr].t22;
        t23.textContent =data[attr].t23;
        t24.textContent =data[attr].t24;
        t25.textContent =data[attr].t25;
        t26.textContent =data[attr].t26;
        t27.textContent =data[attr].t27;
        t28.textContent =data[attr].t28;
        t29.textContent =data[attr].t29;
        t30.textContent =data[attr].t30;
        t31.textContent =data[attr].t31;





			});
		});

		var data = {
			  "english":
			  {
			    "title": "Radisson A 5 Star Hotel",
          "t1":"Radisson",
          "t2":"feature",
          "t3":"Best rooms & service",
          "t4":"food service",
          "t5":"Security",
          "t6":"Start your journey by Signup to enjoy our services.",
          "t7":"Professional Trainers",
          "t8":"International Certifications",
          "t9":"Free services",
          "t10":"Signup today",
          "t11":"Rooms",
          "t12":"Our Best Rooms",
          "t13":"Suite",
          "t14":"Presedential suite",
          "t15":"Single",
          "t16":"Double",
          "t17":"Our Services",
          "t18":"Services that we provide.",
          "t19":"Rooms Management",
          "t20":"Laundarey service",
          "t21":"food service",
          "t22":"parking service",
          "t23":"Security service",
          "t24":"Customer Reviews ",
          "t25":"from around the world",
          "t26":"Contact us ",
          "t27":"we love conversations. let us talk!",
          "t28":"Headquarter",
          "t29":"Contact Info",
          "t30":"Quick Links",
          "t31":"Newsletter Signup",



          "a1":"Home",
          "a2":"About",
          "a3":"Rooms",
          "a4":"Our Services",
          "a5":"Reviews",
          "a6":"Contact",
				  "a7":"Language:",
          "a8":"Discover more",
          "a9":"check out",
          "a10":"Services.",
          "a11":"Price up to",

          "d1":"Our Hotel provide the best quality service it try's to give our customer the best vaccation.",
          "d2":"Start your journey with our Breakfast.",
          "d3":"we provide amzing breakfast so that our cutomers start there day motovated.",
          "d4":"service we provide.",
          "d5":"our servic include: reception Guests,room services,food service,including resturant in the hotel, and security",
          "d6":"we have one of the best rooms that you can enjoy and our service provide the best enjoyment.",
          "d7":"our food are the one that you never test in your life it is so good that you wish you can eat it everyday.",
          "d8":"our security one of the best in last deceades there were no security essues.",
          "d9":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.",
          "d10":"our hotel is 5 star that was given to us by international critery.",
          "d11":"we also provide some free services to make your exprince the best.",
          "d12":"a set of rooms designated for one person's or family's use or for a particular purpose.",
          "d13":"a suite of rooms, as in a hotel, suitable for a president or other head of state.",
          "d14":"A room assigned to one person.",
          "d15":"A room assigned to two person.",
          "d16":"A full room management including cleanning,providing service.",
          "d17":"we provide the best loundarey service at low price.",
          "d18":"we provide food delivery across rooms.and we are the best at what we do.",
          "d19":"with us you don't need to worry about your cars.",
          "d20":"we provide best security.so choose us if you want best security with best service.",
          "d21":"From Italy",
          "d22":"excellent hotel beyond and above my expectations, the staffs are amazing and really made our stay special, comfortable and the facilities are very nice too, beautiful, and very spacious room and balcony. Incredible service and food.",
          "d23":"From USA",
          "d24":"he hotel staff, specially in the bar have poor social skills, and the drinks taste nothing like they advertised. The food and the food choices were also subpar..",
          "d25":"From Japan",
          "d26":"They gave something other that we booked they said no king bed for family only for couple also the charges is different when we pay them at the place",
          "d27":"From China",
          "d28":"Super value for it's location and comfort level / room size. Came with a balcony.",




			  },
			  "amharic":
			  {
				  "title":"ራዲሰን ኤ 5 ኮከብ ሆቴል",
          "t1":"ራዲሰን",
          "t2":"ባህሪ",
          "t3":"ምርጥ ክፍሎች እና አገልግሎት",
          "t4":"የምግብ አገልግሎት",
          "t5":"ደህንነት",
          "t6":"በአገልግሎታችን ለመደሰት በመመዝገብ ጉዞዎን ይጀምሩ።",
          "t7":"ሙያዊ አሰልጣኞች",
          "t8":"ዓለም አቀፍ የምስክር ወረቀቶች",
          "t9":"ነጻ አገልግሎቶች",
          "t10":"ዛሬ ይመዝገቡ",
          "t11":"ክፍሎች",
          "t12":"የእኛ ምርጥ ክፍሎች",
          "t13":"ስዊት",
          "t14":"የቅድመ ዝግጅት ስብስብ",
          "t15":"ነጠላ",
          "t16":"ድርብ",
          "t17":"የእኛ አገልግሎቶች",
          "t18":"የምንሰጣቸው አገልግሎቶች።",
          "t19":"ክፍሎች አስተዳደር",
          "t20":"Laundrey አገልግሎት",
          "t21":"የምግብ አገልግሎት",
          "t22":"የመኪና ማቆሚያ አገልግሎት",
          "t23":"የደህንነት አገልግሎት",
          "t24":"የደንበኛ ግምገማዎች",
          "t25":"ከዓለም ዙሪያ",
          "t26":"አግኙን",
          "t27":"ንግግሮችን እንወዳለን። እንነጋገር!",
          "t28":"ዋና መሥሪያ ቤት",
          "t29":"የመገኛ አድራሻ",
          "t30":"ፈጣን አገናኞች",
          "t31":"የጋዜጣ ምዝገባ",

          "a1":"ቤት",
          "a2":"ስለ አኛ",
          "a3":"ክፍሎች",
          "a4":"የእኛ አገልግሎቶች",
          "a5":"ግምገማዎች",
          "a6":"ተገናኝ",
          "a7":"ቋንቋ:",
          "a8":"ተጨማሪ ያግኙ",
          "a9":"ተመልከት",
          "a10":"አገልግሎቶች.",
          "a11":"ዋጋ እስከ",

          "d1":"ሆቴላችን ለደንበኞቻችን ጥሩ ዕረፍት ለመስጠት የሚሞክረውን ጥራት ያለው አገልግሎት ይሰጣል።",
          "d2":"ጉዞዎን በቁርስ ጀምር።",
          "d3":"ደንበኞቻችን የቀን ተነሳሽነት እንዲጀምሩ አስደናቂ ቁርስ እንሰጣለን ።",
          "d4":"የምንሰጠው አገልግሎት.",
          "d5":"አገልግሎታችን የሚያጠቃልለው፡ የእንግዳ መቀበያ፣ የክፍል አገልግሎቶች፣ የምግብ አገልግሎት፣ በሆቴሉ ውስጥ ያለውን ምግብ ቤት እና ደህንነትን ጨምሮ",
          "d6":"እርስዎ ሊደሰቱበት ከሚችሉት ምርጥ ክፍሎች ውስጥ አንዱ አለን እና አገልግሎታችን ጥሩ ደስታን ይሰጣል።",
          "d7":"የእኛ ምግብ በሕይወትዎ ውስጥ ፈጽሞ የማይፈትኑት በጣም ጥሩ ስለሆነ በየቀኑ እንዲበሉት እመኛለሁ።",
          "d8":"የእኛ ደህንነት ባለፉት ሟቾች ውስጥ በጣም ጥሩ ከሚባሉት አንዱ ምንም የደህንነት ጉዳዮች አልነበሩም።",
          "d9":"የእኛ ሆቴል በአለም አቀፍ መስፈርት የተሰጠን ባለ 5 ኮከብ ነው።",
          "d10":"የእኛ ሆቴል በአለም አቀፍ መስፈርት የተሰጠን ባለ 5 ኮከብ ነው።",
          "d11":"የእርስዎን ኤክስፕሪንስ ምርጡን ለማድረግ አንዳንድ ነጻ አገልግሎቶችን እናቀርባለን።",
          "d12":"ለአንድ ሰው ወይም ለቤተሰብ ጥቅም ወይም ለተወሰነ ዓላማ የተመደቡ ክፍሎች ስብስብ።",
          "d13":"ለፕሬዚዳንት ወይም ለሌላ ርዕሰ መስተዳድር ተስማሚ የሆኑ ክፍሎች፣ እንደ ሆቴል ውስጥ።",
          "d14":"ለአንድ ሰው የተመደበ ክፍል.",
          "d15":"ለሁለት ሰው የተመደበው ክፍል.",
          "d16":"የሙሉ ክፍል አስተዳደር ጽዳትን፣ አገልግሎት መስጠትን ጨምሮ።",
          "d17":"በዝቅተኛ ዋጋ ምርጡን የሎውንደሬይ አገልግሎት እንሰጣለን።",
          "d18":"በክፍል ውስጥ የምግብ አቅርቦትን እናቀርባለን።እና እኛ በምናደርገው ነገር ምርጦች ነን።",
          "d19":"ከእኛ ጋር ስለ መኪናዎ መጨነቅ አያስፈልገዎትም.",
          "d20":"ምርጥ ደህንነትን እናቀርባለን ስለዚህ ምርጥ አገልግሎት ከምርጥ አገልግሎት ጋር ከፈለጉ ይምረጡን።",
          "d21":"ከጣሊያን",
          "d22":"በጣም ጥሩ ሆቴል ከጠበቅኩት በላይ እና ሰራተኞቹ አስደናቂ ናቸው እና ቆይታችንን ልዩ ፣ ምቹ እና ፋሲሊቲዎቹም በጣም ቆንጆ ፣ ቆንጆ እና በጣም ሰፊ ክፍል እና በረንዳ ናቸው። የማይታመን አገልግሎት እና ምግብ.",
          "d23":"ከአሜሪካ",
          "d24":"የሆቴሉ ሰራተኞች በተለይም በቡና ቤት ውስጥ ደካማ ማህበራዊ ችሎታ አላቸው ፣ እና መጠጡ እንደ ማስታወቂያ ምንም አይቀምስም። ምግቡ እና የምግብ ምርጫው ዝቅተኛ ነበር.",
          "d25":"ከጃፓን",
          "d26":"ሌላ ያዘዝንበት ነገር ሰጡ እነሱም ለቤተሰቦች ብቻ አልጋ የለም ብለው በቦታው ስንከፍላቸው ክሱ ሌላ ነው አሉ",
          "d27":"ከቻይና",
          "d28":"ለቦታው እና ለመጽናኛ ደረጃ / ክፍል መጠን የላቀ ዋጋ። በረንዳ ጋር መጣ",

			  }


			}
