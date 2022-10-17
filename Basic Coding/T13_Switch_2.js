/* What will be the output of the following algorithm .

print the output if x=2;

int x = 2;

switch (x)

{

case 1:
cout << "Choice is 1"<<endl;
break;

case 2:
cout << "Choice is 2"<<endl;

case 3:
cout << "Choice is 3"<<endl;

case 4:
cout << "Choice is 4"<<endl;
break;

default:
cout << "Choice other than 1, 2, 3 and 4"<<endl;
break;

} */

function print_output() {
    /*Print the output 
        Note that lines are printed in new lines*/

    let x = 2;

    switch (x) {

        case 1:
            console.log("Choice is 1");
            break;

        case 2:
            console.log("Choice is 2");

        case 3:
            console.log("Choice is 3");

        case 4:
            console.log("Choice is 4");
            break;

        default:
            console.log("Choice other than 1, 2, 3 and 4");
            break;
    }

}