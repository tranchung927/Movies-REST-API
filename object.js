let old_movie = {title: "Old movie"}
let new_movie = old_movie // tham chieu

console.log(old_movie)
console.log(new_movie)

old_movie.title = "New movie"

console.log(old_movie)
console.log(new_movie) // Tham chieu nen new_movie thay doi theo

let other_movie = Object.assign({}, old_movie)// Tham tri voi nhung thong so nao va tu dau ({} bieu thi copy toan bo)
old_movie.title = "Old movie"

console.log(old_movie)
console.log(other_movie)