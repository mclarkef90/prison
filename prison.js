function prison(n, m, h, v) {

    let x, y

    if (typeof(h) == "object"){
      x= h.length
    }
    else {
      x= 1
    }

    if (typeof(v) == "object"){
      y= v.length
    }
    else {
      y= 1
    }


    // Write your code here
    let hole= (x+1) * (y+1)
    console.log(hole)
}

prison(3,3,2,2)

// if you remove one h and one v
// always results in 4 so (h.legth+1) * (v.length+1)
// if you remove two h and two v
// then results in 9 so (h.legth+1) * (v.length+1)
