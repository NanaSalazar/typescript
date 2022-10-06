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

