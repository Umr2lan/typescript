function per_info(){
    let per_name = (document.getElementById("name") as HTMLInputElement).value
    let date_birth = (document.getElementById("dob") as HTMLInputElement).value
    let o_gender = document.getElementsByName("gender") as NodeListOf<HTMLInputElement>
    let select_gender = "";
    for(let i=0; i<o_gender.length; i++){
        if((o_gender[i] as HTMLInputElement).checked){
            select_gender = (o_gender[i] as HTMLInputElement).value;
            break;}}     
    let per_rel = (document.getElementById("religion") as HTMLInputElement).value
    let per_hobby = document.getElementsByName("hobbies") as NodeListOf<HTMLInputElement>
    let hobbies_check_data:String[] = [];
    per_hobby.forEach((a)=>{
        if(a.checked){
            hobbies_check_data.push(a.value);
        }}); 
    let per_add = (document.getElementById("address") as HTMLInputElement).value
    let per_academic = (document.getElementById("academic_info") as HTMLInputElement).value
    let pass_year = (document.getElementById("pass_out_year") as HTMLInputElement).value
    let per_gpa = (document.getElementById("gpa") as HTMLInputElement).value
    let per = (document.getElementById("percentage") as HTMLInputElement).value
    let per_degree = (document.getElementById("degree") as HTMLInputElement).value
    let per_uni = (document.getElementById("university") as HTMLInputElement).value
    let last_com = (document.getElementById("last_company") as HTMLInputElement).value
    let years_exp = (document.getElementById("years_experience") as HTMLInputElement).value
    let expec_sal = (document.getElementById("expected_salary") as HTMLInputElement).value
    let reason = (document.getElementById("reason_leaving") as HTMLInputElement).value

    console.log(`The Name is ${per_name}\nDate of Birth is ${date_birth}\nApplicant Gender is ${select_gender}
    \nApplicant Religion is ${per_rel}\nApplicant Hobby is ${hobbies_check_data}
    \nApplicant Address is ${per_add}\nApplicant Academic ${per_academic}
    \nPass Out Year ${pass_year}\nGPA ${per_gpa}
    \nPercentage is ${per}\nApplicantDergree ${per_degree}
    \nUniversity is ${per_uni}\nLast Company ${last_com}
    \nApplicant Years of Experience ${years_exp}\nApplicant Expected Salary ${expec_sal}
    \nReason of Leaving the Last Company ${reason}
    `);
}
function agreement(){
    let check_box = document.getElementById("agree") as HTMLInputElement;
    let button = document.getElementById("btn") as HTMLButtonElement;

    if (check_box.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}