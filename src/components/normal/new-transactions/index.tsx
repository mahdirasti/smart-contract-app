import SeeMoreBox from "@/components/reusables/see-more"
import MyTable from "@/components/reusables/table/my-table"
import { Button, Paper } from "@mui/material"
import { Box, alpha } from "@mui/material"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

interface INewTransactionsProps {}

const newTransactionsItems = [
  {
    name: "zahra erw",
    request_date: "22.2.21",
    transaction_code: "660707708",
    amount: "0.0005",
    contract_link: "#",
    status: "paid"
  },
  {
    name: "zahra erw",
    request_date: "22.2.21",
    transaction_code: "660707708",
    amount: "0.0005",
    contract_link: "#",
    status: "paid"
  },
  {
    name: "zahra erw",
    request_date: "22.2.21",
    transaction_code: "660707708",
    amount: "0.0005",
    contract_link: "#",
    status: "paid"
  }
]

const NewTransactions: React.FunctionComponent<INewTransactionsProps> = (
  props
) => {
  const { t } = useTranslation()
  return (
    <Paper sx={{ my: 1 }}>
      <MyTable
        title={t("new_transactions")}
        items={newTransactionsItems}
        tableHeadItems={[
          {
            title: t("name"),
            render: (item: any) => {
              return item.name
            }
          },
          {
            title: t("request_date"),
            render: (item: any) => {
              return item.request_date
            }
          },
          {
            title: t("transaction_code"),
            render: (item: any) => {
              return item.transaction_code
            }
          },
          {
            title: t("amount"),
            render: (item: any) => {
              return item.amount
            }
          },
          {
            title: t("contract_link"),
            render: (item: any) => {
              return (
                <Box sx={{ ["& a"]: { textDecoration: "none" } }}>
                  <Link to={item.contract_link}>
                    <SeeMoreBox />
                  </Link>
                </Box>
              )
            }
          },
          {
            title: t("status"),
            render: (item: any) => {
              return item.status
            }
          }
        ]}
      />
    </Paper>
  )
}

export default NewTransactions
