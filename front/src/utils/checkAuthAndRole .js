import { jwtDecode } from "jwt-decode";


const checkAuthAndRole = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found. Please log in again.');
  }
  const decoded = jwtDecode(token);
  console.log("role dans check auth", decoded.role)
  if (!decoded.role || decoded.role !== 'admin') {
    throw new Error('Unauthorized access. Admin role required.');
  }
}
  export default checkAuthAndRole;