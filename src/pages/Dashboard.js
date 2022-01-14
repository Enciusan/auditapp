import React from "react";
import Filtre from "../components/Filtre";
// import withStyles from "@material-ui/core/styles/withStyles";
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div class="w-full flex flex-col place-items-center">
      <Filtre />
      <div class="text-2xl  w-1/2">
        <div class="p-4">
          <div class="bg-white p-4 rounded-md">
            <div>
              <div>
                <div>
                  <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                    <div>
                      <span>Name</span>
                    </div>
                    <div>
                      <span>Email</span>
                    </div>
                    <div>
                      <span>Role</span>
                    </div>
                    <div>
                      <span>Time</span>
                    </div>
                    <div>
                      <span>Edit</span>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-sm font-normal mt-4 space-x-4">
                      <div class="px-2 flex">
                        <span>John Deo</span>
                      </div>
                      <div>
                        <span>johndeo@gmail.com</span>
                      </div>
                      <div class="px-2">
                        <span>Admin</span>
                      </div>
                      <div class="px-2">
                        <span>28/12/2021</span>
                      </div>
                      <div class="px-2">
                        <select>
                          <option>Admin</option>
                          <option>User</option>
                        </select>
                      </div>
                    </div>
                    <div class="flex justify-between text-sm font-normal mt-4 space-x-4">
                      <div class="px-2">
                        <span>John Deo</span>
                      </div>
                      <div>
                        <span>johndeo@gmail.com</span>
                      </div>
                      <div class="px-2">
                        <span>Admin</span>
                      </div>
                      <div class="px-2">
                        <span>28/12/2021</span>
                      </div>
                      <div class="px-2">
                        <select>
                          <option>Admin</option>
                          <option>User</option>
                        </select>
                      </div>
                    </div>
                    <div class="flex justify-between text-sm font-normal mt-4 space-x-4">
                      <div class="px-2">
                        <span>John Deo</span>
                      </div>
                      <div>
                        <span>johndeo@gmail.com</span>
                      </div>
                      <div class="px-2">
                        <span>Admin</span>
                      </div>
                      <div class="px-2">
                        <span>28/12/2021</span>
                      </div>
                      <div class="px-2">
                        <select>
                          <option>Admin</option>
                          <option>User</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
