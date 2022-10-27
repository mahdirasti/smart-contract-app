/**
 * Place all endpoints here
 */

type ParamsType = string | number | boolean
type NoParamKeys =
  | "profile"
  | "auth-otp-step-one"
  | "auth-otp-step-two"
  | "auth-resend-otp"
  | "attributes"
  | "products"
  | "countries"
  | "productsBundle"
  | "brands"
  | "shipping"
  | "roles"
  | "users"
  | "permissions"
  | "orders"
  | "customers"
type ParamKeys =
  | "singleAttribute"
  | "singleTag"
  | "singleUser"
  | "tags"
  | "singleProductBundle"
  | "singleProduct"
  | "singleProductVariants"
  | "singleProductPictures"
  | "singleProductSinglePicture"
  | "singleProductCategories"
  | "singleProductBundleProducts"
  | "categories"
  | "singleCategory"
  | "singleCategoryAttributes"
  | "countriesState"
  | "singleShipping"
  | "singleBrand"
  | "singleRole"
  | "singleOrder"
  | "hasParam"
  | "importExcel"
  | "importExcelStore"
  | "productsWithCacheKey"
  | "listPostType"
  | "singlePostPostType"
  | "comments"

type EndpointsType = {
  [k in NoParamKeys]: {
    endpoint: string
  }
} & {
  [k in ParamKeys]: {
    endpoint: string
    params: string[]
  }
}

type ParamsGenerator<T extends ParamKeys> = {
  [k in typeof endpoints[T]["params"][number]]: ParamsType
}

type FunctionOverload = {
  <T extends NoParamKeys>(key: T): string
  <T extends ParamKeys>(key: T, params: ParamsGenerator<T>): string
}

/**
 * endpoints must have the following naming
 * @example ```js
 * const endpoints = {
 *    "endpoint-key": {
 *      endpoint: "path/to/my/endpoint/" or "path/to/:my/endpoint/:params",
 *      params: false or ["my", "params"]
 *    }
 * }
 * This way typescript will suggest you with required params
 * ```
 */
export const endpoints = {
  "auth-otp-step-one": {
    endpoint: "/auth/login/via-otp/step-one"
  },
  profile: {
    endpoint: "/profile"
  },
  "auth-otp-step-two": {
    endpoint: "/auth/login/via-otp/step-two"
  },
  "auth-resend-otp": {
    endpoint: "/auth/resend-otp"
  },
  products: {
    endpoint: "/products"
  },
  customers: {
    endpoint: "/customers"
  },
  users: {
    endpoint: "/users"
  },
  productsWithCacheKey: {
    endpoint: "/:type/import/excel/:key",
    params: ["type", "key"]
  },
  comments: {
    endpoint: "/comment-types/:type/comments",
    params: ["type"]
  },
  countries: {
    endpoint: "/countries"
  },
  countriesState: {
    endpoint: "/countries/:country/states",
    params: ["country"]
  },
  productsBundle: {
    endpoint: "/bundles"
  },
  brands: {
    endpoint: "/brands"
  },
  singleBrand: {
    endpoint: "/brands/:brandId",
    params: ["brandId"]
  },
  singleOrder: {
    endpoint: "/orders/:orderId",
    params: ["orderId"]
  },
  singleRole: {
    endpoint: "/roles/:roleId",
    params: ["roleId"]
  },
  singleProductBundle: {
    endpoint: "/bundles/:bundle",
    params: ["bundle"]
  },
  singleProductBundleProducts: {
    endpoint: "/bundles/:bundle/products",
    params: ["bundle"]
  },
  singleProduct: {
    endpoint: "/products/:product",
    params: ["product"]
  },
  singleProductVariants: {
    endpoint: "/products/:product/variants",
    params: ["product"]
  },
  singleProductPictures: {
    endpoint: "/products/:product/pictures",
    params: ["product"]
  },
  singleProductSinglePicture: {
    endpoint: "/products/:product/pictures/:picture",
    params: ["product", "picture"]
  },
  singleProductCategories: {
    endpoint: "/products/:product/categories",
    params: ["product"]
  },
  attributes: {
    endpoint: "/attributes"
  },
  singleAttribute: {
    endpoint: "/attributes/:attributeId",
    params: ["attributeId"]
  },
  singleShipping: {
    endpoint: "/shipping/:shipping",
    params: ["shipping"]
  },
  tags: {
    endpoint: "/:group/tags",
    params: ["group"]
  },
  singleTag: {
    endpoint: "/:group/tags/:tagsId",
    params: ["group", "tagsId"]
  },
  singleUser: {
    endpoint: "/users/:userId",
    params: ["userId"]
  },
  categories: {
    endpoint: "/:group/categories",
    params: ["group"]
  },
  singleCategory: {
    endpoint: "/:group/categories/:category_id",
    params: ["group", "category_id"]
  },
  singleCategoryAttributes: {
    endpoint: "/:group/categories/:category_id/attributes",
    params: ["group", "category_id"]
  },
  shipping: {
    endpoint: "/shipping"
  },
  roles: {
    endpoint: "/roles"
  },
  orders: {
    endpoint: "/orders"
  },
  permissions: {
    endpoint: "/permissions"
  },
  importExcel: {
    endpoint: "/:type/import/excel",
    params: ["type"]
  },
  importExcelStore: {
    endpoint: "/:type/import/store",
    params: ["type"]
  },
  listPostType: {
    endpoint: "/:type/posts",
    params: ["type"]
  },
  singlePostPostType: {
    endpoint: "/:type/posts/:post",
    params: ["type", "post"]
  },
  hasParam: {
    endpoint: "/param/:myParam",
    params: ["myParam"]
  }
} as const

/**
 * this function returns an endpoint based on panel, key, and params
 * @param key endpoint key inside that panel
 * @param params if the selected endpoint had any params(for example /details/:id), the keys in this argument must match the params of that endpoint({ id: 2 } in this example)
 * @returns the endpoint of the API
 */
const getEndpoint: FunctionOverload = (...args: any[]) => {
  const key = args[0] as keyof typeof endpoints
  const params: any = args?.[1]
  let selectedEndpoint: string = endpoints[key].endpoint
  if (params) {
    for (let key in params) {
      let regex = new RegExp(`\/:${key}`)
      selectedEndpoint = selectedEndpoint.replace(regex, "/" + params[key])
    }
  }
  return selectedEndpoint
}

export default getEndpoint
