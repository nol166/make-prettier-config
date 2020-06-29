export let questions: Array<Object> = [
    {
        type: 'confirm',
        name: 'isDefault',
        default: true,
        message: 'Would you like to go with the default config?',
    },
]

export let questionsAdvanced: Array<Object> = [
    {
        type: 'confirm',
        name: 'trailingComma',
        default: 'es5',
        message: 'Trailing commas',
    },
    {
        type: 'list',
        name: 'trailingComma',
        message: 'Trailing commas',
        default: 'es5',
        choices: ['es5', 'none', 'all'],
        filter: (val: string) => val.toLowerCase(),
    },
    {
        type: 'input',
        name: 'tabWidth',
        default: 4,
        message: 'Enter tab width',
        filter: (val: any) => parseInt(val),
    },
    {
        type: 'confirm',
        name: 'semi',
        default: false,
        message: 'Require semicolons',
    },
    {
        type: 'confirm',
        name: 'singleQuotes',
        default: true,
        message: 'Single quotes',
    },
    {
        type: 'list',
        name: 'arrowParens',
        default: false,
        message: 'Arrow Function Parentheses',
        choices: ['avoid', 'always'],
        filter: (val: string) => val.toLowerCase(),
    },
]
