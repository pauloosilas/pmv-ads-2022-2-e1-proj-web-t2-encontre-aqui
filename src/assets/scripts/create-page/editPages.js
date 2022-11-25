window.addEventListener('load', updatePageInputs());


function updatePageInputs(){
    const url = window.location.href;
    const urlObj = new URL(url);
    const id_produto = urlObj.searchParams.get("id")

    var isDeliveries = document.getElementById("isDeliveries")
    var isReservation = document.getElementById("isReservation")

    var principal = document.getElementById("principal");
    var photo1 = document.getElementById("photo1");
    var photo2 = document.getElementById("photo2");
    var photo3 = document.getElementById("photo3");
    var photo4 = document.getElementById("photo4");

    var rsocial = document.querySelectorAll('.social input');

    var product_name = document.getElementById("product_name");
    var product_price = document.getElementById("product_price");
    var product_description = document.getElementById("product_description");

    const pages_data = JSON.parse(localStorage.getItem("pages_data"));
    const company_data = JSON.parse(localStorage.getItem("company_data"));
    
    if(company_data){
        if(pages_data){
            for(var i = 0; i < pages_data.length; i++){
                if(pages_data[i].id === parseInt(id_produto)){
                isDeliveries.checked = pages_data[i].domicilio;
                isReservation.checked = pages_data[i].agendamento;
            
                    updateBackground(principal, pages_data[i].banner)
                    updateBackground(photo1, pages_data[i].imagens[0])
                    updateBackground(photo2,pages_data[i].imagens[1])
                    updateBackground(photo3,pages_data[i].imagens[2])
            }
            }
        }
    }

}

function updateBackground(area, src){
    if(src != ''){
        area.style.backgroundImage = `url(${src})` 
        area.style.backgroundSize = `cover`                   
        area.style.backgroundRepeat = `no-repeat` 
    }
}