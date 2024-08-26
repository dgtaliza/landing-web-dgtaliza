import { memo } from "react";
import { services } from "../../data";

export default memo(function Sectionseparator() {
  return (
    <div>
      <div className="w-full overflow-hidden bg-black p-4 whitespace-nowrap slides uppercase relative">
        <div className="inline-block slide">
          {services.map((service, index) => (
            <span key={index} className="font-bold text-white mx-20 xl:text-xl">
              #{service.title}
            </span>
          ))}
        </div>
        <div className="inline-block slide">
          {services.map((service, index) => (
            <span key={index} className="font-bold text-white mx-20 xl:text-xl">
              #{service.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
