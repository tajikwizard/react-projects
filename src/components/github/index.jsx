import React, { useState } from "react";

const GitHub = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${value}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setError("");
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      fetchUserData();
    } else {
      setError("Please enter a GitHub username.");
    }
  };

  return (
    <div className="wrapper flex flex-col justify-center items-center h-screen ">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="p-2 border rounded mr-2"
          type="text"
          placeholder="Enter GitHub username"
          required
          value={value}
          onChange={handleChange}
        />
        <button className="hover:bg-blue-500 p-2 border rounded">Search</button>
      </form>
      <div className="search_container flex-col shadow-md w-8/12 flex justify-center items-center p-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {userData && (
          <div>
            <div className="img h-40 w-40 border mb-4">
              <img
                src={userData.avatar_url}
                alt={`${userData.login}'s Avatar`}
              />
            </div>

            <div className="username p-3 mt-20">
              <h2>
                Username:{" "}
                <span className="text-blue-500 underline">
                  {userData.login}
                </span>
              </h2>
            </div>
            <div className="following">
              <h3 className="mx-3">
                Followers:{" "}
                <span className="text-blue-400 ">{userData.followers}</span>
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHub;
