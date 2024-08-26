import { services } from '../../data';

function Sectionseparator() {
  return (
    <div>
      <div className="w-full overflow-hidden bg-black p-8 whitespace-nowrap slides uppercase relative">
        <div className="inline-block text-3xl slide">
          {services.map((service) => (
            <span className="font-bold text-white mx-20 text-xñ xl:text-2xl">#{service.title}</span>
          ))}
        </div>
        <div className="inline-block text-3xl slide">
          {services.map((service) => (
            <span className="font-bold text-white mx-20 text-xñ xl:text-2xl">#{service.title}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sectionseparator;
