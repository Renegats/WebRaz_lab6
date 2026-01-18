import earlyAccessCardData from "../mockData/earlyAccessCardData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";

export const UpperHeader = ({ upper_header }) => {
  return <p className="early_access_card_upper_header">{upper_header}</p>;
};

export const Header = ({ header }) => {
  return <h3 className="early_access_card_header">{header}</h3>;
};

export const Button = ({ title }) => {
  return <button className="early_access_card_btn">{title}</button>;
};

export const EarlyAccessCardTemplate = ({ accessCardData }) => {
  return (
    <>
      <div className="early_access_card_background">
        <div>
          <UpperHeader upper_header={accessCardData.upper_header} />
          <Header header={accessCardData.header} />
        </div>
        <Button title={accessCardData.btn.title} />
      </div>
    </>
  );
};

export const EarlyAccessCard = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "early_access_card",
    options: {
      method: "GET",
    },
  });

  if (isError) {
    console.log("error");
    console.log(error);
  }

  if (isLoading) return <Preloader />;
  const renderedData = data || earlyAccessCardData;

  return <EarlyAccessCardTemplate accessCardData={renderedData} />;
};

export default EarlyAccessCard;
