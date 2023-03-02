import React, { useState } from "react";

function Questionnaire() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");
  const [field6, setField6] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server or perform desired action
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Are you a freelancer selling services or a shop owner selling products?
        <select value={field1} onChange={(e) => setField1(e.target.value)}>
          <option value="freelancer">Freelancer</option>
          <option value="shop_owner">Shop Owner</option>
        </select>
      </label>
      <br />
      <label>
        In which of the following fields are you working?
        <select value={field2} onChange={(e) => setField2(e.target.value)}>
          <option value="health_doctor">Health doctor</option>
          <option value="beauty">Beauty</option>
          <option value="gym">Gym</option>
          <option value="architecture">Architecture</option>
          <option value="psychologist">Psychologist</option>
          <option value="boat_rentals">Boat rentals</option>
          <option value="hotel">Hotel</option>
        </select>
      </label>
      <br />
      <label>
        Do you want to find prospect clients in a specific area or remote?
        <select value={field3} onChange={(e) => setField3(e.target.value)}>
          <option value="specific_area">Specific Area</option>
          <option value="remote">Remote</option>
        </select>
      </label>
      <br />
      <label>
        Can you provide as with the specific location?
        <input
          type="text"
          value={field4}
          onChange={(e) => setField4(e.target.value)}
        />
      </label>
      <br />
      <label>
        Which is the maximum daily budget you can provide in order to find
        clients?
        <input
          type="text"
          value={field5}
          onChange={(e) => setField5(e.target.value)}
        />
      </label>
      <br />
      <label>
        Can you upload us a video or foto describing your service?
        <input
          type="file"
          value={field6}
          onChange={(e) => setField6(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Questionnaire;
