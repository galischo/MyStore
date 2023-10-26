class Product {
    constructor(id, name, desc, price, min, max, category, img) {
     this.id = id;
     this.name = name
     this.desc = desc;
     this.price = price;
     this.min = min
     this.max = max;
     this.category = category;
     this.img = img;
    }
}
let finish;
//הכנסת מוצרים לחנות
const products = [
    new Product(1, "תיק ורוד", "תיק בצבעי פסטל עדינים", 50, "one size", "", "תיקים", "תיק ורוד.JPG"),
    new Product(2, "כפכפים לבנות", "לבן אלגנט", 150 , "one size", "", " כובעים וכפכפים ", "לבן.jpg"),
    new Product(3, "כפכפים ורודות", "ורוד קייצי", 20 , "one size", "", "כובעים וכפכפים ", "ורוד.jpg"),
    new Product(4, "תיק אפור", "תיק בצבעי פסטל עדינים", 35, "צר", "רחב", "תיקים", "תיק אפור.JPG"),
    new Product(5, "תיק כחול", "תיק בצבעי פסטל עדינים", 25 , "", "", "תיקים", "תיק כחול.JPG"),
    new Product(6, "תיק סגול", "תיק בצבעי פסטל עדינים", 15 , " ס'מ 15", "30 ס'מ", "תיקים", "תיק סגול.JPG"),
    new Product(7, "פומה צבעוני", "נעליים קייציות ", 250  ,"25", "40", "נעליים", "נעל צבועני.JPG"),
    new Product(8, "פומה לבנות", "נעליים לבנות אלגנטיות", 170 , "25", "37", "נעליים", "נעל לבן.JPG"),
    new Product(9, "פומה בצבעי שחור ורוד", "נעל יפה לחורף", 150, "37", "50", "נעליים", "שחור ורוד.JPG"),
    new Product(10, "פומה שחור לבן", "נעלי סניקרס לבנות  ", 75, "25", "35", "נעליים", "שחור לבן.JPG"),
    new Product(5, "תיק שחור", "תיק בצבעי פסטל עדינים", 25 , "", "", "תיקים", "תיק שחור.JPG"),
    new Product(3, "כפכפים סגולות", "סגול פסטל", 20 , "one size", "", "כובעים וכפכפים ", "סגול.jpg"),
    new Product(3, "כובע שחור", "כובע מהמם", 20 , "one size", "", "כובעים וכפכפים ", "כובע שחור.jpg"),
    new Product(3, "כובע אדום", "כובע יפה", 20 , "one size", "", "כובעים וכפכפים ", "כבוע אדום.jpg"),
    new Product(3, "כובע לבן", "כובע אלגנטי במיוחד", 20 , "one size", "", "כובעים וכפכפים ", "כובע לבן.jpg"),


]
const card = [];
let sum;
let mone = 0;
//יצירת כפתורי קטוגריות
function creatCatagories() {
    sum = document.createElement("div");
    document.getElementById("sal1").appendChild(sum);
    sum.innerHTML = "הסכום לתשלום:" + mone;
    sum.classList.add("sal1");
    const finish = document.createElement("button");
    finish.innerHTML = "לסיום הזמנה";
    document.getElementById("sal1").appendChild(finish);
    finish.onclick = function () {
        document.getElementById("main").style.display = "none";
        document.getElementById("sal1").style.display = "none";
        document.getElementById("open").style.display = "none";
        document.getElementById("order").style.display = "";
        document.getElementById("m").innerHTML=mone;
    }
    const button1 = document.createElement("button")
    button1.innerHTML = "נעליים";
    button1.classList.add("btn");
    button1.onclick = function () {
        const arr = SortCategories("נעליים")
        renderProducts(arr);
    }
    const button2 = document.createElement("button")
    button2.innerHTML = "כובעים וכפכפים ";
    button2.classList.add("btn");
    button2.onclick = function () {
        const arr = SortCategories("כובעים וכפכפים ")
        renderProducts(arr);
    }
    const button3 = document.createElement("button")
    button3.innerHTML = "תיקים";
    button3.classList.add("btn");
    button3.onclick = function () {
        const arr = SortCategories("תיקים")
        renderProducts(arr);
    }

    const mainDiv = document.getElementById("main")
    mainDiv.appendChild(button1);
    mainDiv.appendChild(button2);
    mainDiv.appendChild(button3);
}
function renderProducts(productArr) {
        const lastProduct = document.getElementsByClassName("css1");
        if (lastProduct.length != 0) {
            lastProduct[0].remove();
        }
        const divProduct = document.createElement("div");
        divProduct.classList.add("css1");
        for (let product of productArr) {
            const div = Create(product);
            divProduct.appendChild(div);

        }
        document.getElementById("main").appendChild(divProduct);
}
function Create(product) {
    let div = document.createElement("div");
    div.classList.add("css2");
    const p = document.createElement("p");
    p.innerHTML = `${product.name} ${product.price} ${"שח" } `;
    const img = document.createElement("img");
    img.src = `${product.img}`;
    div.appendChild(p);
    div.appendChild(img);
    const btn = document.createElement("button");
    btn.innerHTML = "הוסף לסל";
   
    div.appendChild(btn);
    btn.onclick = function () {
        pdiv_sal(product)
    }
    btn.classList.add("sal");
    img.ondblclick = function () {
        open(product)
    }
    return div;
}
function pdiv_sal(pr) {
    let d = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = `${pr.name} ${pr.price} ${"שח" }`;
    const img = document.createElement("img");
    img.src = `${pr.img}`;
    //img.style.width = 5;
    let b = document.createElement("b");
    b.innerHTML = "הסר מהסל";
    d.appendChild(p);
    d.appendChild(b);
    //d.appendChild(img);
    b.classList.add("b")
    d.classList.add("rem");
    document.getElementById("sal1").appendChild(d);
    mone += pr.price;
    sum.innerHTML = "הסכום לתשלום:" + mone;
    b.onclick = function () {
        removep(d);
        mone -= pr.price;
        sum.innerHTML = "הסכום לתשלום:" + mone;
   }

}
//1, "תיק", "תיק ספורוטיבי כתום", 50+" שח", "one size"
function open(pro) {
    let last1 = document.getElementsByClassName("css3");
    if (last1.length != 0) {
        last1[0].remove();
    }
    let temp = tryp(pro);
    document.getElementById("open").appendChild(temp);
    

}
function SortCategories(category) {

    const filteredArr = products.filter(p => p.category == category)
      return filteredArr;
}
function removep(div) {
    div.remove();
}
function tryp(pro) {
    let div = document.createElement("div");
    div.classList.add("css3");
    const p = document.createElement("p");
    p.innerHTML = `${pro.id} ${pro.name} ${pro.desc} ${pro.min} ${pro.max} ${pro.price} ${"שח" }`;
    const img = document.createElement("img");
    img.src = `${pro.img}`;
    let b = document.createElement("b");
    b.innerHTML = "סגור";
    b.classList.add("b1")
    div.appendChild(b);
    div.appendChild(p);
    div.appendChild(img);
    const btn = document.createElement("button");
    btn.innerHTML = "הוסף לסל";
    div.appendChild(btn);
    btn.classList.add("sal");
    btn.onclick = function () {
        pdiv_sal(pro)
    }
    b.onclick = function () {
        removep(div);
    }
    return div;
}


