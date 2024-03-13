## Random People Search

Random People Search is an easy-to-use UI for searching random people's data provided by https://randomuser.me. The UI is developed using Angular and an NX monorepo, with state management provided by NgRx.

### Setup for Development
- Ensure you have Node.js version 18 or higher; run `node -v` in the terminal or cmd to confirm the Node.js version.
- Run `npm install` at the root level of the project.
- Run `nx serve frontend` to start the development environment.
- Install required VSCode extensions for ease of development; refer to `.vscode/extensions.json`.

### Project Setup
- #### Components
    Components are reusable and can be published as individual NPM packages for reusability across external projects.
- #### Frontend
    The main Angular application containing business logic and screen implementation.
- #### Services
    Reusable services and models.


### Features
- Paginated data across 5 pages.
- Ability to search for a person on a page.
- Caching of data per page to prevent network round trips.
- Built using a scalable monorepo design.
- Predictable state management using NgRx.

### Todos
- Unit and E2E testing.
- Publish the component library as an individual npm package.
- CI/CD automation using GitHub Actions and deployment to AWS.
- PR quality checks.
- PR preview for easy review and validation.
