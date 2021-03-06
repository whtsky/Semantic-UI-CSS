var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'whtsky:semantic-ui-css',
  summary : 'Semantic UI - CSS Release of Semantic UI',
  version : '2.2.13',
  git     : 'git://github.com/whtsky/Semantic-UI-CSS.git',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use('jquery', 'client');

  api.addAssets([
    // icons
    'themes/default/assets/fonts/icons.eot',
    'themes/default/assets/fonts/icons.svg',
    'themes/default/assets/fonts/icons.ttf',
    'themes/default/assets/fonts/icons.woff',
    'themes/default/assets/fonts/icons.woff2',

    // flags
    'themes/default/assets/images/flags.png',
  ], 'client');

  api.addFiles([
    // release
    'semantic.css',
    'semantic.js'
  ], 'client');

});
