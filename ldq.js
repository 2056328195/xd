/*******************************
[rewrite_local]
^http:\/\/www\.api-yun-aliyun\.com\/within\/withinSeven\/base\ url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/mumu02.js
[mitm] 
hostname = www.api-yun-aliyun.com
*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const ldq = '/isOpen';


if (url.indexOf(ldq) != -1) {
    obj.message = "小迪牛逼";
	body = JSON.stringify(obj);
}


$done({body});
