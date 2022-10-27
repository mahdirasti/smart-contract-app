# Initialization
1. First of all, clone the project (if not yet)!
2. run the `npm install`command (don't use `yarn` please since the project is already managed with `npm`)
3. Now copy `.env.example` into two separate files. `.env.production`(for production) and `.env.development`(for development. You are gonna use this probably). And then change their values based on your needs and environment.
4. Now you can start developing using `npm start` command.
5. If you needed documentation, you can run `npm run docs` to have a documentation based on comments in files. Then you can open `docs/index.html` in your browser.
# git workflow
 Our git wrokflow is feature based and consists of following branches:
 1. master: This is the production branch. It must always be stable and ready to deploy.
 2. develop: This works as our main development branch. All works, including features, bug fixes, etc. should be merged to this branch.
 3. testing: This is the branch for testing purposes. For example, all test deploys must be done from this branch.
 4. feature: Features are a list of branches that come to existence, get merged to develop branch using a pull request (merge request in other words) and then they disappear from existence. all the coding and developing features must be done in these branches. They must follow the following naming convention: `feature_${panel}_${featureName}`. For example `feature_user_wallets-page` or `feature_store_dashboard-page` or `feature_common_sidebar`. (Please use dash (-) instead of underline (_) to separate  words of `featureName`.)
 5. debug: Debugs work exactly like feature branches. But they have different purposes. Features are for development and debugs are for fixing probable bugs throughout the project. They have the following naming convention: `debug_${panel}_${featureName}`.

`master`, `develop` and `testing` branches are all protected branches which are accessible by maintainers only. To submit changes to these three, you have to create a `merge request`. But please, only submit your requests to `develop` branch and don't submit merge requests to `master` and `testing`  branches or otherwise they will be rejected.
### Starting the work in this flow
After you have cloned the repository and did all the initialization steps, checkout to develop branch(`git checkout develop`). You are not gonna need `master` and `testing` branches probably. And now in order to start the coding you have to create a `feature` or `debug` branch. Let's say you want to create a sidebar for both panels. Now you must use the following command: `git checkout -b feature_common_sidebar`(`-b` option creates a new branch). And now you can start coding on that branch.  Push the branch to origin using `git push -u origin feature_common_sidebar` after you are done. And now you can create a merge request to `develop` branch and hopefully it will be accepted. After that, make sure that your local `develop` branch is up to date with that of the origin(`git checkout develop && git pull origin develop`). In fact, any time that you wanted to do something new, make sure your develop branch is up to date.
**Note**: Please write comments for your commits in a meaningful way.
# Folder structure
1. api: This folder contains `axios` and its required config, and `endpoints.ts` which contains all endpoints of API and a helper function for getting the endpoint.
2. assets: As the name suggests, this folder contains all assets(fonts, images, icons, SVGs, etc.).
3. components: This folder contains all the shared components(For more info read Coding rules section part 5).
4. utils: All utility functions (if any) are placed in this folder.
5. i18n: i18next config and translation dictionaries are placed in this folder.
6. MUI: MUI related stuff(for now only theme and palettes).
7. navigation: This folder contains config for `react-router-dom` and some navigation related components(Like `LazyRoute` and `PrivateRoute`).
8. panels: This folder contains panel specific code and every panel has a folder structure like below:
   1. layout: Contains layout wrapper for the panel.
   2. pages: Contains pages specific to a panel.
   3. redux: State management for panel. Redux has 4 subfolders and each of them contains `.ts` files for every state slice that we have. `Redux` will have following folder structure:
      1. actions: Action types and creators for each state slice.
      2. reducers: Reducers for each state slice.
      3. selectors: Selectors for each state slice.
      4. services: actions that are hanled by thunk middleware. For example sending/receiving data to/from API.
9. hooks: This folder contains all custom hooks. useTimer for now.
# Coding conventions
Please consider these conventions while coding and developing:
1. No global stylesheet files(`.css, .scss, etc.`). Since we are using `MUI` and we want our styles to be dynamic(for example supporting both `RTL` and `LTR` or dark mode and light mode (who knows. That might become a future development :D)), don't use static stylesheet files. In fact, don't use css files that will get imported and stay forever. Instead, create components and use built in style engine of `MUI`(in this project we will be using `emotion` which is default in `MUI`) and `sx` prop which is provided by `MUI system`. Or if you really need to use `css` (which i doubt it) use `css-modules` to have scoped `css` files. So no global stylesheets and create dynamic components instead.
2. Please **always** write comments for what you have done in a `JSDoc` manner. A good example of how you can comment is at `src/navigation/RouterConfig.tsx`.  Visit [typedoc documentation](https://typedoc.org/guides/doccomments/) for more info. Here is an example:
```js
/** 
* Some description
* @param {type} name description
* @returns {return value or type} description
* etc.
*/
```
3. Always use `typescript` and prevent using `any` type as much as possible.
4. Don't hard code anything as much as possible.
5. Our project will be using `container/view` pattern. In this design pattern, there is a `container` and some children `views`. All the component specific state (`useState` for example) are present in the `container` only. And the required state for `views` will be passed down using props. We can say that every single `view` is for rendering UI based on the passed props and container gets them together and provides state. So in order to create new components, use the following steps:
   1. Create a folder with the name of the component.
   2. inside of that folder create `index.ts` and `Container.tsx`. `index.ts` will mainly `import` and then `export default` the Container.
   3. Create `view` chunks for different purposes. For example a sidebar will have a rectangle as `container` and different icons as `view` components and that rectangle `container` will hold sidebar state.
   4. Don't forget to export the component from `index.ts` file inside **components** folder
```js
// for example:
export { default as Card } from './Card' // card is folder which contains index.ts that exported container
export { default as Button } from './Button'
```
