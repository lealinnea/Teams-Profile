// generate specific cards based on the type of employee they are
const template = teamMember =>{
  
    // intern html snippet
    const internSnippet = intern => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h1 class="card-title">${intern.getName()}</h1>
        <h1 class="card-title">${intern.getRole()}</h1>
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
      </div>
    </div>
      `
    }
  
  
    // manager html snippet
    const managerSnippet = manager => {
      return `
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h1 class="card-title">${manager.getName()}</h1>
            <h1 class="card-title">${manager.getRole()}</h1>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
          </div>
        </div>
          `
    }
  
  
    // engineer html snippet
    const engineerSnippet = engineer => {
      return `
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h1 class="card-title">${engineer.getName()}</h1>
            <h1 class="card-title">${engineer.getRole()}</h1>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: ${engineer.getGithub()}</li>
                </ul>
          </div>
        </div>
          `
    }
  
  // base html to push snippets into based on role
    const baseHtml = []
  
    // push, filter , and map by employee type
    baseHtml.push(teamMember
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => internSnippet(intern))
    )
  
    baseHtml.push(teamMember
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => managerSnippet(manager))
    )
  
  
    baseHtml.push(teamMember
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => engineerSnippet(engineer)
  )
    )
  // return the html and join
    return baseHtml.join('')
  }
  // starting boiler plate html
  module.exports = teamMember => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Members</title>
    </head>
    <body>
        <h1 class="text-center">
            Team Members
        </h1>
        ${template(teamMember)}
    </body>
    </html>
    `
  }