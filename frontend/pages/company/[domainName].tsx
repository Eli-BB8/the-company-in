import { GetServerSidePropsContext } from "next";
import api from "../../utils/api";
import { serverPath } from "../../config/serverPath";
import { companyType } from "../../types/company";
import Link from "next/link";

export default function Home({
  companyFullDetails,
}: {
  companyFullDetails: companyType;
}) {
  const {
    logo,
    name,
    domain,
    description,
    category: { industry },
    metrics: { raised, marketCap, employees, annualRevenue },
    location,
  } = companyFullDetails;

  return (
    <>
      <Link href={"/"}>Home</Link>
      {companyFullDetails && (
        <div>
          {logo && (
            <div className="logo">
              <img src={logo} alt="company logo" />
            </div>
          )}
          {name && <div>{name}</div>}
          {description && <div> {description}</div>}
          {domain && <p>www.{domain}</p>}
          <div>
            <h3>category</h3>
            {industry && <div>industry: {industry}</div>}
          </div>
          <div>
            <h3>metrics</h3>
            {raised && <div>raised: {raised}</div>}
            {marketCap && <div>marketCap: {marketCap}</div>}
            {employees && <div>employees: {employees}</div>}
            {annualRevenue && <div>annualRevenue: {annualRevenue}</div>}
          </div>
          {location && <div>location: {location}</div>}
        </div>
      )}
    </>
  );
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const res = await api.get(
    serverPath.getCompanyFull(params?.domainName as string)
  );

  const companyFullDetails = res.ok ? await res.json() : [];

  return { props: { companyFullDetails } };
};
