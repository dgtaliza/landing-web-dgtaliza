import arrowRight from "../../assets/img/arrow-right.png";

type ArrowServicesRightProps = {
  onClick?: () => void;
};

export default function ArrowServicesRight({ onClick }: ArrowServicesRightProps) {
  return (
    <div className="arrow arrow-services-right" onClick={onClick}>
      <img src={arrowRight} alt="arrow-services-right" />
    </div>
  );
}
