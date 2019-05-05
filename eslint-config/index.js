module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": ["airbnb", "prettier", "prettier/react"],
	"globals": {},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"prettier",
		"react",
		"react-hooks"
	],
	"rules": {
		"no-irregular-whitespace": "warn",
		"no-trailing-spaces": "warn",
		"arrow-parens": ["error", "always"],
		"react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
		],
		"prefer-spread": "error",
		"prefer-template": "error",
		"no-console": "warn",
		"prettier/prettier": "error",
		"react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "eqeqeq": ["error", "smart"],
    "no-undefined": "error",
    "no-use-before-define": "error",
    "array-bracket-spacing": "error",
    "capitalized-comments": "error",
    "comma-dangle": ["error", {
      "arrays": "always",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "eol-last": ["error", "always"]
	},
}
