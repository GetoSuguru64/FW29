var vueProfolio = createApp({
    data() {
        return{
            Portfolio:[]
        }
    }
}).mount("#portfolio")

$.ajax({
    url:"/profolio",
    method: "get",
    dataType: "json",
    success: results=>{
        vueProfolio.Portfolio = results;
    }

})