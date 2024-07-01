document.addEventListener('DOMContentLoaded', (event) => {
 
   

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



    var remoad = document.getElementById("remoad")
    remoad.addEventListener("click",()=>{
       var rtdcxf= document.getElementById("popup")
       rtdcxf.style.display="none"
       remoad.disabled =true
remoad.classList.add("bg-warning")
remoad.classList.remove("bg-success")
    })

     

    const productsPerPage = 5;
    let currentPage = 1;
    let totalProducts = 0;
    let currentCategory = '';  // Add this to keep track of the current category
    
    async function fetchProducts(page, category) {
        const skip = (page - 1) * productsPerPage;
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${productsPerPage}&skip=${skip}&select=title,price,thumbnail,rating`);
            const data = await response.json();
            totalProducts = data.total;
            return data.products;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    }
    
    function displayProducts(products) {
        const cateoppagepokolo = document.getElementById("cateoppagepokolo");
        cateoppagepokolo.innerHTML = '';
    
        products.forEach((product) => {
            cateoppagepokolo.innerHTML += `
            <div id="cardf6ygy">
                <img src="${product.thumbnail}" alt="${product.title}">
                <h2>${product.title}</h2>
                <h3>Rs.${product.price}</h3>
                <h5>Rating: ${product.rating}</h5>
            </div>
            `;
        });
    }
    
    function renderPagination() {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = '';
    
        const prevDisabled = currentPage === 1 ? 'disabled' : '';
        const nextDisabled = currentPage === totalPages ? 'disabled' : '';
    
        pagination.innerHTML += `<button onclick="goToPage(${currentPage - 1})" ${prevDisabled}>Previous</button>`;
        pagination.innerHTML += `<span id="optext">Page ${currentPage} of ${totalPages}</span>`;
        pagination.innerHTML += `<button onclick="goToPage(${currentPage + 1})" ${nextDisabled}>Next</button>`;
    }
    
    async function goToPage(page) {
        if (page < 1 || page > Math.ceil(totalProducts / productsPerPage)) {
            return;
        }
        currentPage = page;
        const products = await fetchProducts(currentPage, currentCategory);
        displayProducts(products);
        renderPagination();
    }
    
    // Make goToPage globally accessible
    window.goToPage = goToPage;
    
    // Adding click event listener to category elements
    const categoryElements = document.querySelectorAll(".samcate");
    
    categoryElements.forEach(element => {
        element.addEventListener("click", async (e) => {
            document.getElementById("ssdsdsd").style.display="none"
            const h5Element = e.currentTarget.querySelector("h5");
            document.querySelector("body").style.backgroundColor="rgb(255, 247, 247)"
            if (h5Element) {
                const categoryName = h5Element.textContent;
                console.log("Selected category:", categoryName);
    
                currentCategory = categoryName;  // Set the current category
                currentPage = 1;
                const products = await fetchProducts(currentPage, currentCategory);
                displayProducts(products);
                renderPagination();
    
                const cateoppage = document.getElementById("cateoppage");
                cateoppage.style.display = "flex";
                document.getElementById("popup").style.display = "none";
                loginform.style.display = "none";
                signform.style.display = "none";
                document.querySelector(".fullpages").style.display = "none";
                document.title = categoryName;
                document.getElementById("cateoppageh1").innerText = categoryName;
            }
        });
    });
    
    // Adding click event listener to go back button
    const back = document.getElementById("back");
    back.addEventListener("click", () => {
        const cateoppage = document.getElementById("cateoppage");
        cateoppage.style.display = "none";
        
        loginform.style.display = "none";
        signform.style.display = "none";
        document.querySelector(".fullpages").style.display = "block";
        document.title = "Daraz";
        document.querySelector("body").style.backgroundColor="white"
    });
    
})


    // Each ad appears 5 seconds after the previous one






// function onFunction() {
//     alert ("Your browser is working online.");
    
//   }
//   function offFunction() {
//       alert ("Your browser is working offline.");
//     }
//     // var agyaicihka=0
//     if(window.ononline){
    //         onFunction()
//         window.location.href="./index.html"
// // agyaicihka=1
// }
// else{
    //     offFunction()
    //     window.location.href="./offline.html"
    // }
    


