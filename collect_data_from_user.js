function collect_data_from_user() {
    var shop_name = document.getElementById("shop_name").value;
    var timing = document.getElementById("timing").value;
    var address = document.getElementById("address").value;
    var nearest_landmark = document.getElementById("nearest_landmark").value;
    var owner_name = document.getElementById("owner_name").value;
    var owner_age = document.getElementById("owner_age").value;
    var category = document.getElementById("category").value;
    var mall_name = document.getElementById("mall_name").value;
    var gender = document.getElementsByName("gender");
    var yesorno = document.getElementsByName("yesorno");
    var gender_value = "";
    var yesorno_value = "";
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender_value = gender[i].value;
        }
    }
    for (var o = 0; o < yesorno.length; o++) {
        if (yesorno[o].checked) {
            yesorno_value = yesorno[o].value;
        }
    }
    console.log("Shop Name is: ".concat(shop_name, "\nTiming is: ").concat(timing, "\nAddress is: ").concat(address, "\nNearest Landmark is: ").concat(nearest_landmark, "\nOwner Name is: ").concat(owner_name, "\nOwner Age is: ").concat(owner_age, "\nCategory is: ").concat(category, "\nMall Name is: ").concat(mall_name, "\nGender is: ").concat(gender_value, "\nYes or No is: ").concat(yesorno_value));
}
