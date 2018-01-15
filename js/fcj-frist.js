	
//		Tag
		if(localStorage.getItem('userName')) {
				$('.top_right1').css('display', 'none');
				$('.top_right2').css('display', 'block');
				var user = localStorage.getItem('userName');
				$('.yhm').text(user);
			}
		$('.exit').click(function() {
			localStorage.removeItem('userName');
			$('.top_right1').css('display', 'blcok');
			$('.top_right2').css('display', 'none');
			})
		var tag_1=0;
		var tag_lis =$('.nav_1 ul li')
		tag_lis.click(function(){
			$(this).children('a').css('color','orange').parents().siblings().children('a').css('color','#494949');
			$(this).css({
				'border-bottom':'4px solid orange',
				'box-sizing':'border-box'
			}).siblings().css('border','none')
		})
		

		
//		搜索框
		var sousuo = $('.sousuo')
		var pag = $('.nav_1>ul')
		sousuo.click(function(){
			if (pag.css('display')=='block') {	
				$('#sousuo_1').css('display','block');
				$('.nav #downMenu').css('display','block')
				pag.css('display','none')
				sousuo.css({
					'float':'left',
					'margin-left':'-30%'
					})
			}else{
				$('#sousuo_1').val('');
				$('#sousuo_1').css('display','none');
				$('#downMenu').css('display','none');
					pag.css('display','block')
					sousuo.css({
						'float':'',
						'margin-left':'10%'
					})
					$('#downMenu>li').remove();
			}
			
			
			return false;
		})
//		$('#sousuo_1').click(function(){
//			return false
//		})
			
		
//		搜索框下拉栏
		$('#sousuo_1').on('input',function(){
			$('#downMenu>li').remove();
			$.ajax({
				type:"get",
				url:"shuju.json",
				dataType:"json"
			}).done(function(data){
				var y=0;
				$.each(data,function(a,b){
					y++;
					for (var i=0;i<b.length;i++) {
						if (b[i].raw_title.indexOf($('#sousuo_1').val())>-1) {
							var li="<li><a href='Product_zq.html?s="+i+"&n="+y+"'>"+b[i].raw_title+"</a></li>";
							$('#downMenu').append(li)
							
						}
					}
						
					
				})
			})
			
		})
		
		
//		end
		var dds=$('dd')
		for (var i=0;i<dds.length;i++) {
			var a = '<a href="####">'+dds[i].innerHTML+'</a>'
			dds[i].innerHTML=a;
		}
		
		
		
		
//		banner
		$(document).ready(function(){
			var index=0;
			var dians = $('.dian span');
			var len=$(".banner_1 li").length;
			var starRollOne = null;
			$('.banner_1 li').fadeOut(600).eq(index).fadeIn(600);
			dians.css('background','white').eq(index).css('background','orange');
			function roll(){
				if(index == len-1){
					index = 0;
				}else{
					index++;
				}
//				console.log(index);
				$('.banner_1 li').fadeOut(600).eq(index).fadeIn(600);
				dians.css('background','white').eq(index).css('background','orange');
			}
			clearInterval(starRollOne);
			starRollOne = setInterval(roll,2000);
			
			dians.click(function(){
				index = $(this).index()-1;
				roll();
			})
			
			$(".banner").hover(function(){
				clearInterval(starRollOne);
			},function(){
				starRollOne = setInterval(roll,2000);
			});
		})
		
		
		
//		product


		var spans=$('.fours li span')
		for (var i=0;i<spans.length;i++) {
			var a = '<a href="####">'+spans[i].innerHTML+'</a>'
			dds[i].innerHTML=a;
		}
		
		
		
		
//		ajax


		
		$.ajax({
			type:"get",
			url:"shuju.json",
			dataType:'json'
		}).done(function(data){
			$('.hot_one a img').attr('src',data.douJiangJi[0].pic_url);
			$('.hot_two a img').attr('src',data.douJiangJi[0].pic_url);
			for (var i=0;i<data.tags.length;i++) {
				$('.hot_onein .sz:eq('+i+')').html(data.tags[i])
			};
			for (var i=0;i<data.pingpai.length;i++) {
				$('.hot_onein p span:eq('+i+')').html(data.pingpai[i])
			};
			for (var i=0;i<data.nice.length;i++) {
				var val=$('.hot_onein p:eq('+i+')').html()
				$('.hot_onein p:eq('+i+')').html(val+data.nice[i])
			}
			for (var i=0;i<data.tu.length;i++) {
				$('.fours li a img:eq('+i+')').attr('src',data.tu[i])
			}; 
			$('.news_1 div a img').attr('src',data.hot[0].sptu)
			$('.pro_name:eq(0)').html(data.hot[0].name)
			$('.news_2 div a img').attr('src',data.hot[1].sptu)
			$('.pro_name:eq(1)').html(data.hot[1].name)
			$('.pro_js:eq(0)').html(data.hot[0].jies)
			$('.pro_js:eq(1)').html(data.hot[1].jies)
			var pri=$('.pro_pri:eq(0)').html()
			var pri1=$('.pro_pri:eq(1)').html()
			$('.pro_pri:eq(0)').html(pri+data.hot[0].pri)
			$('.pro_pri:eq(1)').html(pri1+data.hot[1].pri)
//			var s=3
//			$.each(data, function(a,b) {
//				$('.fours li a img:eq('+s+')').attr('src',b[0].pic_url)
//				console.log(s)
//				s--;
//			});
		});
