const a = {
    prop1 : 1
}
const b = {
    prop1 : 2
}
const c = {
    prop1 : 3
}
const d = {
    prop1 : 4
}

d.__proto__ = c
c.__proto__ = b
b.__proto__ = a

