// if you have a list of itens (a list of car names for example), storing the cars in a single variable could looks like this.

const students = []

students.push('Marcio')
students.push('Dirceu')
students.push('Vanderli')
students.push('Jose')
students.push('Monica')
students.push('Diego')
students.push('Laura')


console.log(students)

console.log(`Welcome to class ${students[2]}`)

students[0] = `oicram`
console.log(students)



if (`oicram` === students[0]){
    console.log(`Welcome back to class ${students[0]}`)
}