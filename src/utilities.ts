//Partial

type Square = {
    x: number,
    y: number,
    width: number,
    height: number
}

type UpdateSquare = (a: Square, b: Partial<Square>) => Square

const square: Square = {
    x: 10,
    y: 20,
    width: 100,
    height: 200

}

const square2: Partial<Square> = { x: 30}

const updateSquare: UpdateSquare = (square, square2) => {
    return Object.assign({}, square, square2)
}

const square3 = updateSquare(square, { x: 30})
console.log(square)
console.log(square2)
console.log(square3)

type UserAdmin = {
    name: string,
    type: string
    id: number,
    codAdmin: number
}

type newAdmin = Partial<UserAdmin>

const userAdminOne: UserAdmin = {
    name: 'José',
    type: 'Admin',
    id: 1,
    codAdmin: 12
}

const userSimpleOne: newAdmin = {codAdmin: 13}

console.log(userAdminOne)
console.log(userSimpleOne)

// Pick, Omit, Extract, Exclude

type Position = Pick<Square, 'x' | 'y'>
const position: Position = {
    x: 20,
    y: 40
}
console.log(position)

type Users = {
    name: string,
    squad: string,
    codUser: number,
    typeAdmin: boolean
}

type UsersAdmin = Pick<Users, 'name' | 'codUser'>

const user1: Users = {
    name: 'João',
    squad: 'A',
    codUser: 1010,
    typeAdmin: false
}

const user2: UsersAdmin = {
    name: 'Maria',
    codUser: 1212
}

console.log(user1)
console.log(user2)

type Size = Omit<Square, 'x' | 'y'>

const squareTwo: Size = {
    width: 150,
    height: 150
}
console.log(squareTwo)

type Color = 'Red' | 'Blue' | 'Yellow' | 'Purple' | 'Pink' |'Orange' | 'Green'
type HappyColor = Exclude<Color, 'Blue' | 'Purple' |'Green'>
type SadColor = Extract<Color, HappyColor>


// Conditional types

type MyString = string
type MyType = MyString extends string | number ? string : boolean

function myFunction<T>(param: T extends string ? string : number) {

}

myFunction<string>('dois')

function myFunction2<T>(param: T) {
    return function(param2: T extends number ? number : MyString) {

    }
}

const minhaFuncao2 = myFunction2('string')

type NumberOrNever<T> = T extends number ? number : never
const teste: NumberOrNever<number> = 10


// mapped types

let OnePropertyOfSquare: keyof Square

type Props = 'x' | 'y' | 'z'
type MappedFromProps = {
    [P in Props] : number
}

//restringindo o tipo genérico
type MappedFromProps2<T extends string | number | symbol> = {
    [P in T]: P
}

type MyMappedTypes = MappedFromProps2<Props>
type MappedFromProps3<T> = {
    [P in keyof T]: number | string
}
type Test = MappedFromProps3<{a: 'a', b: 3}>

// lookup types - get a type of property of other type

type BankAccount = {
    id: number,
    name: string,
    count: {
        agency: number,
        code: number,
        digit: number
    }
}
type Id = BankAccount['id']
type Digit = BankAccount['count']['digit']
type Count = BankAccount['count']

// typeof

const myCount : BankAccount = {
    id: 2,
    name: 'Solange',
    count: {
        agency: 12,
        code: 1313,
        digit: 5
    }
}

type TypeOfMyCount = typeof myCount
type TypeOfMyCountName = typeof myCount.name