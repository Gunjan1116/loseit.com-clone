// All code of home page(index page)
let data=[
    {
        image:"https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-119.png?w=1010&ssl=1"
        ,des:"Setting Macronutrients Goals: How Many Macros do You Need?"
    },
    {
        image: "https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/02/Quick-tips-to-make-healthier-choices.png?w=1010&ssl=1"
        ,des:"Quick Tips to Make Healthier Decisions"
    },
    {
        image: "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-132.png?w=1010&ssl=1"
        ,des:"12 Protine-Packed Snacks to Curb Hanger Quick"
    },
    {
        image: "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/health-benefits-of-seltzer-water.png?w=1010&ssl=1"
        ,des:"Is Drinking Seltzer Actually Healthy?" 
    },
    {
        image: "https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-135.png?w=1010&ssl=1"
        ,des:"Fun 20-Minutes Treadmill Workouts" 
    },
    {
        image: "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/01/Seven-benefits-of-sleep.png?w=1010&ssl=1"
        ,des:"Seven Strategies for a Better Night Sleep" 
    },
    {
        image: "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/Intuitive-Eating.png?w=1010&ssl=1"
        ,des:"The Secret Behind Intuitive Eating" 
    },
    {
        image: "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/08/Untitled-design-83.png?w=1010&ssl=1"
        ,des:"5 Ways You're Sabotaging Your Weight Loss" 
    },
    {
        image: "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-126.png?w=1010&ssl=1"
        ,des:"10 Tips For Making Healthier Choices When Dining Out" 
    }]
    let i=0;
    let j=1;
    let k=2;
    let z;
    display_1(data[i]);
    display_2(data[j]);
    display_3(data[k]);
    function display_1(arr){
        document.querySelector("#slide-1").innerHTML="";
        let img=document.createElement("img");
        img.setAttribute("src",arr.image);
        let p=document.createElement("p");
        p.innerText=arr.des;
        document.querySelector("#slide-1").append(img,p);
    }
    function display_2(arr){
        document.querySelector("#slide-2").innerHTML="";
        let img=document.createElement("img");
        img.setAttribute("src",arr.image);
        let p=document.createElement("p");
        p.innerText=arr.des;
        document.querySelector("#slide-2").append(img,p);
    }
    function display_3(arr){
        document.querySelector("#slide-3").innerHTML="";
        let img=document.createElement("img");
        img.setAttribute("src",arr.image);
        let p=document.createElement("p");
        p.innerText=arr.des;
        document.querySelector("#slide-3").append(img,p);
    }
    document.querySelector("#front").addEventListener("click",forward);
    function forward(){
        clearInterval(z);
        i=i+3;
        j=j+3;
        k=k+3;
        if(i>6){
            i=0;
        }
        if(j>7){
            j=1;
        }
        if(k>8){
            k=2;
        }
        display_1(data[i]);
        display_2(data[j]);
        display_3(data[k]);
    }
    document.querySelector("#back").addEventListener("click",backward);
    function backward(){
        clearInterval(z);
        i=i-3;
        j=j-3;
        k=k-3;
        if(i<0){
            i=6;
        }
        if(j<0){
            j=7;
        }
        if(k<0){
            k=8;
        }
        
        display_1(data[i]);
        display_2(data[j]);
        display_3(data[k]);
    }
    z=setInterval(function(){
        i=i+3;
        j=j+3;
        k=k+3;
        if(i>6){
            i=0;
        }
        if(j>7){
            j=1;
        }
        if(k>8){
            k=2;
        }
        display_1(data[i]);
        display_2(data[j]);
        display_3(data[k]);
    },2000);
    document.querySelector("#refresh").addEventListener("click",function(){
        window.location.href="index.html"
    });

    