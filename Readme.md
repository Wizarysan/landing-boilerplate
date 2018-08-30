#### Includes:
- Webpack dev and build setup with server
- SCSS build and autoprefixer
- Bulma framework (imported in main.scss as whole but can be modular <https://bulma.io/documentation/overview/modular/> ) 
- Custom SCSS mixins (breakpoints)
- AOS (don't forget to init if needed)

#### Made with reference to:

<https://www.valentinog.com/blog/webpack-tutorial/>
<https://www.valentinog.com/blog/from-gulp-to-webpack-4-tutorial/#Switching_from_Gulp_to_webpack_compiling_SASS_to_CSS_adding_vendor_prefixes_to_CSS>
<https://medium.com/developing-with-sass/creating-a-dead-simple-sass-mixin-to-handle-responsive-breakpoints-889927b37740>
<https://github.com/michalsnik/aos>

Customise Bulma with:
<https://bulma.io/documentation/customize/with-node-sass/#6-add-your-own-bulma-styles>
If SASS Bulma will be a pain migrate to SCSS https://github.com/j1mc/bulma-scss


#### Issues:

**babel:** TypeError: Cannot read property 'bindings' of null, issue with preset-env
**applied solution:**
    devDependencies
    "@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.0.0",

