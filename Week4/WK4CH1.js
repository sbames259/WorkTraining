const assets = [
    {
        assetId: 'Truck-001',
        Entity: 'Tires n Stuff',
        totalWorkOrders: 4
    },
    {
       assetId: 'Truck-002',
       Entity: 'Tires n Stuff',
       totalWorkOrders: 44
   },
   {
       assetId: 'Truck-003',
       Entity: 'Tires n Stuff',
       totalWorkOrders: 18
   },
   {
       assetId: 'Truck-004',
       Entity: 'Tires n Stuff',
       totalWorkOrders: 125
   },
   {
       assetId: 'Truck-005',
       Entity: 'Tires n Stuff',
       totalWorkOrders: 0
   },
   {
       assetId: 'Truck-006',
       Entity: 'Tires n Stuff',
       totalWorkOrders: 5
   },
   {
       assetId: 'Van-010',
       Entity: 'Mars or Bust',
       totalWorkOrders: 43
   },
   {
       assetId: 'Ship-0090039401920',
       Entity: 'Mars or Bust',
       totalWorkOrders: 2
   }
]




const sortByNum = assets.sort(function(a, b) {
    return a.totalWorkOrders - b.totalWorkOrders;
});

console.log(sortByNum);


function chopAndCount(assetsArray) {
    const fifteenOrMore = assetsArray.filter(function(e) {
        return e.totalWorkOrders > 15;
    })

    console.log(fifteenOrMore)
    console.log(fifteenOrMore.length)
}

console.log(chopAndCount(assets))