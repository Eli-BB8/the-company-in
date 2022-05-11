import React from 'react'
import { companyDetails } from '../types/companyCard'
import CompanyCard from './companyCard'

export default function CompaniesList({companies}:{companies:companyDetails[]}) {
  return (
    <div>
        <h1>companies</h1>
        {companies.map((company)=><CompanyCard key={company.name} company={company} />)}
    </div>
  )
}
