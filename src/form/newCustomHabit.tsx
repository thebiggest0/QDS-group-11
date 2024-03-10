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
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
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
      <div className="mb-4">
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
        <label className="block mb-2">
          <p>Description:</p>
          <input
            ref={habitDescriptionRef}
            type="text"
            className="block w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <p>Choose Icon:</p>
          <div className="flex flex-wrap gap-2">
            {iconList.map(({ icon, label }) => (
              <button
                ref={habitIconRef}
                key={label}
                className={`p-2 bg-gray-200 rounded-full focus:outline-none ${
                  selectedIcon === icon ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleIconClick(icon)}
              >
                <i className="material-icons">{icon}</i>
              </button>
            ))}
          </div>
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <p>Colour:</p>
          <input
            ref={habitColourRef}
            type="color"
            value={selectedColour}
            className="hidden"
          />
          <div className="flex items-center space-x-2">
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
        <label className="block mb-2">
          <p>Habit Type:</p>
          <div>
            <button
              className={`mr-4 px-4 py-2 rounded focus:outline-none ${
                habitType === "quit"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => handleHabitTypeClick("quit")}
            >
              Quit : I don't want this habit
            </button>
            <button
              className={`px-4 py-2 rounded focus:outline-none ${
                habitType === "build"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => handleHabitTypeClick("build")}
            >
              Build : I want to start to have a new habit!
            </button>
          </div>
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          <p>Goal:</p>
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
};

export default Uncontrolled;
