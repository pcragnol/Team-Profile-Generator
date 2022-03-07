const generateTeam = team => {

  const generateManager = manager => {
    return `
    <div class="card mb-5" style="width: 18rem;">
  <div class="card-header bg-primary">
    <h2 class="card-title text-white">${manager.getName()}</h2>
    <h3 class="card-title text-white"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
  </div>
  </div>
    `;
  };

  const generateEngineer = engineer => {
    return `
    <div class="card mb-5" style="width: 18rem;">
  <div class="card-header bg-primary">
    <h2 class="card-title text-white">${engineer.getName()}</h2>
    <h3 class="card-title text-white"><i class="fas fa-glasses"></i> ${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
    </ul>
  </div>
  </div>
    `;
  };

  const generateIntern = intern => {
    return `
    <div class="card mb-5" style="width: 18rem;">
  <div class="card-header bg-primary">
    <h2 class="card-title text-white">${intern.getName()}</h2>
    <h3 class="card-title text-white"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
  </div>
    `;
  };

  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager))
  );

  html.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    .join('')
  );

  html.push(team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern))
    .join('')
  );

  return html.join('');

};

module.exports = team => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/8c0d30d327.js" crossorigin="anonymous"></script>
</head>

<body>
  <header class="mb-5 p-5 bg-success text-white">
    <h1 class="text-center">My Team</h1>
  </header>
  <main class="container">
    <div class="row">
      <div class="col-12 d-flex flex-wrap justify-content-around">${generateTeam(team)}</div>
    </div>
  </main>
</body>

</html>
  `;
};
