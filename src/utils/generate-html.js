const indexFile = require("../index");

// fn to generate HTML of all team members
const generateHTML = (teamName, managerInfo, engineerInfo, internInfo) => {
  // use user input to generate title
  const generateTitle = ` <div class="banner">
      <h1 class="team-title">${teamName}</h1>
    </div>`;

  // fn to use  generate manager card for each instancies
  const generateManagerCard = `<div class="card mt-5 mb-5">
          <h4 class="text-center card-title" id="manager-name">
            <i class="fa-solid fa-user fa-color fa-1x"></i> ${managerInfo.name}
          </h4>
          <div class="card-body">
            <ul class="list-group list-group-flush border">
              <li class="list-group-item fw-bold">
                ID: <span> ${managerInfo.id}</span>
              </li>
              <li class="list-group-item fw-bold">
                Email:
                <span
                  ><a href="mailto: ${managerInfo.email}" class="email"
                    >${managerInfo.email}</a
                  ></span
                >
              </li>
              <li class="list-group-item fw-bold">
                Office Number:
                <span>${managerInfo.officeNumber}</span>
              </li>
            </ul>
          </div>
        </div>`;

  // fn to use  generate engineer card for each instancies
  const generateEngineerCard = (engineer) => {
    return ` <div class="card mt-5 mb-5">
            <h4 class="text-center card-title" id="engineer-name">
              <i class="fa-solid fa-user-gear fa-color fa-1x"></i>${engineer.name}
            </h4>
            <div class="card-body">
              <ul class="list-group list-group-flush border">
                <li class="list-group-item fw-bold">
                  ID: <span> ${engineer.id}</span>
                </li>
                <li class="list-group-item fw-bold">
                  Email:
                  <span
                    ><a href="mailto: ${engineer.email}" class="email"
                      >${engineer.email}</a
                    ></span
                  >
                </li>
                <li class="list-group-item fw-bold">
                  GitHib:
                  <span
                    ><a
                      href="https://github.com/${engineer.github}"
                      class="github"
                      target="_blank"
                      >${engineer.github}</a
                    ></span
                  >
                </li>
              </ul>
            </div>
          </div>`;
  };

  // fn to use  generate intern card for each instancies
  const generateInternCard = (intern) => {
    return `<div class="card mt-5 mb-5">
            <h4 class="text-center card-title" id="intern-name">
              <i class="fa-solid fa-user-graduate fa-color fa-1x"></i>${intern.name}
            </h4>
            <div class="card-body">
              <ul class="list-group list-group-flush border">
                <li class="list-group-item fw-bold">
                  ID: <span> ${intern.id}</span>
                </li>
                <li class="list-group-item fw-bold">
                  Email:
                  <span
                    ><a href="mailto: ${intern.email}" class="email"
                      >${intern.email}</a
                    ></span
                  >
                </li>
                <li class="list-group-item fw-bold">
                  School: <span>${intern.school}</span>
                </li>
              </ul>
            </div>
          </div>`;
  };

  // map through the interns array and create a card for each intern
  const internCards = internInfo.map(generateInternCard).join("");

  // map through the interns array and create a card for each intern
  const engineerCards = engineerInfo.map(generateEngineerCard).join("");

  // template html return when higher order fn is called
  return `<!DOCTYPE html>
        <html lang="en">
          <head>c
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
            <!-- bootstrap css -->
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
              crossorigin="anonymous"
            />
            <!-- google font css -->
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;400;500&family=Bitter:wght@300;400&family=M+PLUS+1p:wght@100;300;400;500&family=Manrope:wght@200;400;600&display=swap"
              rel="stylesheet"
            />
            <!-- font awesome css -->
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
              integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
              crossorigin="anonymous"
              referrerpolicy="no-referrer"
            />
            <!-- authors css -->
            <link rel="stylesheet" href="./assets/css/styles.css" />
            <title>Team Profile Sample</title>
            <link />
            <link />
          </head>
          <body>
  
          <main>
  
            <!-- div containing bander -->
            ${generateTitle}
      
            <div class="manager-card-container m-5">
            <div class="manager-card-title"><h3>MANAGER</h3></div>
            <div class="card-flex">
  
            <!-- manager card container -->
            ${generateManagerCard}
  
            </div>
            </div>
  
  
  
            <div class="engineer-card-container m-5">
            <div class="engineer-card-title"><h3>ENGINEER</h3></div>
            <div class="card-flex">
  
            <!-- engineer card container -->
            ${engineerCards}
  
            </div>
            </div>
  
             
            <div class="intern-card-container m-5">
            <div class="intern-card-title"><h3>INTERN</h3></div>
            <div class="card-flex">
  
            <!-- intern card container -->
            ${internCards}
  
            </div>
            </div>
  
  
          </main>
        </body>
      </html>
    `;
};

module.exports = generateHTML;
