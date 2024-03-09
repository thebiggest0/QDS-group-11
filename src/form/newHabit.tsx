import { useRef } from "react";

export default function Uncontrolled() {
  const habitNameRef = useRef(null);
  const habitDescriptionRef = useRef(null);
  const habitTypeRef = useRef(null);
  const habitIconRef = useRef(null);
  const habitColourRef = useRef(null);
  const habitGoalRef = useRef(null);
  const habitGoalPeriodRef = useRef(null);
  const habitStartDateRef = useRef<HTMLInputElement>(null);
  const habitEndDateRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Habit name:", habitNameRef.current.value);
    console.log("Habit description:", habitDescriptionRef.current.value);
    console.log("Habit icon:", habitIconRef.current.value);
    console.log("Habit colour:", habitColourRef.current.value);
    console.log("Habit goal:", habitGoalRef.current.value);
    console.log("Habit goal period:", habitGoalPeriodRef.current.value);
    console.log("Habit term starts :", habitStartDateRef.current.value);
    console.log("Habit term ends :", habitEndDateRef.current.value);

    console.log("Submitted!");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block mb-2">
          <p>Name: </p>
          <input
            ref={habitNameRef}
            type="text"
            className="block w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <p>Description: </p>
          <input
            ref={habitDescriptionRef}
            type="text"
            className="block w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <p>Icon & Colour: </p>
          <input
            ref={habitIconRef}
            type="text"
            className="block w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
          />{" "}
          <br></br>
          <select
            ref={habitColourRef}
            className="block w-full mt-2 px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <p>Habit Type:</p>
          <div>
            <input
              type="radio"
              name="habitType"
              value="quit"
              ref={habitTypeRef}
              className="mr-2"
            />
            <label className="mr-4">Quit</label>
            <br></br>
            <input
              type="radio"
              name="habitType"
              value="build"
              ref={habitTypeRef}
              className="mr-2"
            />
            <label>Build</label>
          </div>
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <p>Goal: </p>
          <input
            ref={habitGoalRef}
            type="text"
            className="block w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
          />{" "}
          per
          <input
            type="radio"
            name="goalPeriod"
            value="day"
            ref={habitGoalPeriodRef}
            className="mx-2"
          />
          <label className="mr-4">day</label>
          <input
            type="radio"
            name="goalPeriod"
            value="week"
            ref={habitGoalPeriodRef}
            className="mx-2"
          />
          <label className="mr-4">week</label>
          <input
            type="radio"
            name="goalPeriod"
            value="month"
            ref={habitGoalPeriodRef}
            className="mx-2"
          />
          <label>month</label>
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <p>Habit Term:</p>
          <div>
            <label className="block mb-1">Start Date:</label>
            <input
              type="date"
              ref={habitStartDateRef}
              className="block w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1">End Date:</label>
            <input
              type="date"
              ref={habitEndDateRef}
              className="block w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </label>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-green rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
