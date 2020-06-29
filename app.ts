import { prompt } from 'inquirer'
import { questions, questionsAdvanced } from './src/questions'
import { defaultOptions } from './src/default'
import { writeFile } from 'fs'

prompt(questions)
    .then((answers: any) =>
        answers.isDefault ? createConfig(defaultOptions) : advancedSetup()
    )
    .catch((error: Error) => console.error(error))

const advancedSetup = () => {
    prompt(questionsAdvanced)
        .then((answers: any) => createConfig(answers))
        .catch((error: Error) => console.error(error))
}

const createConfig = (options: Object) => {
    let content = `module.exports = ${JSON.stringify(options)}`
    writeFile('prettier.config.js', content, err =>
        err ? console.log(err) : console.log('Success!')
    )
}
