import { LISTING_PER_PAGE } from "@/consistants"

const calcPageCount = (
  totalCount: number,
  perPage: number = LISTING_PER_PAGE
) => (totalCount ? Math.ceil(totalCount / perPage) : 0)

export default calcPageCount
