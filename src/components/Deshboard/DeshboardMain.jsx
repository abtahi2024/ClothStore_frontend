import {
  ArrowRight,
  BarChart,
  Bell,
  ChevronRight,
  Copy,
  CreditCard,
  DollarSign,
  FileText,
  LayoutDashboard,
  Link,
  ListOrdered,
  LogOut,
  Menu,
  MessageSquare,
  Search,
  Settings,
  ShoppingCart,
  Star,
  TableIcon,
  User,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import ProfileMenuItem from "./ProfileMenuItem";
import useAuthContext from "../../hooks/useAuthContext";
import NotificationItem from "./NotificationItem";
import StatCard from "./StatCard";
import StatusBadge from "./StatusBadge";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useFetchProducts from "../../hooks/useFetchProducts";
import apiClient from "../../services/api-client";

const lineData = [
  { name: "Jan", organic: 400, paid: 240 },
  { name: "Feb", organic: 300, paid: 139 },
  { name: "Mar", organic: 200, paid: 980 },
  { name: "Apr", organic: 278, paid: 390 },
  { name: "May", organic: 189, paid: 480 },
  { name: "Jun", organic: 239, paid: 380 },
  { name: "Jul", organic: 349, paid: 430 },
];

const DeshboardMain = () => {
  const { user, logoutUser, fetchAllUsers } = useAuthContext();

  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [active, setActive] = useState(false);
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  // toggles
  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  const toggleNotificationsMenu = () =>
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  const toggleActive = () => setActive(!active);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchAllUsers();
      if (data) setUsers(data);
    };

    loadUsers();
  }, []);

  useEffect(() => {
    const ordersUser = async () => {
      try {
        const response = await apiClient.get("/orders/");
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user?.is_staff) ordersUser();
  }, []);
  return (
    <>
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
          onClick={toggleSideMenu}
        >
          <aside className="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden">
            <div className="py-4 text-gray-500 dark:text-gray-400">
              <a
                className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                href="#"
              >
                MALE FASHION
              </a>
              <ul className="mt-6">
                <li className="relative px-6 py-3">
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                  <a
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                      active
                        ? "text-gray-800 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                    href="#"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    <span className="ml-4">Deshboard</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li className="relative px-6 py-3">
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                  <a
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                      active
                        ? "text-gray-800 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                    href="#"
                  >
                    <FileText className="w-5 h-5" />
                    <span className="ml-4">Forms</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                  <a
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                      active
                        ? "text-gray-800 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                    href="#"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span className="ml-4">Cards</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                  <a
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                      active
                        ? "text-gray-800 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                    href="#"
                  >
                    <BarChart className="w-5 h-5" />
                    <span className="ml-4">Charts</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                  <a
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                      active
                        ? "text-gray-800 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                    href="#"
                  >
                    <TableIcon className="w-5 h-5" />
                    <span className="ml-4">Tables</span>
                  </a>
                </li>
              </ul>

              <div className="px-6 my-6">
                <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                  <Link to="/login">
                    Create account <span className="ml-2">+</span>
                  </Link>
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
          <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            <button
              className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              onClick={toggleSideMenu}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Search Input */}
            <div className="flex justify-center flex-1 lg:mr-32">
              <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  className="w-full pl-8 pr-2 text-sm  border-0 rounded-md  focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  placeholder="Search for projects"
                />
              </div>
            </div>

            <ul className="flex items-center shrink-0 space-x-6">
              {/* Notifications Menu */}
              <li className="relative">
                <button
                  className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                  onClick={toggleNotificationsMenu}
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
                </button>
                {isNotificationsMenuOpen && (
                  <ul className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700">
                    <NotificationItem label="Messages" badge={13} />
                    <NotificationItem label="Sales" badge={2} />
                    <NotificationItem label="Alerts" />
                  </ul>
                )}
              </li>
              {/* Profile Menu */}
              <li className="relative">
                <button
                  className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                  onClick={toggleProfileMenu}
                >
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src={user?.image || "https://i.pravatar.cc/40"}
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                </button>
                {isProfileMenuOpen && (
                  <ul className="absolute right-0 w-56 p-2 space-y-2 text-gray-600bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700">
                    <a href="profile">
                      <ProfileMenuItem icon={User} label="Profile" />
                    </a>
                    <ProfileMenuItem icon={Settings} label="Settings" />
                    <button onClick={logoutUser}>
                      <ProfileMenuItem icon={LogOut} label="Log Out" />
                    </button>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </header>

        {/* main scetion */}
        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold">MALE Dashboard</h2>

            {/* CTA Banner */}
            <a
              className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple hover:bg-purple-700 transition-colors"
              href="#"
            >
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span>Star this project on GitHub</span>
              </div>
              <span className="flex items-center">
                View more <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </a>

            {/* Stats Cards */}
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <StatCard
                icon={Users}
                label="Total Users"
                value={users.length || 0}
                color="orange"
              />
              <StatCard
                icon={ListOrdered}
                label="Order"
                value={orders.length}
                color="green"
              />
              <StatCard
                icon={ShoppingCart}
                label="Total Products"
                value="9"
                color="blue"
              />
              <StatCard
                icon={MessageSquare}
                label="Avarage Rating"
                value="4.8"
                color="teal"
              />
            </div>
            {/* Table */}
            <div className="w-full overflow-hidden rounded-lg shadow-xs border border-gray-100 dark:border-gray-700">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left uppercase dark:text-black">
                      <th className="px-4 py-3">Client</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y ">
                    {users.map((u) => {
                      const userOrders = orders.filter((o) => o.user === u.id);
                      return (
                        <React.Fragment key={u.id}>
                          {userOrders.length > 0 ? (
                            userOrders.map((o) => (
                              <tr
                                key={o.id}
                                className="text-gray-700 hover:bg-gray-200"
                              >
                                <td className="px-4 py-3">
                                  <div className="flex items-center text-sm">
                                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                      <img
                                        className="object-cover w-full h-full rounded-full"
                                        src={u?.image}
                                        alt={u.first_name}
                                        referrerPolicy="no-referrer"
                                      />
                                      <div
                                        className="absolute inset-0 rounded-full shadow-inner"
                                        aria-hidden="true"
                                      ></div>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-black">
                                        {u.first_name}
                                        {u.last_name}
                                      </p>
                                      <p className="text-xs text-gray-700">
                                        {u.email}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-sm">
                                  <span>{o.total_price}</span>
                                </td>
                                <td className="px-4 py-3 text-xs">
                                  <StatusBadge status={o.status} />
                                </td>
                                <td className="px-4 py-3 text-sm">
                                  {new Date(o.created_at).toLocaleDateString()}
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr className="text-gray-700 hover:bg-gray-200">
                              <td className="px-4 py-3">
                                <div className="flex items-center text-sm">
                                  <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                    <img
                                      className="object-cover w-full h-full rounded-full"
                                      src={u?.image}
                                      alt={u.first_name}
                                      referrerPolicy="no-referrer"
                                    />
                                    <div
                                      className="absolute inset-0 rounded-full shadow-inner"
                                      aria-hidden="true"
                                    ></div>
                                  </div>
                                  <div>
                                    <p className="font-semibold text-black">
                                      {u.first_name}
                                      {u.last_name}
                                    </p>
                                    <p className="text-xs text-gray-800 ">
                                      {u.email}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-sm">
                                <span></span>
                              </td>
                              <td className="px-4 py-3 text-xs">
                                <StatusBadge status={""} />
                              </td>
                              <td className="px-4 py-3 text-sm"></td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Charts */}
            <h2 className="my-6 text-2xl font-semibold ">Charts</h2>
            <div className="">
              <div className="min-w-0 p-4 rounded-lg shadow-xs  border border-gray-100 dark:border-gray-700">
                <h4 className="mb-4 font-semibold">Traffic</h4>
                <div className="w-full">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="organic"
                        stroke="#0d9488"
                      />
                      <Line type="monotone" dataKey="paid" stroke="#9333ea" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center mt-4 space-x-3 text-sm text-black">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
                    <span>Organic</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                    <span>Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DeshboardMain;
