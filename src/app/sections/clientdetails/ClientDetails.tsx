import { useParams } from "react-router-dom";
import arrowButtonIcon from "../../assets/svg/arrow-button.svg";

const clients = [
  {
    id: 1,
    name: "Cinthia Valenzuela",
    description:
      "Cinthia Valenzuela es una tienda virtual especializada en la venta de jeans de alta calidad. Ofrecen una amplia gama de estilos y tallas para satisfacer las necesidades y gustos de sus clientes, destacándose por su enfoque en la comodidad y el diseño moderno. Su compromiso es proporcionar prendas que realcen la figura y sean duraderas, ofreciendo siempre la mejor experiencia de compra en línea.",
    link: "https://cinthiavalenzuela.com/",
    image:
      "https://cinthiavalenzuela.com/cdn/shop/files/carousel-first-image.png?v=1728259174&width=3000",
  },
  {
    id: 2,
    name: "Vitrialuminios",
    description:
      "Vitrialuminios es una empresa especializada en acabados de alta calidad en aluminio y vidrio, ofreciendo soluciones personalizadas para balcones, vitrinas, fachadas, puertas, ventanas, y más. Con un equipo de expertos en el manejo de materiales, garantizan durabilidad y elegancia en cada proyecto, adaptándose a las necesidades tanto de espacios residenciales como comerciales.",
    link: "https://vitrialuminios.com/",
    image:
      "https://d227sxcqqqmt48.cloudfront.net/public/vitrialuminios-about.jpg",
  },
];

export default function ClientDetails() {
  const { id } = useParams<{ id: string }>();

  const client = clients.find((client) => client.id === parseInt(id || "", 10));

  if (!client) {
    return <div>Cliente no encontrado</div>;
  }

  return (
    <div id="clientsdetails" className="py-20 px-8 xl:px-20 min-h-screen">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-extrabold text-center mt-12 z-10 relative">
        {client.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-16 text-justify mt-16">
        <div className="flex flex-col items-center gap-4 z-40">
          <p className="mt-6 text-lg text-white normal-case">
            {client.description}
          </p>
          <a
            href={client.link}
            target="_blank"
            rel="noreferrer"
            className="text-base text-white font-bold uppercase bg-[#719EFF] border border-[#719EFF] hover:border-white hover:bg-transparent px-8 py-4 rounded-md transition duration-300"
          >
            Visitar el sitio
          </a>
          <a
            href="/"
            className="flex flex-row items-center gap-2 text-base text-white font-bold uppercase underline px-8 py-4 rounded-md transition duration-300"
          >
            <img src={arrowButtonIcon} className="rotate-180" alt="arrow" />
            Volver al inicio
          </a>
        </div>
        <img
          className="max-w-full max-h-full object-contain mx-auto rounded-3xl z-40"
          src={client.image}
          alt={`${client.name} image`}
        />
      </div>
    </div>
  );
}
