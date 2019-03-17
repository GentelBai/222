class Goods{
    constructor(){
        this.cont = document.querySelector(".vip ul");
        this.url = "api/product?dataName=product";
        // 1.准备读取数据
        this.load()
    }
    load(){
        var that = this;
        $.ajax({
            url:this.url,
            success:function(res){
                console.log(res)
                that.res = res.page_data;
                // console.log(that.res);
            // 3.准备渲染页面
            that.display()
            }
        })
    }
    display(){
        var str = "";
        this.res.forEach(function(value){
            str += `<li>
						<a href="#">
							<img src="${value.src}"/>
							<div class="t1">
								<p>${value.name}</p>
								<p>${value.jieshao}</p>
								<p>${value.price}</p>
							</div>
						</a>
					</li>`;
        })
        this.cont.innerHTML = str;
    }
}
new Goods();





