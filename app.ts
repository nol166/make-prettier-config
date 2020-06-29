import { prompt } from 'inquirer'
import { questions, questionsAdvanced } from './src/questions'
import { defaultOptions } from './src/default'
import { writeFile } from 'fs'

prompt(questions)
    .then((answers: any) =>
        answers.isDefault ? createConfig(defaultOptions) : advancedSetup()
    )
    .catch(error => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be spawned in this env")
        } else {
            console.log(error)
        }
    })

const advancedSetup = () => {
    prompt(questionsAdvanced)
        .then(answers => {
            console.log('advancedSetup -> answers', answers)

            // take custom options and convert it into an object that the createConfig function can consume

            // call createConfig with resulting object
        })
        .catch(error => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be spawned in this env")
            } else {
                console.log(error)
            }
        })
}

const createConfig = (options: Object) => {
    let content = 'string'
    console.log('createConfig -> content', content)

    // writeFile('prettier.config.json', content, err => console.log(err))
}
