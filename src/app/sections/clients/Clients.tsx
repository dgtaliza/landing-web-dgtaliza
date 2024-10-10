import { useNavigate } from "react-router-dom";
import cinthiaValenzuela from "../../assets/img/clients/client-cinthiavalenzuela.png";
import vitrialuminios from "../../assets/img/clients/client-vitrialuminios.png";

const clients = [
  {
    id: 1,
    image: cinthiaValenzuela,
    link: "https://cinthiavalenzuela.com/",
  },
  { id: 2, image: vitrialuminios, link: "https://vitrialuminios.com/" },
];

export default function Clients() {
  const navigate = useNavigate();

  const handleClientClick = (id: number) => {
    navigate(`/clientsdetails/${id}`);
  };

  return (
    <div id="clients" className="py-20 px-8 xl:px-20 relative z-40">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#EAF3FF] uppercase font-extrabold text-center mt-12 z-10 relative">
        Nuestros Clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-16">
        {clients.map((item) => (
          <div key={item.id}>
            <img
              className="w-full rounded-3xl hover:scale-105 ease-out transition duration-500 cursor-pointer"
              src={item.image}
              alt="client-image"
              onClick={() => handleClientClick(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
