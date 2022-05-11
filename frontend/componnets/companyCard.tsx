import Link from "next/link";
import articleStyles from "../styles/Article.module.css";
import { companyDetails } from "../types/companyCard";

const CompanyCard = ({ company }: { company: companyDetails }) => {
  return (
    <>
      <Link href={`/company/${company.domain}`}>
        <div className={"card"}>
          <div className="logo">
            <img src={company.logo} alt="company logo" />
          </div>

          <div className="main">{company.name}</div>

          <div className="footer">{company.type}</div>
        </div>
      </Link>
    </>
  );
};

export default CompanyCard;
