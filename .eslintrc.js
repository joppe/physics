module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "worker": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "globals": {},
    "plugins": [],
    "rules": {
        /* Possible Errors */

        // disallow or enforce trailing commas
        "comma-dangle": [2, "never"],

        // disallow assignment in conditional expressions
        "no-cond-assign": 2,

        // disallow use of constant expressions in conditions
        "no-constant-condition": 2,

        // disallow control characters in regular expressions
        "no-control-regex": 2,

        // disallow duplicate arguments in functions
        "no-dupe-args": 2,

        // disallow duplicate keys when creating object literals
        "no-dupe-keys": 2,

        // disallow a duplicate case label
        "no-duplicate-case": 2,

        // disallow empty block statements
        "no-empty": 2,

        // disallow the use of empty character classes in regular expressions
        "no-empty-character-class": 2,

        // disallow assigning to the exception in a catch block
        "no-ex-assign": 2,

        // disallow double-negation boolean casts in a boolean context
        "no-extra-boolean-cast": 2,

        // disallow unnecessary parentheses
        //"no-extra-parens": 1,

        // disallow unnecessary semicolons
        "no-extra-semi": 2,

        // disallow overwriting functions written as function declarations
        "no-func-assign": 2,

        // disallow function or variable declarations in nested blocks
        "no-inner-declarations": 2,

        // disallow invalid regular expression strings in the RegExp constructor
        "no-invalid-regexp": 2,

        // disallow irregular whitespace outside of strings and comments
        "no-irregular-whitespace": 2,

        // disallow negation of the left operand of an in expression
        "no-negated-in-lhs": 2,

        // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-obj-calls": 2,

        // disallow multiple spaces in a regular expression literal
        "no-regex-spaces": 2,

        // disallow sparse arrays
        "no-sparse-arrays": 2,

        // avoid code that looks like two expressions but is actually one
        "no-unexpected-multiline": 2,

        // disallow unreachable statements after a return, throw, continue, or break statement
        "no-unreachable": 2,

        // disallow comparisons with the value NaN
        "use-isnan": 2,

        // ensure JSDoc comments are valid
        "valid-jsdoc": [2, {
            "prefer": {
                "return": "returns"
            },
            "requireReturn": false,
            "requireParamDescription": false,
            "requireReturnDescription": false
        }],

        // ensure that the results of typeof are compared against a valid string
        "valid-typeof": 2,

        /* Best Practices */

        // enforces return statements in callbacks of array’s methods
        "array-callback-return": 2,

        // treat var statements as if they were block scoped
        "block-scoped-var": 2,

        // require return statements to either always or never specify values
        "consistent-return": 2,

        // specify curly brace conventions for all control statements
        "curly": [2, "all"],

        // require default case in switch statements
        "default-case": 2,

        // enforces consistent newlines before or after dots
        "dot-location": [2, "property"],

        // encourages use of dot notation whenever possible
        "dot-notation": 2,

        // require the use of === and !==
        "eqeqeq": 2,

        // make sure for-in loops have an if statement
        "guard-for-in": 2,

        // disallow use of arguments.caller or arguments.callee
        "no-caller": 2,

        // disallow lexical declarations in case clauses
        "no-case-declarations": 2,

        // disallow else after a return in an if
        "no-else-return": 2,

        // disallow use of empty functions
        "no-empty-function": 2,

        // disallow use of empty destructuring patterns
        "no-empty-pattern": 2,

        // disallow comparisons to null without a type-checking operator
        "no-eq-null": 2,

        // disallow use of eval()
        "no-eval": 2,

        // disallow adding to native types
        "no-extend-native": 2,

        // disallow unnecessary function binding
        "no-extra-bind": 2,

        // disallow unnecessary labels
        "no-extra-label": 2,

        // disallow fallthrough of case statements
        "no-fallthrough": 2,

        // disallow the use of leading or trailing decimal points in numeric literals
        "no-floating-decimal": 2,

        // disallow the type conversions with shorter notations
        "no-implicit-coercion": 2,

        // disallow var and named functions in global scope
        "no-implicit-globals": 2,

        // disallow use of eval()-like methods
        "no-implied-eval": 2,

        // disallow this keywords outside of classes or class-like objects
        "no-invalid-this": 2,

        // disallow usage of __iterator__ property
        "no-iterator": 2,

        // disallow use of labeled statements
        "no-labels": 2,

        // disallow unnecessary nested blocks
        "no-lone-blocks": 2,

        // disallow creation of functions within loops
        "no-loop-func": 2,

        // disallow use of multiple spaces
        "no-multi-spaces": 2,

        // disallow use of multiline strings
        "no-multi-str": 2,

        // disallow reassignments of native objects
        "no-native-reassign": 2,

        // disallows creating new instances of String,Number, and Boolean
        "no-new-wrappers": 2,

        // disallow use of octal literals
        "no-octal": 2,

        // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-octal-escape": 2,

        // disallow reassignment of function parameters
        "no-param-reassign": [2, {
            "props": false
        }],

        // disallow usage of __proto__ property
        "no-proto": 2,

        // disallow declaring the same variable more than once
        "no-redeclare": 2,

        // disallow use of assignment in return statement
        "no-return-assign": 2,

        // disallow assignments where both sides are exactly the same
        "no-self-assign": 2,

        // disallow comparisons where both sides are exactly the same
        "no-self-compare": 2,

        // disallow use of the comma operator
        "no-sequences": 2,

        // restrict what can be thrown as an exception
        "no-throw-literal": 2,

        // disallow unmodified conditions of loops
        "no-unmodified-loop-condition": 2,

        // disallow usage of expressions in statement position
        "no-unused-expressions": 2,

        // disallow unused labels
        "no-unused-labels": 2,

        // disallow unnecessary .call() and .apply()
        "no-useless-call": 2,

        // disallow unnecessary concatenation of literals or template literals
        "no-useless-concat": 2,

        // disallow use of the void operator
        "no-void": 2,

        // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
        "no-warning-comments": [1, {
            "terms": ["todo"],
            "location": "start"
        }],

        // disallow use of the with statement
        "no-with": 2,

        // require use of the second argument for parseInt()
        "radix": 2,

        // require declaration of all vars at the top of their containing scope
        "vars-on-top": 2,

        // require immediate function invocation to be wrapped in parentheses
        "wrap-iife": 2,

        // require or disallow Yoda conditions
        "yoda": [2, "always"],


        /* Strict Mode */

        // require effective use of strict mode directives
        "strict": 2,

        // disallow the catch clause parameter name being the same as a variable in the outer scope
        "no-catch-shadow": 1,

        // disallow deletion of variables
        "no-delete-var": 2,

        // disallow labels that share a name with a variable
        "no-label-var": 2,

        // disallow declaration of variables already declared in the outer scope
        "no-shadow": 2,

        // disallow shadowing of names such as arguments
        "no-shadow-restricted-names": 2,

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undef": 2,

        // disallow use of undefined when initializing variables
        "no-undef-init": 2,

        // disallow declaration of variables that are not used in the code
        "no-unused-vars": 2,

        // disallow use of variables before they are defined
        "no-use-before-define": 2,


        /* Stylistic Issues */

        // enforce spacing inside array brackets
        "array-bracket-spacing": [2, "never"],

        // disallow or enforce spaces inside of single line blocks
        "block-spacing": [2, "always"],

        // enforce one true brace style
        "brace-style": [2, "1tbs", {
            "allowSingleLine": true
        }],

        // require camel case names
        "camelcase": [2, {
            "properties": "always"
        }],

        // enforce spacing before and after comma
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],

        // enforce one true comma style
        "comma-style": [2, "last"],

        // require or disallow padding inside computed properties
        "computed-property-spacing": [2, "never"],

        // enforce newline at the end of file, with no multiple empty lines
        "eol-last": 2,

        // specify tab or space width for your code
        "indent": [2, 4, {
            "SwitchCase": 1
        }],

        // specify whether double or single quotes should be used in JSX attributes
        "jsx-quotes": [2, "prefer-double"],

        // enforce spacing between keys and values in object literal properties
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],

        // enforce spacing before and after keywords
        "keyword-spacing": 2,

        // enforce empty lines around comments
        "lines-around-comment": [2, {
            "beforeBlockComment": true,
            "beforeLineComment": true,
            "allowBlockStart": true,
            "allowObjectStart": true,
            "allowArrayStart": true
        }],

        // specify the maximum depth that blocks can be nested
        "max-depth": [2, 6],

        // specify the maximum length of a line in your program
        //"max-len": [2, 120],

        // specify the maximum depth callbacks can be nested
        "max-nested-callbacks": [2, 5],

        // limits the number of parameters that can be used in the function declaration
        "max-params": [2, 6],

        // specify the maximum number of statement allowed in a function
        "max-statements": [2, {
            "maximum": 10
        }, {
            "ignoreTopLevelFunctions": true
        }],

        // require a capital letter for constructors
        "new-cap": 2,

        // disallow the omission of parentheses when invoking a constructor with no arguments
        "new-parens": 2,

        // require or disallow an empty newline after variable declarations
        "newline-after-var": [2, "always"],

        // require newline before return statement
        "newline-before-return": 2,

        // disallow use of the Array constructor
        "no-array-constructor": 2,

        // disallow use of bitwise operators
        "no-bitwise": 2,

        // disallow use of the continue statement
        "no-continue": 1,

        // disallow if as the only statement in an else block
        "no-lonely-if": 2,

        // disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": 2,

        // disallow multiple empty lines
        "no-multiple-empty-lines": [2, {
            "max": 2
        }],

        // disallow nested ternary expressions
        "no-nested-ternary": 2,

        // disallow the use of the Object constructor
        "no-new-object": 2,

        // disallow use of unary operators, ++ and --
        "no-plusplus": 2,

        // disallow space between function identifier and application
        "no-spaced-func": 2,

        // disallow trailing whitespace at the end of lines
        "no-trailing-spaces": 2,

        // disallow dangling underscores in identifiers
        "no-underscore-dangle": 2,

        // disallow the use of ternary operators when a simpler alternative exists
        "no-unneeded-ternary": 2,

        // disallow whitespace before properties
        "no-whitespace-before-property": 2,

        // require or disallow padding inside curly braces
        "object-curly-spacing": [2, "never"],

        // require or disallow one variable declaration per function
        "one-var": [2, "always"],

        // require or disallow an newline around variable declarations
        "one-var-declaration-per-line": [2, "always"],

        // enforce operators to be placed before or after line breaks
        "operator-linebreak": [2, "after"],

        // require quotes around object literal property names
        "quote-props": [2, "as-needed"],

        // specify whether backticks, double or single quotes should be used
        "quotes": [2, "single"],

        // require JSDoc comment
        "require-jsdoc": [2, {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true
            }
        }],

        // require or disallow use of semicolons instead of ASI
        "semi": [2, "always"],

        // enforce spacing before and after semicolons
        "semi-spacing": [2, {
            "before": false,
            "after": true
        }],

        // require or disallow a space before blocks
        "space-before-blocks": [2, "always"],

        // require or disallow a space before function opening parenthesis
        "space-before-function-paren": [2, {
            "anonymous": "always",
            "named": "never"
        }],

        // require or disallow spaces inside parentheses
        "space-in-parens": [2, "never"],

        // require spaces around operators
        "space-infix-ops": 2,

        // require or disallow spaces before/after unary operators
        "space-unary-ops": 2,

        // require or disallow a space immediately following the // or /* in a comment
        "spaced-comment": [2, "always"],


        /* ECMAScript 6 */


        // require braces in arrow function body
        "arrow-body-style": [2, "always"],

        // require parens in arrow function arguments
        "arrow-parens": [2, "always"],

        // require space before/after arrow function’s arrow
        "arrow-spacing": 2,

        // verify calls of super() in constructors
        "constructor-super": 2,

        // enforce spacing around the * in generator functions
        "generator-star-spacing": 2,

        // disallow modifying variables of class declarations
        "no-class-assign": 2,

        // disallow arrow functions where they could be confused with comparisons
        "no-confusing-arrow": 2,

        // disallow modifying variables that are declared using const
        "no-const-assign": 2,

        // disallow duplicate name in class members
        "no-dupe-class-members": 2,

        // disallow use of the new operator with the Symbol object
        "no-new-symbol": 2,

        // disallow use of this/super before calling super() in constructors
        "no-this-before-super": 2,

        // disallow unnecessary constructor
        "no-useless-constructor": 2,

        // require let or const instead of var
        "no-var": 2,

        // require method and property shorthand syntax for object literals
        "object-shorthand": [2, "always"],

        // suggest using arrow functions as callbacks
        "prefer-arrow-callback": 2,

        // suggest using the rest parameters instead of arguments
        "prefer-rest-params": 2,

        // suggest using the spread operator instead of .apply()
        "prefer-spread": 2,

        // suggest using template literals instead of strings concatenation
        "prefer-template": 2,

        // disallow generator functions that do not have yield
        "require-yield": 2,

        // enforce spacing around embedded expressions of template strings
        "template-curly-spacing": [2, "never"],

        // enforce spacing around the * in yield* expressions
        "yield-star-spacing": 2
    }
};