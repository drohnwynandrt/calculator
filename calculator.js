class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
}

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete() {

    }

    appendNumber(number){

    }

    chooseOperation (operation) {

    }

    compute(){

    }
    
    updateDisplay() {

    }

}

const numberButtons = document.querySelectorAll ('[data-number]')
const operationButtons = document.querySelectorAll ('[data-operation]')
const equalsButton = document.querySelector ('data-equals]')
const deleteButton = document.querySelector ('data-delete]')
const allClearButton = document.querySelector ('data-allclear]')
const previousOperandTextElement = document.querySelector ('data-previousoperand]')
const currentOperandTextElement = document.querySelector ('data-currentoperand]')

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>
})