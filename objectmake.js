var job_applicant = {
    name: "jhon doe",
    qualify: "Master",
    position: "Ceo",
    salary: "200crore",
    experience: "10years",
    address: "123 main st",
    department: "IT",
    age: 30,
};
console.log(job_applicant);
document.write("\n    <div class=\"container mt-4\">\n        <table class=\"table table-bordered\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th>Field</th>\n                    <th>Value</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Name</td>\n                    <td>".concat(job_applicant.name, "</td>\n                </tr>\n                <tr>\n                    <td>Qualification</td>\n                    <td>").concat(job_applicant.qualify, "</td>\n                </tr>\n                <tr>\n                    <td>Position</td>\n                    <td>").concat(job_applicant.position, "</td>\n                </tr>\n                <tr>\n                    <td>Expected Salary</td>\n                    <td>").concat(job_applicant.salary, "</td>\n                </tr>\n                <tr>\n                    <td>Experience</td>\n                    <td>").concat(job_applicant.experience, "</td>\n                </tr>\n                <tr>\n                    <td>Address</td>\n                    <td>").concat(job_applicant.address, "</td>\n                </tr>\n                <tr>\n                    <td>Department</td>\n                    <td>").concat(job_applicant.department, "</td>\n                </tr>\n                <tr>\n                    <td>Age</td>\n                    <td>").concat(job_applicant.age, "</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    \n"));
