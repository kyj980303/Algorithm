function solution(phone_book) {
    let sortedStr = phone_book.sort() // 짧은 숫자가 긴 숫자에 있는지 확인하기 위해 정렬
    let answer = []
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 접두어인지 확인
        // substring(n,k) => n번째부터 k - 1번째 까지 자름
        if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {
          return false;
        }
    }
    return true
}