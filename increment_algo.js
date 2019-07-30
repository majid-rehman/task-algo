function incrementCheck (K, M, A) {
  var c = leader(A)

  if (K <= M) {
    for (var i = 0; i < A.length; i++) {
      if (A[i] >= M) {
        // no change
      } else {
        if (A[i] <= K || A[i] <= c) {
          A[i] += 1
        } else {
          // no change
        }
      }
    }
  }
  return A
}

function leader (A) {
  let temp = A.slice()
  // create two arrays a[] for number values , b[] for there counts occurances
  var a = []; var b = []; var prev // temp data

  // sort ascending of input array
  temp.sort()
  for (var i = 0; i < temp.length; i++) {
    if (temp[i] !== prev) {
      a.push(temp[i])
      b.push(1)
    } else {
      b[b.length - 1]++
    }
    prev = temp[i]
  }
  let c = 0
  let ind = 0
  for (i = 0; i < b.length; i++) {
    if (b[i] >= c) {
      c = b[i]
      ind = i
    }
  }
  return a[ind]
  // return [a, b]
}

module.exports = incrementCheck
