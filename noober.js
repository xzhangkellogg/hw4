window.addEventListener('DOMContentLoaded', async function () {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  window.json = json

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write the recipe (algorithm), then write the code
  // Create a variable for the rides data
  let rides = json
  
  // Create a variable for the HTML element we're going to add to
  let ridesElement = document.querySelector(`.rides`)

  // Loop through the rides data
  for (let i = 0; i < rides.length; i++) {
  
    // Create a variable to store each ride in memory
    let ride = rides[i]

    // Stores the passenger's dropoff address 
    let dropoffAddress = ride.dropoffLocation.address

    // Stores the passenger's dropoff city 
    let dropoffCity = ride.dropoffLocation.city

    // Stores the passenger's dropoff state
    let dropoffState = ride.dropoffLocation.state

    // Stores the passenger's dropoff zip code  
    let dropoffZip = ride.dropoffLocation.zip

    // Stores the number of passengers
    let numberOfPassengers = ride.numberOfPassengers

    // Stores the passenger's first name 
    let firstName = ride.passengerDetails.first

    // Stores the passenger's last name 
    let lastName = ride.passengerDetails.last

    // Stores the passenger's phone number 
    let phoneNumber = ride.passengerDetails.phoneNumber

    // Stores the passenger's pickup address 
    let pickupAddress = ride.pickupLocation.address

    // Stores the passenger's pickup city 
    let pickupCity = ride.pickupLocation.city

    // Stores the passenger's pickup state
    let pickupState = ride.pickupLocation.state

    // Stores the passenger's pickup zip code  
    let pickupZip = ride.pickupLocation.zip

    // Stores whether the passenger's requested Noober Purple  
    let purpleRequested = ride.purpleRequested

    // Stores the level of service based on whether the passenger requested Purple and the number of passengers 
    let levelOfService
    if (ride.purpleRequested) {
      levelOfService = 'Noober Purple'
    } else if (numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
    } else {
      levelOfService = `Noober X`
    }

    // Stores the desired border color based on level of service 
    let borderColor
    if (levelOfService == 'Noober Purple') {
      borderColor = 'purple'
    } else if (levelOfService == 'Noober XL') {
      borderColor = 'red'
    } else {
      borderColor = `blue`
    }

    // Insert HTML into the rides element, using the data from each ride
    ridesElement.insertAdjacentHTML('beforeend', `
     <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
     <i class="fas fa-car-side"></i>
     <span>${levelOfService}</span>
      </h1>

   <div class="border-4 border-${borderColor}-500 p-4 my-4 text-left">
     <div class="flex">
       <div class="w-1/2">
         <h2 class="text-2xl py-1">${firstName} ${lastName}</h2>
         <p class="font-bold text-gray-600">${phoneNumber}</p>
       </div>
       <div class="w-1/2 text-right">
         <span class="rounded-xl bg-gray-600 text-white p-2">
         ${numberOfPassengers} passengers
         </span>
       </div>
     </div>
     <div class="mt-4 flex">
       <div class="w-1/2">
         <div class="text-sm font-bold text-gray-600">PICKUP</div>
         <p>${pickupAddress}</p>
         <p>${pickupCity}, ${pickupState} ${pickupZip}</p>
       </div>
       <div class="w-1/2">
         <div class="text-sm font-bold text-gray-600">DROPOFF</div>
         <p>${dropoffAddress}</p>
         <p>${dropoffCity}, ${dropoffState} ${dropoffZip}</p>
       </div>
     </div>
   </div>
  `)
  }
})