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
document.write("\n    <div class=\"container mt-4\">\n        <table class=\"table table-striped table-hover\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th>Field</th>\n                    <th>Value</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Name</td>\n                    <td>".concat(job_applicant.name, "</td>\n                </tr>\n                <tr>\n                    <td>Qualification</td>\n                    <td>").concat(job_applicant.qualify, "</td>\n                </tr>\n                <tr>\n                    <td>Position</td>\n                    <td>").concat(job_applicant.position, "</td>\n                </tr>\n                <tr>\n                    <td>Expected Salary</td>\n                    <td>").concat(job_applicant.salary, "</td>\n                </tr>\n                <tr>\n                    <td>Experience</td>\n                    <td>").concat(job_applicant.experience, "</td>\n                </tr>\n                <tr>\n                    <td>Address</td>\n                    <td>").concat(job_applicant.address, "</td>\n                </tr>\n                <tr>\n                    <td>Department</td>\n                    <td>").concat(job_applicant.department, "</td>\n                </tr>\n                <tr>\n                    <td>Age</td>\n                    <td>").concat(job_applicant.age, "</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    \n"));
var planets_name = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
document.write("<h2>Planets Name</h2><ul>");
planets_name.forEach(function (P) {
    console.log(P);
    document.write("<li>".concat(P, "</li>"));
});
document.write("</ul>");
var planets_deatils = [
    {
        name: "mercury",
        distance_from_sun: "54.353 million km",
        moons: 0,
        special_feature: "closest to the sun"
    },
    {
        name: "venus",
        distance_from_sun: "108.2 million km",
        moons: 0,
        special_feature: "hottest planet"
    },
    {
        name: "earth",
        distance_from_sun: "149.6 million km",
        moons: 1,
        special_feature: "only planet with life"
    },
    {
        name: "mars",
        distance_from_sun: "227.9 million km",
        moons: 2,
        special_feature: "red planet"
    },
    {
        name: "jupiter",
        distance_from_sun: "778.5 million km",
        moons: 79,
        special_feature: "largest planet"
    },
    {
        name: "saturn",
        distance_from_sun: "1.427 billion km",
        moons: 82,
        special_feature: "ringed planet"
    },
    {
        name: "uranus",
        distance_from_sun: "2.871 billion km",
        moons: 27,
        special_feature: "blue planet"
    },
    {
        name: "neptune",
        distance_from_sun: "4.497 billion km",
        moons: 14,
        special_feature: "largest planet"
    },
    {
        name: "pluto",
        distance_from_sun: "5.906 billion km",
        moons: 5,
        special_feature: "dwarf planet"
    }
];
document.write('<h2>Planets Details</h2>'); // Adding a heading
planets_deatils.forEach(function (P) {
    console.log(P);
    document.write("\n            <div class=\"container mt-4\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">".concat(P.name, "</h5>\n                        <p class=\"card-text\">Distance from Sun: ").concat(P.distance_from_sun, "</p>\n                        <p class=\"card-text\">Moons: ").concat(P.moons, "</p>\n                        <p class=\"card-text\">Special Feature: ").concat(P.special_feature, "</p>\n                    </div>\n                </div>\n            </div>\n        "));
});
