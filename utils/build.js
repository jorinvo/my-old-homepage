{

    baseUrl: "../prod/public/js",

    mainConfigFile: "../prod/public/js/main.js",

    dir: "../prod/public/js",

    paths: {
        text: "libs/require/text",
        order: "libs/require/order",
        jquery: "empty:",
        modernizr: "libs/modernizr-2.5.3",
        underscore: "libs/underscore.min",
        backbone: "libs/backbone.min",
        hogan: "libs/hogan.min"
    },

    optimize: "uglify",

    optimizeCss: "none",

    inlineText: true,

    useStrict: false,

    //Skip processing for pragmas.
    skipPragmas: false,

    //If skipModuleInsertion is false, then files that do not use define()
    //to define modules will get a define() placeholder inserted for them.
    //Also, require.pause/resume calls will be inserted.
    //Set it to true to avoid this. This is useful if you are building code that
    //does not use require() in the built project or in the JS files, but you
    //still want to use the optimization tool from RequireJS to concatenate modules
    //together.
    skipModuleInsertion: true,

    modules: [
        {
            name: "main",
            include: [
                "hogan",
                "text"
            ],
            exclude: [
                "utils/doAnimation_new"
            ]
        },
        {
            name: "views/404",
            exclude: [
                "hogan",
                "underscore",
                "backbone",
                "text"
            ],
            overwrite: {
                dir: "../prod/public/js/views"
            }
        },
        {
            name: "views/about",
            exclude: [
                "hogan",
                "underscore",
                "backbone",
                "text"
            ],
            overwrite: {
                dir: "../prod/public/js/views"
            }
        },
        {
            name: "views/blog",
            exclude: [
                "hogan",
                "underscore",
                "backbone",
                "text"
            ],
            overwrite: {
                dir: "../prod/public/js/views"
            }
        },
        {
            name: "views/lab",
            exclude: [
                "hogan",
                "underscore",
                "backbone",
                "text"
            ],
            overwrite: {
                dir: "../prod/public/js/views"
            }
        },
        {
            name: "views/posts",
            exclude: [
                "hogan",
                "underscore",
                "backbone",
                "text"
            ],
            overwrite: {
                dir: "../prod/public/js/views"
            }
        },
        {
            name: "views/work",
            exclude: [
                "hogan",
                "underscore",
                "backbone",
                "text"
            ],
            overwrite: {
                dir: "../prod/public/js/views"
            }
        },
        {
            name: "utils/doAnimation_new",
            overwrite: {
                dir: "../prod/public/js/utils"
            }
        },
        {
            name: "utils/doAnimation_old",
            overwrite: {
                dir: "../prod/public/js/utils"
            }
        }
    ],

    wrap: true,

    fileExclusionRegExp: /^\./,

    preserveLicenseComments: false
}