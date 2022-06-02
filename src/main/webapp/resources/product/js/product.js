//페이지에서 메뉴 클릭시 원하는 위치로 이동시키는 코드 
/*$(document).ready(function () { 
$('.slideMenu a').click(function(e){
  e.preventDefault();
  var value=0;
  if($(this).hasClass('link1')){  
     value=500;
  }else if($(this).hasClass('link2')){ 
     value=1700;
  }else if($(this).hasClass('link3')){
     value=2500; 
	}else if($(this).hasClass('link4')){
     value=3300;}
  $("html,body").stop().animate({"scrollTop":value},1250);
});
});
*/

//위로가기 버튼 
$(document).ready(function() {

	$(window).scroll(function() {
	    // top button controll
	    if ($(this).scrollTop() > 500) {
	        $('#topButton').fadeIn();
	    } else {
	        $('#topButton').fadeOut();
	    }
	});

	$("#topButtonImg").click(function() {
		$('html, body').animate({scrollTop:0}, '300');
	});
});


/*수량 */
	
	Number.prototype.format = function(){ 
		if(this==0) return 0; 
		var reg = /(^[+-]?\d+)(\d{3})/;
	 	var n = (this + ''); 
	 	while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2'); 
	 	
	 	return n; };
 
  	String.prototype.format = function(){ 
		var num = parseFloat(this); 
		if( isNaN(num) ) return "0"; 
		
		return num.format(); 
	}; 
	
	/*var basic_amount = parseInt('7980'); */
	
	
		
	function change_qty2(t){ //var min_qty = '수량버튼'*1; 
		var basic_amount = $("#basic_amount").val();
		var min_qty = 1; 
		var this_qty = $("#ct_qty").val()*1; 
		var max_qty = '200'; // 현재 재고 
		if(t=="m"){ this_qty -= 1; if(this_qty<min_qty){ //alert("최소구매수량 이상만 구매할 수 있습니다."); 
		alert("수량은 1개 이상 입력해 주십시오."); 
		return; 
			} 
		} 
		else if(t=="p"){ 
			this_qty += 1; 
			if(this_qty>max_qty){ 
				alert("죄송합니다. 재고가 부족합니다."); 
				return; 
				} 
			} 
			
		var show_total_amount = basic_amount * this_qty; 
		//$("#ct_qty_txt").text(this_qty); 
		$("#ct_qty").val(this_qty); 
		$("#it_pay").val(show_total_amount); 
		$("#total_amount").html(show_total_amount.format()); 
		}
		
		
//검색  
function search(){
	$('#searchForm').submit();
}

 


