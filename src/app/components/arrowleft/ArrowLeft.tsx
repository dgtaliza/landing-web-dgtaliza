import arrowLeft from "../../assets/img/arrow-left.png";

type ArrowLeftProps = {
  onClick?: () => void;
};

export default function ArrowLeft({ onClick }: ArrowLeftProps) {
  return (
    <div className="arrow arrow-clients-left" onClick={onClick}>
      <img src={arrowLeft} alt="arrow-left" />
    </div>
  );
}
