function prison(n, m, h, v) {
    // Write your code here
    let squaresInRow= []
    let squaresInColumn= []
    for (let i=0; i<n; i++){
      squaresInRow.push(1)
    }
    for (let j=0; j<m; j++){
      squaresInColumn.push(1)
    }

    let newsquaresInRow= []

    for (let k=0; k<n; k++){
      if (k != h) {
        newsquaresInRow.push(1)
      }
      else if (k ==h) {
        newsquaresInRow.push(2)
      }
    }

    let newsquaresInColumn=[]

    for (let l=0; l<n; l++){
      if (l != v) {
        newsquaresInColumn.push(1)
      }
      else {
        newsquaresInColumn.push(2)
      }
    }

    console.log(squaresInRow)
    console.log(squaresInColumn)
    console.log(newsquaresInRow)
    console.log(newsquaresInColumn)
}

prison(3,3,2,2)
