# About this application

This is my solution to technical test by EMBL EBI. It can be optimised better(especially the folder structure, implementing GraphQL query) and can be wrapped up with more unit tests and integration tests.

# Instructions to run this application

- Clone the repository.
- Navigate to the cloned repository directory in commandPrompt/terminal and do ‘npm install’ to install dependencies.
- ‘npm start’ to run application.

# File manifest

- src folder has all my changes
- GenesAssociatedApp.js is the parent component uses custom hook to get data from api.
- Components folder has all remaining components. (Folder structure can be better but i just placed all components in one folder as the app just displaying one table).
- I have added a simple unit test in DiseaseAssociatedTargetService.test.js.
