function collect_data_from_user() {
    var shop_name = document.getElementById("shop_name").value;
    var timing = document.getElementById("timing").value;
    var address = document.getElementById("address").value;
    var nearest_landmark = document.getElementById("nearest_landmark").value;
    var owner_name = document.getElementById("owner_name").value;
    var owner_age = document.getElementById("owner_age").value;
    console.log("Shop Name: ".concat(shop_name, "\nTiming: ").concat(timing, "\nAddress: ").concat(address, "\nNearest Landmark: ").concat(nearest_landmark, "\nOwner Name: ").concat(owner_name, "\nOwner Age: ").concat(owner_age));
}
