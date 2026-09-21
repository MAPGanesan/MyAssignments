/* TEST CASE :
1. Create a type alias called PaymentMethod that allows only the following values: "UPI"
"CreditCard" "PayPal"
2. Create a function named makePayment that: Accepts a parameter of type PaymentMethod.
Prints the selected payment method to the console.
3. Call the function using the following arguments: "UPI" "CreditCard" */

type paymentMethod = "UPI" | "CreditCard" | "PayPal";

function makePayment(payMode: paymentMethod) {
    if (payMode === 'UPI') {
        console.log(`Payment is done with ${payMode}`);
    } else if (payMode === 'CreditCard') {
        console.log(`Payment is done with ${payMode}`);
    } /* else if (payMode === 'PayPal') {
        console.log(`Payment is done with ${payMode}`);
    } */ else {
        console.log("Payment method is invalid");
    }
}

makePayment('CreditCard');
makePayment('UPI');
makePayment('PayPal')