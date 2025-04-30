
exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        
        this.prod=page.locator(".nav-ul a")
    }


async gotoLoginPage() { 
    await this.page.goto('https://www.amazon.in/?tag=msndeskabkin-21&ref=pd_sl_1tmvcmz30t_e&adgrpid=1329311168025487&hvadid=83082214468070&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=116074&hvtargid=kwd-83082829756950:loc-90&hydadcr=5650_2377261&mcid=6233a7c588f136ff9af0c63d9f6745bc');
}
    async getlist(){
    // for(let i=0;i< this.prod.count();++i){
    //     console.log( await this.prod.nth(i).textContent())
    // }
    for(let i=0;i< await this.prod.count();++i){
        console.log( await this.prod.nth(i).textContent())
    }
}
}

    










