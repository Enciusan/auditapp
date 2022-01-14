function Filtre() {
return (
    <form class="bg-white shadow-md w-full max-w-lg rounded pb-8 mb-4 mt-6">
    <div class="flex flex-col place-items-center">
      <div class="text-2xl w-full text-center bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md text-white font-bold text-md">Filtre</div>
    </div>
    <div class="flex flex-wrap mx-6 mt-6 mb-6">
      <div class="mb-4">
        <label
          class="text-gray-700 text-sm font-bold mb-2 flex flex-col place-items-center"
          for="Name"
        >
          Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
        />
      </div>
      <div class="ml-6">
        <label
          class="text-gray-700 text-sm font-bold mb-2 flex flex-col place-items-center"
          for="Email"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border place-items-center rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
        />
      </div>
    </div>
    <div class="flex flex-col place-items-end ">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white shadow-lg font-bold py-2 px-4 mr-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Search
      </button>{" "}
    </div>
  </form>
)
};

export default Filtre;