let a = [1, 2, 3],
    b = [4, 5],
    c = ["number", "digit"]

    // let d = a // tham chieu
    // let d = a.slice() // tham tri

    // let d = a.concat() // neu de trong tuong tu nhu slice
    // let d = a.concat(b, c)// gop cac phan tu cac mang voi nhau theo thu tu // let d = [].concat(a, b, c)
    // let d = [...a]// copy mang a 
    let d = [...a, ...b, ...c, ...[11, 12]] // toan tu ... goi la spread operator

    console.log(a)
    console.log(d)

    d[0] = -1

    console.log(a)
    console.log(d)

    function sum() {
        let res = 0
        for (let i in arguments) {
            res += arguments[i]
        }
        return res
    }

    console.log(sum(...[1,2,3,4,5,6,7,8]))