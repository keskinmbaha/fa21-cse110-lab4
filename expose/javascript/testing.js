function sumValues(prices, discount){
    const discounted = [];
    const length = prices.length;
    // const finalPrice = 0;

    for(let i = 0; i < length; i++){
        const discountedPrice = prices[i] * [1 - discount];
        // finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }

    console.log(discounted);
}

sumValues([100, 200, 300], 0.5);