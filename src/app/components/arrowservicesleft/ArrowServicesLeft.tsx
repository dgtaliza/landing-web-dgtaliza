import arrowLeft from "../../assets/img/arrow-left.png";

type ArrowServicesLeftProps = {
  onClick?: () => void;
};

export default function ArrowServicesLeft({ onClick }: ArrowServicesLeftProps) {
  return (
    <div className="arrow arrow-services-left" onClick={onClick}>
      <img src={arrowLeft} alt="arrow-services-left" />
    </div>
  );
}
