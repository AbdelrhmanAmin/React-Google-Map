import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";

const LocationSearchInput = ({ handleSelect }) => {
  const [address, setAddress] = React.useState("");
  const handleChange = (address) => {
    setAddress(address);
  };
  const handleOnSelect = (e) => {
    setAddress(e);
    handleSelect(e);
  };
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={(e) => handleOnSelect(e)}
      // searchOptions={{
      //   types: ['address']
      // }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div
          className="position-absolute w-100 px-2 pt-2"
          style={{ zIndex: 1 }}
        >
          <input
            {...getInputProps({
              placeholder: "Search Place name...",
              className: "w-100 py-2 bg-opacity-75 bg-light rounded-sm",
            })}
          />
          <div className="text-dark position-absolute left-0 w-100">
            {suggestions.map((suggestion, i) => {
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  key={i}
                  {...getSuggestionItemProps(suggestion, {
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
