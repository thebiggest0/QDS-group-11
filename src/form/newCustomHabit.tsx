import React, { useRef, useState } from "react";

const iconList: { icon: string; label: string }[] = [
  { icon: "🏋️", label: "WorkOut" },
  { icon: "🏃‍♀️", label: "Running" },
  { icon: "🚰", label: "Water" },
  { icon: "📚", label: "Study" },
  { icon: "🎶", label: "Music" },
  { icon: "🎨", label: "Paint" },
  { icon: "📵", label: "NoPhone" },
  { icon: "🚭", label: "NoSmoke" },
];

const sampleColours = [
  "#FFB6C1", // Pastel Pink
  "#FFD700", // Pastel Yellow
  "#87CEEB", // Pastel Blue
  "#98FB98", // Pastel Green
  "#FFA07A", // Pastel Salmon
  "#FFDAB9"  // Peach Puff
];

const Uncontrolled: React.FC = () => {
  const habitIconRef = useRef<HTMLInputElement>(null);
  const habitNameRef = useRef<HTMLInputElement>(null);
  const habitDescriptionRef = useRef<HTMLInputElement>(null);
  const habitColourRef = useRef<HTMLInputElement>(null);
  const habitGoalRef = useRef<HTMLInputElement>(null);
  const habitGoalPeriodRef = useRef<HTMLInputElement>(null);
  const habitStartDateRef = useRef<HTMLInputElement>(null);
  const habitEndDateRef = useRef<HTMLInputElement>(null);
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [selectedColour, setSelectedColour] = useState<string>("#FF0000");
  const [habitType, setHabitType] = useState<string>("");

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
    if (habitIconRef.current) {
      habitIconRef.current.value = icon;
    }
  };

  const handleColourChange = (colour: string) => {
    setSelectedColour(colour);
    if (habitColourRef.current) {
      habitColourRef.current.value = colour;
    }
  };

  function handleHabitTypeClick(type: string) {
    setHabitType(type);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Habit name:", habitNameRef.current?.value);
    console.log("Habit description:", habitDescriptionRef.current?.value);
    console.log("Habit icon:", habitIconRef.current?.value);
    console.log("Habit colour:", selectedColour);
    console.log("Habit goal:", habitGoalRef.current?.value);
    console.log("Habit goal period:", habitGoalPeriodRef.current?.value);
    console.log("Habit term starts :", habitStartDateRef.current?.value);
    console.log("Habit term ends :", habitEndDateRef.current?.value);

    console.log("Submitted!");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4 text-center">
        <h2> Make A New Habit </h2>
        <label className="block mb-2">
          <p>New Habit Name:</p>
          <input
            ref={habitNameRef}
            type="text"
            className="block w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-center">
          <p>Description:</p>
          <input
            ref={habitDescriptionRef}
            type="text"
            className="block w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </label>
      </div>

      <div className="mb-4">
  <label className="block mb-2 text-center">
    <p>Choose Icon:</p>
    <div className="flex flex-wrap gap-2 justify-center text-center">
      {iconList.map(({ icon, label }) => (
        <button
          ref={habitIconRef}
          key={label}
          className={`p-2 rounded-full focus:outline-none ${
            selectedIcon === icon ? "text-4xl bg-green-500 text-white" : ""
          }`}
          onClick={() => handleIconClick(icon)}
        >
          <i className="material-icons text-2xl">{icon}</i> {/* Adjust text size here */}
        </button>
      ))}
    </div>
  </label>
</div>


      <div className="mb-4 ">
        <label className="block mb-2 text-center">
          <p>Colour:</p>
          <input
            ref={habitColourRef}
            type="color"
            value={selectedColour}
            className="hidden"
          />
          <div className="flex items-center space-x-2 justify-center">
            {sampleColours.map((colour, index) => (
              <button
                key={index}
                className="w-10 h-10 rounded-full border border-gray-300 focus:outline-none flex items-center justify-center"
                style={{ backgroundColor: colour }}
                onClick={() => handleColourChange(colour)}
              >
                +
              </button>
            ))}
          </div>
        </label>
      </div>

      <div className="mb-4">
  <label className="block mb-2 text-center">
    <p>Habit Type:</p>
    <div className="flex justify-center">
      <button
        className={`mr-4 px-4 py-2 rounded rounded-full focus:outline-none ${
          habitType === "quit"
            ? "bg-green-500 text-white"
            : "bg-white-300 text-gray-700"
        }`}
        onClick={() => handleHabitTypeClick("quit")}
      >
        Quit
      </button>
      <button
        className={`px-4 py-2 rounded rounded-full focus:outline-none ${
          habitType === "build"
            ? "bg-green-500 text-white"
            : "bg-white-300 text-gray-700"
        }`}
        onClick={() => handleHabitTypeClick("build")}
      >
        Build
      </button>
    </div>
  </label>
</div>


<div className="mb-4">
  <label className="block mb-2 text-center">
    <p>Goal:</p>
    <input
      ref={habitGoalRef}
      type="text"
      placeholder="e.g., 100 steps"
      className="block w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
    />{" "}
    per
    <br />
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
  <label className="block mb-2 text-center">
    <p>Habit Term:</p>
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-4 mb-4">
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
      </div>
      <div className="flex justify-center">
        <input
          type="checkbox"
          id="noEndDate"
          onChange={(e) => {
            if (e.target.checked) {
              habitEndDateRef.current.disabled = true;
              habitEndDateRef.current.value = '';
            } else {
              habitEndDateRef.current.disabled = false;
            }
          }}
        />
        <label htmlFor="noEndDate" className="ml-2">No End Date</label>
      </div>
    </div>
  </label>
</div>
<button
  type="submit"
  className="px-4 py-2 bg-white-500 mr-4 px-4 py-2 rounded rounded-full mx-auto hover:bg-green-600"
>
  Submit
</button>

    </form>
  );
};

export default Uncontrolled;
