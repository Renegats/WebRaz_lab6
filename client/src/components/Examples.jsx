import examplesData from "../mockData/examplesData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";

export const Header = ({ header, second_header }) => {
  return (
    <h2 className="special_header">
      {header}
      <br />
      {second_header}
    </h2>
  );
};

export const Card = ({ example: { src, alt, data, title, href } }) => {
  const template = (
    <>
      <div className="container_card">
        <img className="cards_section_img" src={src} alt={alt} />
        <div className="inf_block">
          <a href={href} className="data_for_card">
            {" "}
            {data}{" "}
          </a>
          <h3 className="card_header">{title}</h3>
          <div className="special_filler"></div>
          <a href={href} className="read-button">
            {" "}
            Читать полную статью{" "}
          </a>
        </div>
      </div>
    </>
  );

  return template;
};

export const ExamplesTemplate = ({exampleData}) => {
  return (
    <>
      <div className="special_header_block">
        <Header
          header={exampleData.header}
          second_header={exampleData.second_header}
        />
      </div>

      <div className="blocks">
        <div className="left_block_ex">
          {examplesData.left_examples.map((example, index) => (
            <Card example={example} key={index} />
          ))}
        </div>
        <div className="right_block_ex">
          {examplesData.right_examples.map((example, index) => (
            <Card example={example} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export const Examples = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "examples",
    options: {
      method: "GET",
    },
  });

  if (isError) {
    console.log("error");
    console.log(error);
  }

  if (isLoading) return <Preloader />;
  const renderedData = data || examplesData;

  return <ExamplesTemplate exampleData={renderedData} />;
};

export default Examples;
