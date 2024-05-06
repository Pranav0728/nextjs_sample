// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Cards() {
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000')
//             .then(response => {
//                 setItems(response.data);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//                 // Handle error here, e.g., show a message to the user
//             });
//     }, []);

//     return (
//         <>
//             <ul>
//                 {items.map((item) => (
//                     <li className="mb-2 mr-4 w-full bg-yellow-300 rounded-lg p-2" key={item.id}>
//                         {item.todo}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }
