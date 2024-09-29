import React, { useState } from "react";
import "../../Assets/property-listing.css";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    description: "A beautiful villa with sea view.",
    price: "$300,000",
    location: "California",
    bedrooms: 3,
    amenities: ["Pool", "Gym"],
    image: "https://via.placeholder.com/200", // Add an image link here
  },
  {
    id: 2,
    title: "City Apartment",
    description: "Modern apartment in the heart of the city.",
    price: "$150,000",
    location: "New York",
    bedrooms: 2,
    amenities: ["Gym", "Parking"],
    image: "https://via.placeholder.com/200", // Add an image link here
  },
  {
    id: 3,
    title: "Cozy Cottage",
    description: "A small cottage in the countryside.",
    price: "$90,000",
    location: "Texas",
    bedrooms: 2,
    amenities: ["Garden"],
    image: "https://via.placeholder.com/200", // Add an image link here
  },
  // Add more properties as needed
];

function App() {
  const [locationFilter, setLocationFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState("");
  const [bedroomFilter, setBedroomFilter] = useState("");
  const [amenityFilter, setAmenityFilter] = useState("");

  const filteredProperties = properties.filter((property) => {
    return (
      (!locationFilter || property.location === locationFilter) &&
      (!priceRangeFilter ||
        (priceRangeFilter === "low" && parseInt(property.price.replace(/\D/g, "")) <= 100000) ||
        (priceRangeFilter === "mid" &&
          parseInt(property.price.replace(/\D/g, "")) > 100000 &&
          parseInt(property.price.replace(/\D/g, "")) <= 200000) ||
        (priceRangeFilter === "high" && parseInt(property.price.replace(/\D/g, "")) > 200000)) &&
      (!bedroomFilter || property.bedrooms === parseInt(bedroomFilter)) &&
      (!amenityFilter || property.amenities.includes(amenityFilter))
    );
  });

  return (
    <div className="container">
      <div className="filters">
        <h2>Filters</h2>

        <label>
          Location:
          <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
            <option value="">All</option>
            <option value="California">California</option>
            <option value="New York">New York</option>
            <option value="Texas">Texas</option>
          </select>
        </label>

        <label>
          Price Range:
          <select value={priceRangeFilter} onChange={(e) => setPriceRangeFilter(e.target.value)}>
            <option value="">All</option>
            <option value="low">Below $100,000</option>
            <option value="mid">$100,000 - $200,000</option>
            <option value="high">Above $200,000</option>
          </select>
        </label>

        <label>
          Bedrooms:
          <select value={bedroomFilter} onChange={(e) => setBedroomFilter(e.target.value)}>
            <option value="">All</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
          </select>
        </label>

        <label>
          Amenities:
          <select value={amenityFilter} onChange={(e) => setAmenityFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Pool">Pool</option>
            <option value="Gym">Gym</option>
            <option value="Parking">Parking</option>
            <option value="Garden">Garden</option>
          </select>
        </label>
      </div>

      <div className="property-list">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>{property.price}</p>
            <p>Location: {property.location}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Amenities: {property.amenities.join(", ")}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
