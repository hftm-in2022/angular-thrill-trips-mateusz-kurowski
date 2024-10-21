# Setup of the project

The following steps were executed:

1. Create new project.

   In the location where the project was supposed to be setup, open terminal and execute:

   ```
   ng new angular-thrill-trips-mateusz-kurowski
   ```

   Select the Sass(SCSS) stylesheet format

2. Navigate to the newly created folder with the command:
   ```
   cd .\angular-thrill-trips-mateusz-kurowski\
   ```
3. Create the Git repository on the GitHub HFTM platform.
4. Setup the code quality tools for the Angular application.
   Open a new terminal in the Visual Studio Code and type in the following:

   - Setting up Prettier:
     ```
     npm install prettier --save-dev
     ```
     Add the following to the package.json:
     ```
     "scripts": {
     "format": "npx prettier --write ./src/app/*"
     }
     ```
   - Setting up ESLint:
     ```
     ng add @angular-eslint/schematics
     ```
   - Setting up CommitLint:

     ```
     npm install @commitlint/cli @commitlint/config-conventional
     ```

     Add the following to the package.json:

     ```
     "commitlint": {
      "extends": [
         "@commitlint/config-conventional"
       ]
     }
     ```

   - Setting up Lint-Staged:

     ```
     npm install --save-dev lint-staged
     ```

     Add the following to the package.json:

     ```
     "lint-staged": {
         "*.{ts,js,html}": "eslint --cache --fix",
         "*.{ts,js,html,css,scss,less,md}": "prettier --write"
     }
     ```

   - Setting up Husky:
     ```
     npm install --save-dev husky
     ```
     Initalizing Husky:
     ```
     npx husky init
     ```
     Add the following to the package.json, if it doesn't exist already:
     ```
     "scripts": {
        "prepare": "husky"
     }
     ```

   After all properties have been added make an update by running:

   ```
   npm install
   ```

5. Next clone the repository to the project and synchronize changes.
6. Set the workflow permissions
   - Make sure that the Read and write permissions are set (1)
   - Tick the allow GitHub Actions to create and approve pull requests (2)
   - Save (3)
     <img title="workflow permissions" src="assets\pictures\documentation_pictures\Workflow permissions.png">
7. In GitHub navigate to Settings -> Code security and enable the Dependabot options as in the below image (1-3).
   Please keep in mind that when you click on the 3rd enable you will be then navigated to the Dependabot.yml file.
   <img title="dependabot setup in settings" src="assets\pictures\documentation_pictures\Dependabot setup.png">
8. Adjust the dependabot.yml file:

   ```
   version: 2
   updates:
   - package-ecosystem: "npm" # See documentation for possible values
     directory: "/" # Location of package manifests
     schedule:
       interval: "weekly"
   ```

9. Next we will setup our build.yml file. To do this in GitHub navigate to actions (1) and search for angular(2), next click on configure for Node.js (3).
   <img title="navigate to github actions" src="assets\pictures\documentation_pictures\GitHub actions.png">

10. Configure the build.yml file as below.

    ```
    name: Node.js CI

    on:
    push:
        branches: [ "main" ]
    pull_request:
        branches: [ "main" ]

    jobs:
        build:

            runs-on: ubuntu-latest

            strategy:
            matrix:
                node-version: [18.x, 20.x, 22.x]
                # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

            steps:
            - uses: actions/checkout@v4
            - name: Use Node.js ${{ matrix.node-version }}
            uses: actions/setup-node@v4
            with:
                node-version: ${{ matrix.node-version }}
                cache: 'npm'
            - run: npm ci

            - name: Run tests
            run: npm run test:ci
            - name: Build
            run: npm run build
    ```

    After saving the file the Actions will provide an error as the test:ci is not created. Navigate to package.json and add the following line to script:

    ```
    "test:ci": "ng test --no-watch --no-progress --browsers=ChromeHeadless"
    ```

11. Add the ng-update.yml file in .github folder. Add the following code:

    ```
    name: "Update Angular Action"
    on: # when the action should run. Can also be a CRON or in response to external events. see https://git.io/JeBz1
    schedule:
        - cron: '30 5 * * 1,3,5'

    jobs:
    ngxUptodate:
        runs-on: ubuntu-latest
        steps:
        - name: Updating ng dependencies # the magic happens here !
            uses: fast-facts/ng-update@v1
            with:
            base-branch: main
            repo-token: ${{ secrets.GITHUB_TOKEN }}
    ```

12. If not available we add the Azure Tools to our Visual Studio Code. Next click F1 to open the commands in Visual Studio Code and write Azure Static Web Apps: Create Static Web App... Afterwards we select:

    - Subscription: Azure for students
    - Enter name: provide the project name
    - Select a region for Funcitons API: Selected the recommmended one
    - Select the build preset: Angular
    - Enter location of your application code: /
    - Enter location of your build output: dist/angular-thrill-trips-mateusz-kurowski

13. Adding Angular Material:

    - In terminal write: `ng add @angular/material`
    - Choose a prebuild theme name: Custom
    - Setup global Angular Material typography styles: Yes
    - Include the Angular animations module? Include and enable animations

14. Finding the deployment URL:
    - Navigate to Angular Portal
    - Search for Static Web Apps
    - Select the name of the project
    - The URL will be visible on the right corner (red square)
      <img title="MS Azure Portal, project URL" src="assets\pictures\documentation_pictures\Microsoft Azure Portal Project URL.png">
