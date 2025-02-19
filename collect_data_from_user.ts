function collect_data_from_user(){
    let shop_name = (document.getElementById("shop_name") as HTMLInputElement).value;
    let timing = (document.getElementById("timing") as HTMLInputElement).value;
    let address = (document.getElementById("address") as HTMLInputElement).value;
    let nearest_landmark = (document.getElementById("nearest_landmark") as HTMLInputElement).value;
    let owner_name = (document.getElementById("owner_name") as HTMLInputElement).value;
    let owner_age = (document.getElementById("owner_age") as HTMLInputElement).value;
    let category = (document.getElementById("category") as HTMLSelectElement).value;
    let mall_name = (document.getElementById("mall_name") as HTMLSelectElement).value;
    let gender = document.getElementsByName("gender") as NodeListOf<HTMLInputElement>;
    let yesorno = document.getElementsByName("yesorno") as NodeListOf<HTMLInputElement>;
    
    let gender_value = "";
    let yesorno_value = "";


    for(let i = 0; i < gender.length; i++){
        if((gender[i] as HTMLInputElement).checked){
            gender_value = (gender[i] as HTMLInputElement).value;
        }
    }
    for(let o = 0; o < yesorno.length; o++){
        if((yesorno[o] as HTMLInputElement).checked){
            yesorno_value = (yesorno[o] as HTMLInputElement).value;
        }
    }

    console.log(`Shop Name is: ${shop_name}\nTiming is: ${timing}\nAddress is: ${address}\nNearest Landmark is: ${nearest_landmark}\nOwner Name is: ${owner_name}\nOwner Age is: ${owner_age}\nCategory is: ${category}\nMall Name is: ${mall_name}\nGender is: ${gender_value}\nYes or No is: ${yesorno_value}`);
}


