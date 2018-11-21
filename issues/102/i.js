var v = bl$("id_div_4-weixin-plx");
var d1 = blo0.blDiv(v, v.id + "_d1","d1", blGrey[1]);
var s = '<div class="XDheader"><div class="XDheader-right" id="XDid_div_title">';
 s += '<a href= "https://github.com/littleflute/weixin/issues/102" target="_blank">#102_v0.1. 24</a> ';
s += "<a class='xd' target='_blank' href='https://github.com/littleflute/weixin/edit/master/issues/102/i.js'"
s +=">";		s += " i102.js*  ";		s += "</a> "; 
	s += "  <a class='xd'    target='_blank'  href='https://littleflute.github.io/littleflute/issues/102/i.js'"; 
	s +=">";		s += " i102.js ";		s += "</a>"; 
 s += '</div></div>';
d1.innerHTML = s;
 function _comments(o) {
         var d = blo0.blDiv( d1, d1.id + "_v",  "v", blGrey[0]); 	
        d.v = blo0.blDiv(d,d.id+"v","v",blGrey[2]);
        d.v1 = blo0.blDiv(d,d.id+"v1","v1",blGrey[3]);
	 for(i in o){  
                    var _b = blo0.blBtn(d.v , d.v.id + "_btn_" + i, i, blGrey[i]);    _b.v = d.v1;
                    _b.onclick = function(_this, _txt){
                         return function(){ _this.v.innerHTML = _txt; eval(_txt);}
                     }(_b, o[i].body);  
        }
}
w3.getHttpObject("https://api.github.com/repos/littleflute/weixin/issues/102/comments", _comments);	
