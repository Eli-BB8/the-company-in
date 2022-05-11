import { GetServerSidePropsContext } from "next";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CompaniesList from "../componnets/companiesList";
import Search from "../componnets/Search";
import styles from "../styles/Home.module.css";
import api from "../utils/api";
import { serverPath } from "../config/serverPath";
import { companyDetails } from "../types/companyCard";
import { useState } from "react";

export default function Home({ companies }: { companies: companyDetails[] }) {
  const [companiesCards, setCompaniesCards] = useState(companies);

  const handleSearch = async (companyName: string) => {
    console.log(companyName);

    const companyResponse = await api.get(
      serverPath.getCompanyBasic(companyName)
    );

    if (companyResponse.ok) {
      const company = await companyResponse.json();

      if (!companiesCards.find(({ name }) => name == company.name)) {
        setCompaniesCards([company, ...companiesCards]);
      }
    }
  };

  return (
    <>
      <Search setData={handleSearch} />
      {companiesCards.length > 0 && (
        <CompaniesList companies={companiesCards} />
      )}
    </>
  );
}

export const getServerSideProps = async ({
  req: {
    headers: { cookie },
  },
}: GetServerSidePropsContext) => {
  const res = await api.get(serverPath.getCompanies, { cookie });

  const companies = res.ok ? await res.json() : [];

  return { props: { companies } };
};
