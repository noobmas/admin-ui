import { useEffect, useState } from 'react'
import UserCard from './UserCard.jsx'
import { getUsers } from "./services.jsx";

function Exercise() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
        setError("Gagal mengambil data pengguna. Coba refresh halaman.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        User Nabil Cards
      </h1>
      {isLoading && <p className="text-center">Memuat data pengguna...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!isLoading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Exercise