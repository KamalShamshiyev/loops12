for (let eded = 1; eded <=25; eded++) {
    console.log(eded)
}

const book = {
    bookname: "Harry Poter",
    genre: "Adventure",
    price: "20$"
}

for(key in book){
    console.log(book[key]);
}

const arr = ['Baku', 'Moscow', 'Ankara', 'Roma'] 

for (let i of arr) {
    console.log(i + " is the capital city.")
}