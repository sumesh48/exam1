//[id , brand , model , type , pricePerDay, available]
carBooking =[
    [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
    [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
    [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
    [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
    [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];
//1)print all the car brands
console.log('all the car brands');
carBooking.forEach(car=>{
    console.log(car[1]);
    
} );

console.log('------------------------');

//2)print total number of cars avilable

console.log('total number of cars avilable');
total=carBooking.map(item=>item[5]).reduce ((num1,num2)=>num1+num2)
console.log(total);
console.log("---------------------------------------");

//3)print sedan car details
console.log('print sedan car details');
carBooking.filter(item=>item[3]=="Sedan").forEach(car=>console.log(car))

console.log("---------------------------------------");


//4)print cars with price perday greater than 60
console.log('print cars with price perday greater than 60');
carBooking.filter(item=>item[4]>60).forEach(car=>console.log(car))

console.log("---------------------------------------");

//5)print details of 'jeep wrangler'

console.log('details of jeep wrangler');
console.log(carBooking.find(item=>item[1]=='Jeep wrangler'));
console.log("---------------------------------------");
//6)sort cars based on the descending order of the price per day
console.log('cars based on the descending order of the price per day');
carBooking.sort((a,b)=>b[4]-a[4]).forEach(item => console.log(item[1]))
console.log("---------------------------------------");

//7)sort cars based on ascending order of available cars
console.log('cars based on ascending order of available cars');
carBooking.sort((a,b)=>a[5]-b[5]).forEach(item => console.log(item[1]))
console.log("---------------------------------------");

//8)find the cars with the most availability
console.log('cars with the most availability');
most=carBooking.reduce((car1,car2)=>car1[5]>car2[5]?car1:car2);
console.log(most[1]);
console.log("---------------------------------------");

//9)calaculate the revenue if all the cars are rented for day
console.log('the revenue if all the cars are rented for day');
revenue=carBooking.map(item=>item[4]).reduce((car1,car2)=>car1+car2)
console.log(revenue);
console.log("---------------------------------------");

//10)count the number of sedan cars
console.log('the number of sedan cars');
carBooking.filter(item=>item[3]=="Sedan").forEach(car =>console.log(car))
console.log("---------------------------------------");

//11)print all the unique car brands
console.log('all the unique car brands');
carBooking.forEach(car => {
    console.log(car[1]);
});
console.log("---------------------------------------")
//12)find the total number of available cars for all types
console.log('the total number of available cars for all types');
cars=carBooking.map(item=>item[5]).reduce((car1,car2)=>car1+car2)
console.log(cars);
console.log("---------------------------------------");

//13)find the cars with least avilability
console.log('cars with least avilability');
console.log(carBooking.sort((a,b)=>a[5]-b[5]));
console.log("---------------------------------------");

//14)check if there is any cars with a price per day excatly 55
console.log('is any cars with a price per day excatly 55');
x=carBooking.some(item=>item[4]=55)
console.log(x?'yes':'no');
console.log("---------------------------------------");