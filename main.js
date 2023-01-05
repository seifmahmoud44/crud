// get total

var price = document.getElementById("price")
var Taxes = document.getElementById("taxes")
var Ads = document.getElementById("ads")
var Discount = document.getElementById("discount")
var total = document.getElementById("total")
let gost ;


// get total

function totalPrice(){
    if (price.value != ""){
        total.innerHTML = (+price.value + +Taxes.value + +Ads.value) - Discount.value
        total.style.background = "#179c46"
    }else {
        total.innerHTML = 0;
        total.style.background = "#9c1717"
    }
}

let title = document.getElementById("Title")
let count = document.getElementById("count")
let category = document.getElementById("category")
let create = document.getElementById("create")

// create

let dataPro = []

create.onclick = function (){
    
    var newPro = {
        title: title.value,
        price: price.value,
        Taxes: Taxes.value,
        Ads: Ads.value,
        Discount: Discount.value,
        category: category.value,
        total:total.innerHTML
        
    }
    
    dataPro.push(newPro)

    


    showData()
    
    clearData()
    //clear total
    total.innerHTML = 0;
    total.style.background = "#9c1717"
    //clear total
    
}


































// functions

function clearData(){
    title.value = '';
    price.value = '';
    Taxes.value = '';
    Ads.value = '';
    count.value = '';
    Discount.value = '';
    category.value = '';
}

function showData() {
    let tbody = document.getElementById("tbody")
    for (let i = 0; i < dataPro.length; i++){

        
    }




    if (count.value > 1){
        for (let i = 1; i < count.value; i++){
            tbody.innerHTML += `
            <td class="num"></td>
            <td>${dataPro[dataPro.length - 1].title}</td>
            <td>${dataPro[dataPro.length - 1].price}</td>
            <td>${dataPro[dataPro.length - 1].Taxes}</td>
            <td>${dataPro[dataPro.length - 1].Ads}</td>
            <td>${dataPro[dataPro.length - 1].Discount}</td>
            <td>${dataPro[dataPro.length - 1].category}</td>
            <td>${dataPro[dataPro.length - 1].total}</td>
            <td id="update" ><button>updates</button></td>
            <td id="delete" ><button>delete</button></td>
        `
        
        var newPro = {
            title: title.value,
            price: price.value,
            Taxes: Taxes.value,
            Ads: Ads.value,
            Discount: Discount.value,
            category: category.value,
            total:total.innerHTML
            
        }
        dataPro.push(newPro)
        
        

        }
    }else{
        tbody.innerHTML += `
        <td class="num"></td>
        <td>${dataPro[dataPro.length - 1].title}</td>
        <td>${dataPro[dataPro.length - 1].price}</td>
        <td>${dataPro[dataPro.length - 1].Taxes}</td>
        <td>${dataPro[dataPro.length - 1].Ads}</td>
        <td>${dataPro[dataPro.length - 1].Discount}</td>
        <td>${dataPro[dataPro.length - 1].category}</td>
        <td>${dataPro[dataPro.length - 1].total}</td>
        <td id="update" ><button>updates</button></td>
        <td id="delete" ><button>delete</button></td>
    `

    var newPro = {
        title: title.value,
        price: price.value,
        Taxes: Taxes.value,
        Ads: Ads.value,
        Discount: Discount.value,
        category: category.value,
        total:total.innerHTML
        
    }
    
    }



// delete item 

let dele = document.querySelectorAll("#delete")

dele.forEach((ele)=>{
    ele.onclick = ()=>{
        ele.parentElement.remove();
    }
})  


//update

let up = document.querySelectorAll("#update")

up.forEach((ele)=>{
    ele.onclick = ()=>{

        
        var old = {
            // title: ele.parentElement.children[1].innerHTML,
            // price: ele.parentElement.children[2].innerHTML,
            // Taxes: ele.parentElement.children[3].innerHTML,
            // Ads: ele.parentElement.children[4].innerHTML,
            // Discount: ele.parentElement.children[5].innerHTML,
            // category: ele.parentElement.children[6].innerHTML,
            // total:ele.parentElement.children[7].innerHTML
        }
        
        let fil = dataPro.find((wow)=>{
            return wow.title === ele.parentElement.children[1].innerHTML
        })
        
        console.log();
        
        
        
    }
})  

 //delete alll

if(dataPro !== ''){

    deletAll.innerHTML = `<button id="btnD">DELETE ALL</button>`

    let btnD = document.getElementById("btnD")
    btnD.onclick = (els)=>{

        dataPro.splice(0)
        tbody.innerHTML = ''
        deletAll.innerHTML = ''
    }

}
}


const compare = (a, b)=>{
    const ageA = a.age; 
    const ageB = b.age;
    return ageA - ageB
}

const users = [{name:"ahmed", age: 30}, {name:"amr", age: 33}
, {name:"hossam", age: 50}
, {name:"soso", age: 34}
, {name:"weal", age: 19}
, {name:"emad", age: 23}
, {name:"helal", age: 13}
]

    
const newUsers = users.sort((a, b)=>{
    const ageA = a.age; 
    const ageB = b.age;
    return ageA - ageB
})
console.log(newUsers);





// let data = []
// create.onclick = ()=>{
//     let newPro = {
//         title: title.value,
//         price: price.value,
//         Taxes: Taxes.value,
//         Ads: Ads.value,
//         count: count.value,
//         Discount: Discount.value,
//         category: category.value,
//     }
//     let tbody = document.getElementById("tbody")
    
//     data.push(newPro)
    
//     if(count.value > 1){
//         for(let i =0; i < count.value; i++){
            
//             tbody.innerHTML += `
//             <tr> 
//                 <td class="num"></td>
//                 <td>${data[data.length-1].title}</td>
//                 <td>${data[data.length-1].price}</td>
//                 <td>${data[data.length-1].Taxes}</td>
//                 <td>${data[data.length-1].Ads}</td>
//                 <td>${data[data.length-1].Discount}</td>
//                 <td>${data[data.length-1].category}</td>
//                 <td id="update"  onclick=update(${data.title})><button>updates</button></td>
//                 <td id="delete"><button>delete</button></td>
//             </tr>
//             `

//             data.push(newPro)
//             console.log(i);
//         }
//         }else{
//             tbody.innerHTML += `
//             <tr> 
//                 <td class="num"></td>
//                 <td>${data[data.length-1].title}</td>
//                 <td>${data[data.length-1].price}</td>
//                 <td>${data[data.length-1].Taxes}</td>
//                 <td>${data[data.length-1].Ads}</td>
//                 <td>${data[data.length-1].Discount}</td>
//                 <td>${data[data.length-1].category}</td>
//                 <td id="update"><button>updates</button></td>
//                 <td id="delete"><button>delete</button></td>
//             </tr>
//             `
            
//         }
    
    
//         function update(){
            
//         }
        
//     title.value = '';
//     price.value = '';
//     Taxes.value = '';
//     Ads.value = '';
//     count.value = '';
//     Discount.value = '';
//     category.value = '';
    

//     let del = document.querySelectorAll("#delete")

    


//     del.forEach((e)=>{
//         e.onclick = ()=>{
           
//             e.parentElement.remove()
//             data.forEach((ele)=>{
//                 console.log(ele.parentElement);
//             })
            
//         }
//     })
//     let deletAll = document.getElementById("deletAll")
    
//     if(data !== ''){

//         deletAll.innerHTML = `<button id="btnD">DELETE ALL</button>`

//         let btnD = document.getElementById("btnD")
//         btnD.onclick = (els)=>{
            
//             data.splice(0)
//             tbody.innerHTML = ''
//             deletAll.innerHTML = ''
//         }
        
//     }
    
    

// }





