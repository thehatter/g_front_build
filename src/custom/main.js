(function($){$(document).ready(function(){if($(window).scrollTop()<=200){$("html, body").animate({scrollTop:0},1);$('.search_bar input').focus();}$("a[href='#top']").click(function(){$("html, body").animate({scrollTop:0},"slow");return false;});
function upButtonPosition(){if($(window).scrollTop()+$(window).height()>=($(document).height()-100)){$('a.top_button').addClass("on_bot_of_the_page");}else{$('a.top_button').removeClass("on_bot_of_the_page");}};
$(window).scroll(function(){upButtonPosition();});
upButtonPosition();
$(".catalog_menu_bar .catalog_menu_bar_title").click(function(){var catalog_menu_parent=$(this).parent();var catalog_menu_items=catalog_menu_parent.find('.catalog_menu_bar_items')
if(catalog_menu_parent.hasClass("expand")){catalog_menu_parent.removeClass("expand");}else{catalog_menu_parent.addClass("expand");}catalog_menu_items.slideToggle("slow",function(){});});
$(".catalog_menu_bar.min").mouseleave(function(){if($(this).hasClass("expand")){$(this).removeClass("expand");$(this).find('.catalog_menu_bar_items').slideToggle("fast",function(){});}});


var win_w = $(window).width();
$( window ).resize(function() {
  win_w = $(window).width();
  firmBarPosition();
});

if(win_w>992){
$(".firm_container .firm_right_bar_container").height($(".firm_container").height());
}
function firmBarPosition(){
var BarHeight=$(".firm_right_bar").height();
var BarWidth=$(".firm_right_bar_container").width();
var WinHeight=$(window).height();
var Diff=0;
if(BarHeight>$(window).height()){var Diff=BarHeight-$(window).height();//console.log(Diff);
}
if(win_w>992){
$(".firm_right_bar").width(BarWidth);
}
if(($(window).scrollTop()>200)&&($(window).scrollTop()+WinHeight<($(document).height()-100-(Diff)))){
	$(".firm_right_bar").addClass("bar_fixed_midle");
	$('.firm_right_bar').removeClass("bar_fixed_bottom");
	}else
		if($(window).scrollTop()+WinHeight>=($(document).height()-100-(Diff))){
		if(BarHeight>(WinHeight-100)){
			$(".firm_right_bar").addClass("bar_fixed_bottom");$('.firm_right_bar').removeClass("bar_fixed_midle");
			}
		}else{
		$(".firm_right_bar").removeClass("bar_fixed_midle");$('.firm_right_bar').removeClass("bar_fixed_bottom");
		}
};

$(window).scroll(function(){firmBarPosition();});firmBarPosition();
$("#radio").click(function(){msg=window.open("/radio","msg","width=530,height=480,left=300,top=200");});});})(jQuery);

(function($){
	
	
	
$(document).ready(function(){
			$(".call_mobile_link").click(function(){
			
			//data-toggle="modal"
			$modal_shou=$(this).attr("data-target");
			//alert($modal_shou);
			$($modal_shou).modal('show');
			});
			$("#search_show").click(function(){
				$('#mobile_search_bar').show();
			});
			$("#close_search").click(function(){
				$('#mobile_search_bar').hide();
			});
			
			$("a.phones_show").click(function(){
				$(this).next('.phones_hide').addClass('open');
			});
			
	
			$("a.showday").click(function(){
				$(this).next('.new_time_work').show("slow");
				yaCounter17207572.reachGoal('showday');
			});
			
			$(".close").click(function(){
				$(this).parent('.new_time_work').hide("slow");
			});

    // new fuel script
    $.get( "/fuel/fuel_rate.json", function( data ) {
      var itemsHTML = '';
      itemsHTML += '<div class="fuel_item"><div class="title">98</div><div class="price">'
                    + data.gasoline98.value +'</div></div>';
      itemsHTML += '<div class="fuel_item"><div class="title">95</div><div class="price">'
                    + data.gasoline95.value +'</div></div>';
      itemsHTML += '<div class="fuel_item"><div class="title">92</div><div class="price">'
                   + data.gasoline92.value +'</div></div>';
      itemsHTML += '<div class="fuel_item"><div class="title">ДТ</div><div class="price">'
                   + data.dT.value +'</div></div>';
      itemsHTML += '<div class="fuel_item"><div class="title">ГАЗ</div><div class="price">'
                   + data.gas.value +'</div></div>';
      //console.log($('.fuel').length);
      $('.fuel').append(itemsHTML);
    });    

    // video widget script
      $('#video-carusel').owlCarousel({
          loop:true,
          margin:6,
          nav:false,
          dots:true,
          autoplay: true,
          
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:4
              }
          }
      })
});



})(jQuery); 
