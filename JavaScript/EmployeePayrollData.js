

        class EmployeePayrollData {

            constructor(...params) {
                this.name = params[0];
                this.profilePic = params[1];
                this.gender = params[2];
                this.department = params[3];
                this.salary = params[4];
                this.startDate = params[5];
                this.note = params[6];
            }
        
            get name() {
                return this.name;
            }
        
            set name(name) {
                let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
                if (nameRegex.test(name))
                    this.name = name;
                else
                    throw "Name is incorrect";
            }
        
            get profilePic() {
                return this.profilePic;
            }
        
            set profilePic(profilePic) {
                this.profilePic = profilePic;
            }
        
            get gender() {
                return this.gender;
            }
        
            set gender(gender) {
                this.gender = gender;
            }
        
            get department() {
                return this.department;
            }
        
            set department(department) {
                this.department = department;
            }
        
            get salary() {
                return this.salary;
            }
        
            set salary(salary) {
                this.salary = salary;
        
            }
        
            get startDate() {
                return this.startDate;
            }
        
            set startDate(startDate) {
                let future = new Date();
                future.setDate(future.getDate() + 30);
                if (startDate < new Date() || startDate < future)
                    this.startDate = startDate;
                else
                    throw "Start date is Incorrect";
            }
        
            get note() {
                return this.note;
            }
        
            set note(note) {
                this.note = note;
            }
        
        
            toString() {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
                return "Name = " + this.name + ", Profile Pic = " + this.profilePic + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = " + this.salary + ", Start Date = " + employeeDate + ", Notes = " + this.notes;
            }
        }

        