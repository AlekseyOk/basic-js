module.exports = function transform(arr) {
    let result = [];
  
    if (Array.isArray(arr)) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "--double-next") {

                if (i < arr.length - 1) {
                    result.push(arr[i + 1]);
                }

            } else if (arr[i] == "--double-prev") {

            if (i > 0) result.push(arr[i - 1]);

            } else if (arr[i] == "--discard-next") {

            if (i < arr.length - 1) {
                i++;
            }

            } else if (arr[i] == "--discard-prev") {

            if (i > 0) result.pop();

            } else {

            result.push(arr[i]);

            }
        }

    return result;
    
    } else {
      throw new Error();
    }
  };