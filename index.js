// class doesnt need the word function when decalring a method inside of it.
//class are constructors or blueprints, much cleaner than the traditional way of creating constructor using Functionb

class Product {
    constructor (productName, productPrice){
        this.productName = productName;
        this.productPrice = productPrice;
    }

    showProduct(){
        return `Product: ${this.productName}, Price: ${this.productPrice}`
    }
}


class StudentInfo{
    
    constructor(studentName, studentID, studentCourse){
        this.studentName = studentName;
        this.studentID = studentID;
        this.studentCourse = studentCourse;

        arrayOfStudents.push({
            studentName: studentName,
            studentID: studentID,
            studentCourse: studentCourse
        })
    }  

}


function showStudentsByID(id){
    const studentids = arrayOfStudents.find(stu => stu.id === id? stu : 'student does not exists');


    return studentids;
}

const products = [
    {name: "product", price: 100}
]
const addNewPrice = products.map((products) => {
    let oldPrice = products.price

    const newPrice = oldPrice + 100;

    return {
        name: products.name,
        price: newPrice
    }

})

//since class is a constructor, access it by creating an instance.
const arrayOfStudents = [];


const studentOne = new StudentInfo("Dinavel Binongo", 241544, "BSIT")
const studentTwo = new StudentInfo("Neko Batnag", 241644, "BSIT")

console.log(addNewPrice);

//const newStudentInfoStudent  = new addonInfoStudent("Dinavel", 1287, "BSIT", "test@gmail.com", 9126574018)

const productSampleO = new Product("Laptop", 1000.00)


console.log(productSampleO.showProduct());
console.log(showStudentsByID(241644))
