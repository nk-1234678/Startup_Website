import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const EmployeeProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/employee/profile", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setProfile(res.data.employee);
      } catch (err) {
        console.error("Failed to load profile:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user?.token) {
      fetchProfile();
    }
  }, [user]);

  if (loading) return <div className="p-4">Loading your profile...</div>;
  if (!profile) return <div className="p-4 text-red-500">Could not load profile.</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Welcome, {profile.name} 👋</h2>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Position:</strong> {profile.position}</p>
      <p><strong>Joined:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default EmployeeProfile;
