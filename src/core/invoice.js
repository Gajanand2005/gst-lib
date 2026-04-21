function generateInvoice(items, {taxRate = 18, discount = 0} = {}) {
    if(Array.isArray(items)&& items.length === 0){
        throw new Error("Items array cannot be empty");
    }
    let subtotal = 0;

    items.forEach((items)=>{
        subtotal += items.price * items.qty
    })

    const discountAmount = (subtotal * discount)/100
    const afterDiscount = subtotal - discountAmount
    const gst = (afterDiscount * taxRate)/100;

    return {
         items,
         subtotal,
         discount,
         discountAmount,
         cgst: gst/2,
         sgst: gst/2,
            totalAmount: afterDiscount + gst
    }


}

module.exports = { generateInvoice };