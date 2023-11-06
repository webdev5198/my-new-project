import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () =>  {
      const priceoptions = [
        
          {
            "id": 1,
            "name": "Basic Membership",
            "price": "$30 per month",
            "features": [
              "Access to cardio and weightlifting equipment",
              "Unlimited gym access during business hours",
              "Locker room access",
              "Personalized fitness assessment",
              "Access to the sauna and steam room",
              "Monthly fitness workshops",
              "Discounts on protein supplements"
            ],
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": "$50 per month",
            "features": [
              "All features of the Basic Membership",
              "24/7 gym access",
              "Access to group fitness classes",
              "Personal trainer consultation once a month",
              "Access to the swimming pool",
              "Towel service",
              "Nutrition counseling"
            ],
          },
          {
            "id": 3,
            "name": "Family Membership",
            "price": "$80 per month",
            "features": [
              "All features of the Premium Membership for up to 4 family members",
              "Access to child care services",
              "Discounts on additional personal training sessions",
              "Family fitness classes",
              "Complimentary smoothie bar access",
              "Free guest passes for friends",
              "Access to outdoor sports facilities"
            ],
          },
        ];
        
      
      
      

    return (
        <div>
<h2 className="text-5xl">Best Prices in the town</h2>
{
    priceOptions.map(
        option => <PriceOption key = {option.id} options= {option}></PriceOption>
    )
}
        </div>
    );
};
export default PriceOptions;