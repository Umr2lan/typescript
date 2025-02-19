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


let planets_name : string[] = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];




    document.write("<h2>Planets Name</h2><ul>");
    planets_name.forEach((P) => {
        console.log(P);
        document.write(`<li>${P}</li>`);
    });
    document.write("</ul>");

    let planets_deatils =[
        {
            name : "mercury",
            distance_from_sun : "54.353 million km",
            moons : 0,
            special_feature : "closest to the sun"
        },
        {
            name : "venus",
            distance_from_sun : "108.2 million km",
            moons : 0,
            special_feature : "hottest planet"
        },
        {
            name : "earth",
            distance_from_sun : "149.6 million km",
            moons : 1,
            special_feature : "only planet with life"
        },
        {
            name : "mars",
            distance_from_sun : "227.9 million km",
            moons : 2,
            special_feature : "red planet"
        },
        {
            name : "jupiter",
            distance_from_sun : "778.5 million km",
            moons : 79,
            special_feature : "largest planet"
        },
        {
            name : "saturn",
            distance_from_sun : "1.427 billion km",
            moons : 82,
            special_feature : "ringed planet"
        },
        {
            name : "uranus",
            distance_from_sun : "2.871 billion km",
            moons : 27,
            special_feature : "blue planet"
        },
        {
            name : "neptune",
            distance_from_sun : "4.497 billion km",
            moons : 14,
            special_feature : "largest planet"
        },
        {
            name : "pluto",
            distance_from_sun : "5.906 billion km",
            moons : 5,
            special_feature : "dwarf planet"
        }
        
    ]
    document.write('<h2>Planets Details</h2>');
    planets_deatils.forEach((P) => {
        console.log(P);
        document.write(`
            <div class="container col-md-4 my-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${P.name}</h5>
                        <p class="card-text">Distance from Sun: ${P.distance_from_sun}</p>
                        <p class="card-text">Moons: ${P.moons}</p>
                        <p class="card-text">Special Feature: ${P.special_feature}</p>
                    </div>
                </div>
            </div>
        `);
    });


