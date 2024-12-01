// JavaScript Document

$(document).ready(function(e) {
	//菜单
	$(".ul_1 div").mouseover(function(e) {
		menuNum=$(".ul_1 div").index(this)
		$(".ul_1 li ul").hide()
        $(".ul_1 li ul:eq("+menuNum+")").show()
    });
	//幻灯
	huanDengNum=0
	$(".small_huanDengBox").css("opacity","0.6")
	$(".xinXi").css("opacity","0.8")
    huanDeng_HS()
	$(".small_huanDeng div").mouseover(function(e) {
        window.clearTimeout(huanDeng_T)
		huanDengNum=$(".small_huanDeng div").index(this)
		$(".huaGui").css({left:-1990*huanDengNum})
		$(".small_huanDeng div:eq("+huanDengNum+")").css({"border-bottom":"2px solid #F60"})
		huanDeng_HS()
    });
	$(".jiantouy").click(function(e) {
        window.clearTimeout(huanDeng_T)
		huanDeng_HS()
    });
	$(".jiantouz").click(function(e) {
        window.clearTimeout(huanDeng_T)
		if(huanDengNum<=1)
		{
			huanDengNum=6
		} 
		else
		{
			huanDengNum=huanDengNum-2
		}
		$(".huaGui").css({left:-1990*huanDengNum})
		$(".small_huanDeng div").css({"border-bottom":"0px solid #F60"})
		$(".small_huanDeng div:eq("+huanDengNum+")").css({"border-bottom":"2px solid #F60"})
		huanDeng_HS()
    });
	//播放列表
	$(".zhuanJi_shang img").hide()
	$(".zhuanJi_shang img:eq(0)").show()
	$(".zhuanJi_xia2,.zhuanJi_xia3").hide()
	$(".zhuanJi_list div").mouseover(function(e) {
		$(".zhuanJi_shang img").hide()
		$(".zhuanJi_list div").css({"background":"none"})
		$(".zhuanJi_xia1,.zhuanJi_xia2,.zhuanJi_xia3").hide()
        zhuanJiNum=$(".zhuanJi_list div").index(this)
		$(".zhuanJi_list div:eq("+zhuanJiNum+")").css({"background":"5E3826"})
		$(".zhuanJi_shang img:eq("+zhuanJiNum+")").show()
		$(".zhuanJi_xia"+(zhuanJiNum+1)+"").show()
    });
	//歌曲列表
	$(".boFang_coin div").hide()
	$(".boFang_coin p").hide()
	$(".boFang_list li").mouseover(function(e) {
		$(".boFang_coin p").hide()
		$(".boFang_coin div").hide()
        boFangNum=$(".boFang_list li").index(this)
		$(".boFang_coin p:eq("+boFangNum+")").show()
    });
	$(".boFang_coin p").mouseover(function(e) {
		$(".boFang_coin div:eq("+boFangNum+")").show()
    });
	$(".boFang_coin div").mouseout(function(e) {
        $(".boFang_coin div").hide()
    });
	//电视剧
	$(".movie_Box div").hide()
	$(".movie_Box div:eq(0)").show()
	$(".movie_Box p").click(function(e) {
        $(".movie_Box div").hide()
		movieNum=$(".movie_Box p").index(this)
		$(".movie_Box div:eq("+movieNum+")").show()
    });
});


function huanDeng_HS()
{
	$(".huaGui").css({left:-1990*huanDengNum})
	$(".small_huanDeng div").css({"border-bottom":"0px solid #F60"})
	$(".small_huanDeng div:eq("+huanDengNum+")").css({"border-bottom":"2px solid #F60"})
	huanDengNum++
	if(huanDengNum>=7) huanDengNum=0
	huanDeng_T=window.setTimeout("huanDeng_HS()",2000)
}
