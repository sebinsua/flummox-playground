TODO:
Move this back:
externalHelpers&

- [ ] Create a new structure.
  public/
    js/
    css/
  config/
    default.json
    index.js
  client/
    app/
      index.js
    index.js --> add a #! at the top
  server/
    app/
      views/
      index.js
    index.js --> add a #! at the top
  hot-loader/
    index.js --> add a #! at the top
  shared/
    actions/
    components/
    stores/
    utils/
    flux.js
    init.js
    routes.js
  gulpfile.js
    -- dev server
    -- production server
    -- nodemon?
  .gitignore
  README.md
  package.json
  webpack.config.dev.js
  webpack.config.js
- [ ] Understand and document the code.
- [ ] Get the styling to work with hot loading.
- [ ] Refactor so that it is simpler. Remove code that is not required.
- [ ] Test that some basic things work, for example URLs.
- [ ] Reduce the number of packages until we just have the ones that are required.
- [ ] Find commonalities between server/appView and client/app.
- [ ] Swap nunjucks for something simpler.
- [ ] Can we get eslint working?
- [ ] Can we get Mocha working?


NOTES
-----
When you use react-router's <Link> component, you give it a to prop which is the name of a route, plus any params and query data the route needs. The <a> rendered by this component has an onClick handler which ultimately calls router.transitionTo() on the router instance with the props you gave the link.

See also:

https://github.com/shama/gulp-webpack
https://github.com/jtangelder/sass-loader
