import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthProvider";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FaUserTie } from "react-icons/fa";

// Function to fetch menu data from the API
const fetchMenuData = async () => {
    const { data } = await axios.get("https://gadget-hub-one.vercel.app/menu");
    return data;
};

// Function to fetch users data from the API
const fetchUsersData = async () => {
    const { data } = await axios.get("https://gadget-hub-one.vercel.app/users");
    return data;
};

const DashBoardHome = () => {
    const { user, isAdmin } = useContext(AuthContext);
    console.log(user);

    // Use React Query to fetch menu data
    const {
        data: menuData,
        error: menuError,
        isLoading: menuLoading,
    } = useQuery({
        queryKey: ["menuData"],
        queryFn: fetchMenuData,
    });

    // Use React Query to fetch users data
    const {
        data: usersData,
        error: usersError,
        isLoading: usersLoading,
    } = useQuery({
        queryKey: ["usersData"],
        queryFn: fetchUsersData,
    });

    // Handle loading state
    if (menuLoading || usersLoading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    // Handle error state
    if (menuError || usersError) {
        return <div>Error loading data</div>;
    }

    // Process menu data to generate chart data
    const chartData = menuData.reduce((acc, item) => {
        const category =
            item.category.charAt(0).toUpperCase() + item.category.slice(1);
        const existingCategory = acc.find((entry) => entry.name === category);

        if (existingCategory) {
            existingCategory.y += 1;
        } else {
            acc.push({ name: category, y: 1 });
        }
        return acc;
    }, []);

    // Process users data to get counts of each role
    const roleCounts = usersData.reduce(
        (acc, user) => {
            acc[user.role] = (acc[user.role] || 0) + 1;
            return acc;
        },
        { user: 0, admin: 0 }
    );

    // User Pie Chart Options
    const userChartOptions = {
        chart: {
            type: "pie",
        },
        title: {
            text: "User Roles",
        },
        series: [
            {
                name: "Users",
                data: [
                    {
                        name: `Admins: ${roleCounts.admin}`,
                        y: roleCounts.admin,
                        color: "#94B6FF",
                    },
                    {
                        name: `Users: ${roleCounts.user}`,
                        y: roleCounts.user,
                        color: "#FFC311",
                    },
                ],
            },
        ],
    };

    // Product Area Chart Options
    const productChartOptions = {
        chart: {
            type: "area",
        },
        title: {
            text: "Product Categories",
        },
        xAxis: {
            categories: chartData.map((item) => item.name),
            title: {
                text: "Category",
            },
        },
        yAxis: {
            title: {
                text: "Count",
            },
        },
        series: [
            {
                name: "Products",
                data: chartData.map((item) => item.y),
                color: "#A020F0",
                fillOpacity: 0.5,
            },
        ],
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 mt-8 text-center">
                <p className="text-[#D99904] italic text-xl font-normal">
                    ---Dashboard Home Page---
                </p>
                <hr className="w-[22rem] max-w-full" />
                <p className="text-[#151515] font-normal text-3xl sm:text-4xl font-abc">
                    Welcome Back, {user.displayName}
                </p>
            </div>

            <div className="flex justify-center mt-8">
                <div className="bg-slate-200 px-8 py-5 flex flex-col items-center gap-3 rounded-3xl w-full max-w-md sm:px-14">
                    {user.photoURL ? (
                        <img
                            className="w-[8rem] sm:w-[10rem] rounded-full border-4 p-1 border-sky-300"
                            src={user.photoURL}
                            alt=""
                        />
                    ) : (
                        <FaUserTie className="text-[6rem] sm:text-[7rem]" />
                    )}

                    <div className="flex flex-col items-center text-xl gap-4">
                        <p>{user.displayName}</p>
                        <p className="bg-cyan-700 animate-pulse text-white rounded-xl px-2 py-1">
                            {isAdmin ? "Admin" : "User"}
                        </p>
                    </div>
                    <p className="text-lg">{user.email}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                    <h3 className="text-lg font-bold">Users Pie-Chart</h3>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={userChartOptions}
                    />
                </div>

                <div>
                    <h3 className="text-lg font-bold">Product Area-Chart</h3>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={productChartOptions}
                    />
                </div>
            </div>
        </div>
    );
};

export default DashBoardHome;
