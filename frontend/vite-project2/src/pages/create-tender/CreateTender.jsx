import { useState } from "react";

export default function CreateTender() {
  const [tender, setTender] = useState({
    title: "",
    description: "",
    plan: "",
    boq: "",
    budget: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setTender({ ...tender, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/tenders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tender),
    });
    if (response.ok) alert("Tender Created Successfully!");
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Create Tender</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
        <input type="text" name="plan" placeholder="Plan URL" onChange={handleChange} required />
        <input type="text" name="boq" placeholder="BOQ URL" onChange={handleChange} required />
        <input type="number" name="budget" placeholder="Budget" onChange={handleChange} required />
        <input type="date" name="deadline" onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}