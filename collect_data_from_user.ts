function collect_data_from_user(){
    let shop_name = (document.getElementById("shop_name") as HTMLInputElement).value;
    let timing = (document.getElementById("timing") as HTMLInputElement).value;
    let address = (document.getElementById("address") as HTMLInputElement).value;
    let nearest_landmark = (document.getElementById("nearest_landmark") as HTMLInputElement).value;
    let owner_name = (document.getElementById("owner_name") as HTMLInputElement).value;
    let owner_age = (document.getElementById("owner_age") as HTMLInputElement).value;

    console.log(`Shop Name is: ${shop_name}\nTiming is: ${timing}\nAddress is: ${address}\nNearest Landmark is: ${nearest_landmark}\nOwner Name is: ${owner_name}\nOwner Age is: ${owner_age}`);
}


