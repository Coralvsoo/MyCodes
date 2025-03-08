function createPerson(name ,age , salary , job){
    this.name = name ;
    this.age = age;
    this.salary = salary;
    this.job = job;

    this.salaryTax = function () {
        this.job === "Developer" ?console.log(`Developer's tax is ${Math.round((this.salary * 12) /100)} her name is ${this.name} and her age is ${this.age}`):
        this.job === "secretary"? console.log(`Secretary's tax is ${Math.round((this.salary *7) /100)} ${this.name} and her age is ${this.age}`):
            this.job === "designer"? console.log(`Designer's salary is ${Math.round((this.salary * 5) /100)} ${this.name} and her age is ${this.age}`):
                console.log(`There is no such job `)
    }


}

all = new createPerson("John",23,100000000,"Developer");
all.salaryTax()
