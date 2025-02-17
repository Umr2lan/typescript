let job_applicant: {name:string,qualify:string,position:string,salary:string,experience:string,address:string,department:string,age:number}={
    name : "jhon doe",
    qualify : "Master",
    position : "Ceo",
    salary : "200crore",
    experience : "10years",
    address : "123 main st",
    department : "IT",
    age : 30,
}
console.log(job_applicant);

document.write(`
    <div class="container mt-4">
        <table class="table table-striped table-hover">
            <thead class="thead-dark">
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>${job_applicant.name}</td>
                </tr>
                <tr>
                    <td>Qualification</td>
                    <td>${job_applicant.qualify}</td>
                </tr>
                <tr>
                    <td>Position</td>
                    <td>${job_applicant.position}</td>
                </tr>
                <tr>
                    <td>Expected Salary</td>
                    <td>${job_applicant.salary}</td>
                </tr>
                <tr>
                    <td>Experience</td>
                    <td>${job_applicant.experience}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>${job_applicant.address}</td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>${job_applicant.department}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>${job_applicant.age}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
`);
