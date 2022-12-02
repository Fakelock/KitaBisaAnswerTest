function printDuplicate(arr1, arr2) {
  const mapNumber = new Map()

  for (var i = 0; i < arr1.length; i++) {
    const currentValue = mapNumber.get(arr1[i])
    if (currentValue == null) {
      mapNumber.set(arr1[i], 1)
    } else {
      mapNumber.set(arr1[i], currentValue+1)
    }
  }

  for (var i = 0; i < arr2.length; i++) {
    const currentValue = mapNumber.get(arr2[i])
    if (currentValue > 0) {
      console.log(arr2[i])
      mapNumber.set(arr2[i], currentValue-1)
    } 
  }
}

const number1 = [1,2,3,4]
const number2 = [4,3,2,1,4,5,6]

printDuplicate(number1, number2)