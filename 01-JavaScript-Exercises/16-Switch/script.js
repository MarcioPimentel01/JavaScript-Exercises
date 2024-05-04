let day; // The variable 'day' is declared but not initialized, so its value is undefined.

if (day === 1) { // Check if 'day' is equal to 1.
    console.log(`Today's Monday`);
} else if (day === 2) { // Check if 'day' is equal to 2.
    console.log(`Today's Tuesday`);
} else if (day === 3) { // Check if 'day' is equal to 3.
    console.log(`Today's Wednesday`);
} else if (day === 4) { // Check if 'day' is equal to 4.
    console.log(`Today's Thursday`);
} else if (day === 5) { // Check if 'day' is equal to 5.
    console.log(`Today's Friday`);
} else if (day === 6) { // Check if 'day' is equal to 6.
    console.log(`Today's Saturday`);
} else if (day === 7) { // Check if 'day' is equal to 7.
    console.log(`Today's Sunday`);
} else { // If 'day' doesn't match any of the conditions above, execute this block.
    console.log(`Invalid Day`);
}



switch (day) {
    case 1: // If our parameter "day" is equal to 1, we execute the code.
        console.log(`Today's Monday`);
        break;
    case 2:
        console.log(`Today's Tuesday`);
        break;
    case 3:
        console.log(`Today's Wednesday`); 
        break;
    case 4:
        console.log(`Today's Thursday`); 
        break;
    case 5:
        console.log(`Today's Friday`); 
        break;
    case 6:
        console.log(`Today's Saturday`); 
        break;
    case 7:
        console.log(`Today's Sunday`); 
        break;
    default:
        console.log(`Invalid Day`); // This will be executed if "day" doesn't match any of the cases above.
        break;
}

        