import React, { useRef, useState } from "react";
import HabitDataService from "@/services/habitService";

const iconList = [
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
  "#FFDAB9", // Peach Puff
];

const Uncontrolled: React.FC = () => {
  const habitIconRef = useRef<HTMLInputElement>(null);
  const habitNameRef = useRef<HTMLInputElement>(null);
  const habitDescriptionRef = useRef<HTMLInputElement>(null);
  const habitGoalRef = useRef<HTMLInputElement>(null);
  const habitGoalPeriodRef = useRef<HTMLInputElement>(null);
  const habitStartDateRef = useRef<HTMLInputElement>(null);
  const habitEndDateRef = useRef<HTMLInputElement>(null);

  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("#FF0000");
  const [habitType, setHabitType] = useState<string>("");

  const clearForm = () => {
    if (habitNameRef.current) habitNameRef.current.value = '';
    if (habitDescriptionRef.current) habitDescriptionRef.current.value = '';
    if (habitIconRef.current) habitIconRef.current.value = '';
    if (habitGoalRef.current) habitGoalRef.current.value = '';
    if (habitGoalPeriodRef.current) habitGoalPeriodRef.current.value = '';
    if (habitStartDateRef.current) habitStartDateRef.current.value = '';
    if (habitEndDateRef.current) habitEndDateRef.current.value = '';
    setSelectedIcon('');
    setSelectedColor('#FF0000');
    setHabitType('');
  };

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
  };

  const handleColourChange = (colour: string) => {
    setSelectedColor(colour);
  };

  const handleHabitTypeClick = (type: string) => {
    setHabitType((prevType) => prevType === type ? "" : type);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      habit_name: habitNameRef.current?.value || '',
      habit_desc: habitDescriptionRef.current?.value || '',
      icon: habitIconRef.current?.value || '',
      color: selectedColor,
      habit_type: habitGoalRef.current?.value || '',
      goal: habitGoalPeriodRef.current?.value || '',
      start_date: habitStartDateRef.current?.value || '',
      end_date: habitEndDateRef.current?.value || ''
    };

    HabitDataService.create(formData)
      .then(response => {
        console.log(response.data);
        window.alert("Form submitted successfully!");
        clearForm();
      })
      .catch(error => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <section id="form" className="bg-gray-20">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-20 p-20 text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">
        <div className="mb-4 text-center">
          <h2> Make A New Habit </h2>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <p>New Habit Name:</p>
            <input
              ref={habitNameRef}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <p>Description:</p>
            <input
              ref={habitDescriptionRef}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <p>Choose Icon:</p>
            <div className="flex flex-wrap gap-2">
              {iconList.map(({ icon, label }) => (
                <button
                  type='button'
                  key={label}
                  className={`w-10 h-10 rounded-full border border-gray-300 focus:outline focus:outline-4 focus:outline-grey-800 flex items-center justify-center ${selectedIcon === icon ? 'bg-secondary-500' : ''}`}
                  onClick={() => handleIconClick(icon)}
                >
                  <i className="not-italic text-center material-icons text-5xl">{icon}</i>
                </button>
              ))}
            </div>
            <div className="mb-4">
              <p>Selected Icon: <br />{selectedIcon ? selectedIcon : "None"}</p>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <p>Colour:</p>
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                {sampleColours.map((colour, index) => (
                  <button
                    type='button'
                    key={index}
                    className={`w-10 h-10 rounded-full border border-gray-300 focus:outline focus:outline-4 focus:outline-grey-800 flex items-center justify-center ${selectedColor === colour ? 'bg-secondary-500' : ''}`}
                    style={{ backgroundColor: colour }}
                    onClick={() => handleColourChange(colour)}
                  ></button>
                ))}
              </div>
              <p className="text-sm">Selected Colour:</p>
              {selectedColor && (
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: selectedColor }}></div>
              )}
            </div>
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <p>Habit Type:</p>
            <div className="flex">
              <input
                type="radio"
                id="habit-quit"
                name="habitType"
                value="quit"
                className="hidden peer"
                checked={habitType === "quit"}
                onChange={() => handleHabitTypeClick("quit")}
              />
              <label
                htmlFor="habit-quit"
                className={`text-lime-800 border-none m-1 rounded-md ${habitType === "quit" ? "bg-secondary-500 text-white px-5 py-1" : "text-lime-800 bg-gray-200 border-none m-1 rounded-md px-5 py-1"}`}
              >
                Quit
              </label>
              <input
                type="radio"
                id="habit-build"
                name="habitType"
                value="build"
                className="hidden peer"
                checked={habitType === "build"}
                onChange={() => handleHabitTypeClick("build")}
              />
              <label
                htmlFor="habit-build"
                className={`text-lime-800 border-none m-1 rounded-md ${habitType === "build" ? "bg-secondary-500 text-white px-5 py-1" : "text-lime-800 bg-gray-200 border-none m-1 rounded-md px-5 py-1"}`}
              >
                Build
              </label>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <p>Goal:</p>
            <input
              ref={habitGoalRef}
              type="text"
              placeholder="e.g., 100 steps "
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 text-lg pt-1">Start Date</label>
                  <input
                    type="date"
                    ref={habitStartDateRef}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-lg">End Date</label>
                  <input
                    type="date"
                    ref={habitEndDateRef}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
                  <label htmlFor="noEndDate" className="ml-2 text-lg">No End Date</label>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div className="mb-4 flex items-center">
          <button
            type="submit"
            className="text-white border-none rounded-md bg-secondary-500 px-5 py-1 hover:bg-primary-500"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={clearForm}
            className="text-lime-800 bg-gray-20 border-none m-1 rounded-md px-5 py-1"
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  );
                  }
  export default Uncontrolled;
