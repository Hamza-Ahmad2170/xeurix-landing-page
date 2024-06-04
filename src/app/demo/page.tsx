import React from "react";

export default function page() {
  return (
    <div className="container">
      <div className="w-full max-w-[500px] bg-white">
        <h1 className="mb-4 font-bold">Request demo</h1>
        <form>
          <label htmlFor="first_name before:content-['*']">First Name</label>
          <input
            type="text"
            className="w-full"
            name="first_name"
            id="first_name"
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            className="w-full"
            name="last_name"
            id="last_name"
          />
          <label htmlFor="work_email">Work Email</label>
          <input
            type="text"
            className="w-full"
            id="work_email"
            name="work_email"
          />
          <button type="submit">Request</button>
        </form>
      </div>
    </div>
  );
}
