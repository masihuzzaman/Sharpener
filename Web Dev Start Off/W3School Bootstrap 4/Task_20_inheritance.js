/* Task details

Watch this video to code the following deliverables as per the timelines given below. DONT watch everything in one shot !!!

https://www.youtube.com/watch?v=RBLIm5LMrmc

Deliverables

1)Watch the remaining video from 4:30 th minute to understand inheritance :  Code along with the youtuber to understand how inheritance works.

2)[Watch this video https://www.youtube.com/watch?v=irrxnH-nkqg to understand the inbuilt Date Class in javascript] Add a new state called membershipactivetilldate : date. Whenever a new member is created keep his membershipactivetilldate fixed to 3rd of March 2023.

3) Add a new function called renew Membership which based on membership type (MONTHLYPACKAGE or YEARLYPACKAGE) increase the membershipactivetilldate by 1 month or 1 year respectively.

Example 1
Input
pyash,yash@gmail.com,password123,MONTHLYPACKAGE

Output
pyash is subscribed to MONTHLYPACKAGE uptill Mon Apr 03 2023

Example 2
Input 

vaibhav,vaibhav@gmail.com,password123,YEARLYPACKAGE

Output
vaibhav is subscribed to YEARLYPACKAGE uptill Sun Mar 03 2024

 */


class User {
    static count = 0;
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        User.count++
    }
    printNumberOfUsers() {
        console.log("currentnumberofusers =", User.count)
    }


}

class Member extends User {
    constructor(username, email, password) {

        super(username, email, password);     // complete the super function only. Do not make any other changes

        this.membershipactivetilldate = new Date(2023, 2, 3)//assume user has joined ur platform on 3rd March
        this.package = '';
    }

    //Based on the package bought, increase the membershipactivetilldate
    //Monthly membership increases the va1idity by 1 month
    //Yearly membership increases the va1idity by 1 year
    purchaseMembership(membershippackagename) {

        //   Complete this function
        this.package = membershippackagename;
        if (membershippackagename === "MONTHLYPACKAGE") {
            this.membershipactivetilldate.setMonth(
                this.membershipactivetilldate.getMonth() + 1
            );
        } else if (membershippackagename === "YEARLYPACKAGE") {
            this.membershipactivetilldate.setFullYear(
                this.membershipactivetilldate.getFullYear() + 1
            );

        }
    }

    subscriptionActiveTill() {
        console.log(
            this.username +
            " is subscribed to " +
            this.package +
            " uptill " +
            this.membershipactivetilldate.toDateString()
        );
    }

}

function createNewStudents(username, email, password, membershippackagename) {
    const mike = new Member(username, email, password);
    mike.purchaseMembership(membershippackagename);
    mike.subscriptionActiveTill();

}