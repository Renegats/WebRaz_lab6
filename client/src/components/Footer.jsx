import footerData from "../mockData/footerData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";

export const Header = ({ header }) => {
  return <h2>{header}</h2>;
};

export const Links = ({ link, href }) => {
  return (
    <li>
      <a href={href}>{link}</a>
    </li>
  );
};

export const Menu = ({ block: { header, links, href } }) => {
  const template = (
    <div className="footer_block">
      <p className="footer_heading_first_left">{header}</p>
      <ul className="footer_menu">
        {links.map((link, index) => (
          <Links key={index} link={link} href={href} />
        ))}
      </ul>
    </div>
  );

  return template;
};

export const FooterTemplate = ({footData}) => {
  return (
    <>
      <div className="fifth_part_page">
        <div className="fpp_upper_container">
          <Header header={footData.header} />
          <a href={footData.href}>
            <button className="fpp_button__Request_btn">
              Запросить ранний доступ
            </button>
          </a>
        </div>

        <div className="footer_blocks">
          {footData.columns.map((column, index) => (
            <Menu key={index} block={column} />
          ))}
        </div>
      </div>
      <div className="sixth_part">
        <p className="footer_sixth">© 2023 GPT-3. Все права защищены.</p>
      </div>
    </>
  );
}

export const Footer = () => {
  const { isLoading, isError, error, data } = useData({
    endpoint: "footer",
    options: {
      method: "GET",
    },
  });

  if (isError) {
    console.log("error");
    console.log(error);
  }

  if (isLoading) return <Preloader />;
  const renderedData = data || footerData;

  return <FooterTemplate footData={renderedData} />;
};

export default Footer;
