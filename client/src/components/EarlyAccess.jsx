import earlyAccessData from "../mockData/earlyAccessData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";

export const BeforeHeader = ({ before_header }) => {
  return <p className="right__before_header">{before_header}</p>;
};

export const Header = ({ header }) => {
  return <h2 className="right__header">{header}</h2>;
};

export const Description = ({ description: { description, href } }) => {
  return (
    <>
      <p className="right__description">{description}</p>
      <a href={href} className="right__cta">
        Запросить ранний доступ
      </a>
    </>
  );
};

export const MyApps = ({ app: { src, alt } }) => {
  return <img src={src} alt={alt} />;
};

export const EarlyAccessTemplate = ({ accessData }) => {
  return (
    <>
      <div className="early_access_section__left">
        <MyApps app={accessData.my_apps} />
      </div>
      <div className="early_access_section__right">
        <BeforeHeader before_header={accessData.before_header} />
        <Header header={accessData.header} />
        <Description description={accessData.description} />
      </div>
    </>
  );
};

export const EarlyAccess = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "early_access",
    options: {
      method: "GET",
    },
  });

  if (isError) {
    console.log("error");
    console.log(error);
  }

  if (isLoading) return <Preloader />;
  const renderedData = data || earlyAccessData;

  return <EarlyAccessTemplate accessData={renderedData} />;
};

export default EarlyAccess;
