function per_info() {
    var per_name = document.getElementById("name").value;
    var date_birth = document.getElementById("dob").value;
    var o_gender = document.getElementsByName("gender");
    var select_gender = "";
    for (var i = 0; i < o_gender.length; i++) {
        if (o_gender[i].checked) {
            select_gender = o_gender[i].value;
            break;
        }
    }
    var per_rel = document.getElementById("religion").value;
    var per_hobby = document.getElementsByName("hobbies");
    var hobbies_check_data = [];
    per_hobby.forEach(function (a) {
        if (a.checked) {
            hobbies_check_data.push(a.value);
        }
    });
    var per_add = document.getElementById("address").value;
    var per_academic = document.getElementById("academic_info").value;
    var pass_year = document.getElementById("pass_out_year").value;
    var per_gpa = document.getElementById("gpa").value;
    var per = document.getElementById("percentage").value;
    var per_degree = document.getElementById("degree").value;
    var per_uni = document.getElementById("university").value;
    var last_com = document.getElementById("last_company").value;
    var years_exp = document.getElementById("years_experience").value;
    var expec_sal = document.getElementById("expected_salary").value;
    var reason = document.getElementById("reason_leaving").value;
    console.log("The Name is ".concat(per_name, "\nDate of Birth is ").concat(date_birth, "\nApplicant Gender is ").concat(select_gender, "\n    \nApplicant Religion is ").concat(per_rel, "\nApplicant Hobby is ").concat(hobbies_check_data, "\n    \nApplicant Address is ").concat(per_add, "\nApplicant Academic ").concat(per_academic, "\n    \nPass Out Year ").concat(pass_year, "\nGPA ").concat(per_gpa, "\n    \nPercentage is ").concat(per, "\nApplicantDergree ").concat(per_degree, "\n    \nUniversity is ").concat(per_uni, "\nLast Company ").concat(last_com, "\n    \nApplicant Years of Experience ").concat(years_exp, "\nApplicant Expected Salary ").concat(expec_sal, "\n    \nReason of Leaving the Last Company ").concat(reason, "\n    "));
}
function agreement() {
    var check_box = document.getElementById("agree");
    var button = document.getElementById("btn");
    if (check_box.checked) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}
