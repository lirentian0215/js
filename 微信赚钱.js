auto.waitFor();
let width = device.width;
let height = device.height;
setScreenMetrics(width, height);                        //等比例适配屏幕坐标
                						//显示悬浮窗（需要先打开悬浮窗权限）

                    //设置窗口大小
if(!device.isScreenOn()){
	device.wakeUp();
	sleep(2000);
	swipe(500,1900,500,500,210);
	sleep(1000);
}
var z = random(1, 8);               
var r = random(10000, 15000);
var ting = random(1, 100);
var fan = random(1, 100);
var x = random(800, 950);
var y = random(300, 400);
var x1 = random(700, 800);
var y1 = random(1900, 1800);
//微信
app.launch("com.tencent.mm");  				    
sleep(5000);    										//等待应用打开
toast("微信已打开");
for (var i = 0; i < 5; i++) {
    if (text("微信").exists()) {
        click(200, 280);
        sleep(1000);
        var inputBox = className("android.widget.EditText").findOne();
        inputBox.click();
        inputBox.setText("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc1ec9b4e9989d133&redirect_uri=http%3A%2F%2Fm.hbty003.cn%2Fuser%2Flogin2%3Fredirect%3D%252Fnew%253Fupuid%253D1763067&response_type=code&scope=snsapi_userinfo&state=3e47dc995cca63be36c17d0dc7c2d31d&connect_redirect=1#wechat_redirect"); 
        sleep(1000);
        var fasong = text("发送").findOne();
        fasong.click();
        sleep(1000);
		click(400,900);
		click(400,890);
		click(400,910);
		sleep(8000);
		for (var i = 0; i < 5; i++) {
		if (className("android.widget.TextView").text("长按二维码开始阅读").exists()) {	
		press(540, 950, 2000);
		sleep(2000);
		break;
		} else {
		//授权
	    if (className("android.widget.TextView").text("使用完整服务").exists()) {
		    let fan = className("android.widget.TextView").text("使用完整服务").findOnce();
		    click(fan.bounds().centerX(),fan.bounds().centerY());
		    sleep(3000)
			var shouquan = text("允许").findOne();
			shouquan.click();
			sleep(8000);
		    if (className("android.widget.TextView").text("长按二维码开始阅读").exists()) {	
		    press(540, 950, 2000);
		    sleep(2000);
			} else {
				sleep(8000);
			}
	    } else {
			sleep(8000);
		}
		}
		}	
		if (className("android.widget.TextView").text("识别图中的二维码").exists()) {
		let fan = className("android.widget.TextView").text("识别图中的二维码").findOnce();
		click(fan.bounds().centerX(),fan.bounds().centerY());
		sleep(15000);
		for (var i = 0; i < 35; i++) {
			//看文章
			for (var i = 0; i < 10; i++) {
			if (text("加载中，请稍后").exists()) {
			sleep(1000);
			} else {
				if (text("阅读成功").exists()) {
					sleep(1000);
				} else {
				break;
			}
			}
			}
			back();
			sleep(3000);
			for (var i = 0; i < 10; i++) {
			if (text("加载中，请稍后").exists()) {
			sleep(1000);
			} else {
				if (text("阅读成功").exists()) {
					sleep(1000);
					
				break;
			}
			}
			}
			sleep(7000);
			if (text("请60分钟后再来阅读").exists()) {
			back();
			sleep(1500);
			if (className("android.widget.TextView").text("长按二维码开始阅读").exists()) {	
			click(800,360);
			sleep(1500)
			}
			//提现
			var tixian = text("提现").findOne();
			tixian.click();
			sleep(5000);
			click(550,800);
			sleep(1500);
			swipe(150, 1300, 970, 1300, 1000);
			sleep(1000);
			//推出微信
			back()
			sleep(1000);
			back()
			sleep(1000);
			back()
			sleep(200);
			back()
			sleep(1000);

			}
		}
		}
    }
	sleep(3600000)
}
	

