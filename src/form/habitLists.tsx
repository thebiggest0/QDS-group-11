// hardcorded
const habitLists = [
    {
      id: 1,
      Name: "Stop drinking",
      Description: "You bank account tells you to stop drinking",
      Progress: "1day / 365 days",
    },
    {
      id: 2,
      Name: "Wake up at 7am",
      Description: "Don't stay up too late",
      Progress: "2 days / 7 days",
    },
    {
      id: 3,
      Name: "Work out",
      Description: "Look at your belly...",
      Progress: "1 day / 7 days",
    },
    {
      id: 4,
      Name: "Drinking at least 3 cups of water",
      Description: "You'll turn into a wrinkly witch",
      Progress: "0 day / 100 days",
    },
    {
      id: 5,
      Name: "No social media before bed",
      Description: "Save your thumb",
      Progress: "8 days / 365 days",
    },
  ];
  
  export default function HabitList() {
    const listHabits = habitLists.map((habit) => (
      <div key={habit.id} className="p-20 bg-purple-100 w-10 md:w-1/2 mb-4">
        <h3 className="text-purple-300 font-bold mb-4">
          {habit.id}. {habit.Name}
        </h3>
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            alt=""
            className="rounded-t-lg object-cover w-10 h-64 md:h-auto"
          />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-purple-800">
              {habit.Name}
            </h2>
            <p className="text-purple-700 mb-2">{habit.Description}</p>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-500 underline text-sm"
            >
              Read More 👉
            </a>
          </div>
        </div>
      </div>
    ));
  
    return (
      <article>
        <h1 className="text-2xl font-bold mb-4">Habit Lists</h1>
        <div className="flex flex-wrap">{listHabits}</div>
      </article>
    );
  }
  